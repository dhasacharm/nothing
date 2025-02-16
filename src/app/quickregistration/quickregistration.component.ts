import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { dropdownValue } from '../data/PatientRegister';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
import {
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS
} from "@angular/material/core";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-quickregistration',
  templateUrl: './quickregistration.component.html',
  styleUrls: ['./quickregistration.component.css'],
  
})
export class QuickregistrationComponent implements OnInit, AfterViewInit {
  @ViewChild('fileInput') fileInput!: ElementRef;
  @ViewChild('imagePreview') imagePreview!: ElementRef;
  @ViewChild('video') video!: ElementRef;
  @ViewChild('snap') snap!: ElementRef;
  @ViewChild('canv1') canvas!: ElementRef;
  imageUrl: string = '../../assets/icons/default.jpg';
  FormDropDownValue: any = dropdownValue;
  simpleRegistrationForm!: FormGroup;

  

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.simpleRegistrationForm = this.fb.group({
      Types: [this.getDropdownValues('Types')[0]?.value || '', Validators.required],
      title: ['', Validators.required],
      PatientName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]+$')]],
      DOB: [''],
      Age: [''],
      Gender: ['', Validators.required],
      Mobile: ['', Validators.required], 
      MaritalStatus: ['',],
      NationalityId: ['', ],
      AddressLine1: [''],
      addressSearch: [''],
      IsMlc: [false],
      IsVip: [false],
      VipType: [''],
      UserPic: ['']
    });

    // ✅ Listen for Title Change & Update Gender
    this.simpleRegistrationForm.get('title')?.valueChanges.subscribe(selectedTitle => {
      this.updateGenderBasedOnTitle(selectedTitle);
    });
     // Detect DOB changes and calculate age
     this.simpleRegistrationForm.get('DOB')?.valueChanges.subscribe((dob) => {
      if (dob) {
        this.calculateAge(dob);
      }
    });

  }

  // ✅ Function to Calculate Age
  calculateAge(dob: string) {
    const birthDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    this.simpleRegistrationForm.get('Age')?.setValue(age);
  }

 // Convert JavaScript Date to YYYY-MM-DD
 formatDate(date: Date) {
    if (!date) return ''; // Prevent errors if date is null

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Ensure 2-digit month
    const day = String(date.getDate()).padStart(2, '0'); // Ensure 2-digit day
    return `${year}-${month}-${day}`;
  }

setDOB(event: any) {
  if (event.value) {
    const selectedDate = new Date(event.value);
    console.log("Formatted Date:", this.formatDate(selectedDate)); // Debugging
    this.simpleRegistrationForm.get('DOB')?.setValue(this.formatDate(selectedDate));
  }
}
  onTitleChange(event: any) {
    const selectedTitle = event.target.value;
    this.updateGenderBasedOnTitle(selectedTitle);
  }
  // ✅ Function to Update Gender Based on Title
  updateGenderBasedOnTitle(title: string) {
    let gender = '';

    if (['Mr.', 'MASTER.', 'RREV.BROTHER.'].includes(title)) {
      gender = 'Male';
    } else if (['Mrs.', 'Ms.', 'BABY OF.', 'BABY.'].includes(title)) {
      gender = 'Female';
    } else {
      gender = 'Other'; // For neutral titles like "Dr.", "TEAM", etc.
    }
    console.log(gender)
    this.simpleRegistrationForm.get('Gender')?.setValue(gender);
  }

  ngAfterViewInit() {
    // Ensure that the @ViewChild elements are available
    if (!this.fileInput || !this.imagePreview || !this.video || !this.snap || !this.canvas) {
      console.error('One or more @ViewChild elements are not available');
    }
  }

  getDropdownValues(name: string) {
    const dropdown = this.FormDropDownValue.find((item: { name: string, value: any[] }) => item.name === name);
    return dropdown ? dropdown.value : [];
  }

  previewImage(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const img = new Image();
        img.onload = () => {
          const canvasElement = this.canvas.nativeElement;
          const context = canvasElement.getContext('2d');
          context.clearRect(0, 0, canvasElement.width, canvasElement.height);
          context.drawImage(img, 0, 0, canvasElement.width, canvasElement.height);
        };
        img.src = reader.result as string;
        this.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  captureImage() {
    const videoElement = this.video.nativeElement;
    const snapButton = this.snap.nativeElement;
    videoElement.style.display = 'block';
    snapButton.style.display = 'block';

    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoElement.srcObject = stream;
      })
      .catch(err => {
        console.log("An error occurred: " + err);
      });
  }

  snapImage() {
    const videoElement = this.video.nativeElement;
    const canvasElement = this.canvas.nativeElement;
    const context = canvasElement.getContext('2d');
    context.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);

    this.imagePreview.nativeElement.src = canvasElement.toDataURL('image/png');

    videoElement.style.display = 'none';
    this.snap.nativeElement.style.display = 'none';
    (videoElement.srcObject as MediaStream).getTracks().forEach((track: MediaStreamTrack) => track.stop());
  }

  removeImage() {
    const canvasElement = this.canvas.nativeElement;
    const context = canvasElement.getContext('2d');
    context.clearRect(0, 0, canvasElement.width, canvasElement.height);
    this.imageUrl = '../../assets/icons/default.jpg';
  }

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }

  onSubmit() {
    console.log(this.simpleRegistrationForm.value);
    console.log(this.simpleRegistrationForm.errors); // Shows form errors (if any)

    if (this.simpleRegistrationForm.valid) {
      console.log('✅ Form Submitted Successfully!', this.simpleRegistrationForm.value);
    } else {
      console.log('❌ Form Invalid! Please check your inputs.');
      this.markFormGroupTouched(this.simpleRegistrationForm); // ✅ Highlight errors
    }
  }
  
  // ✅ Function to Mark Invalid Fields as Touched
  markFormGroupTouched(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control); // Recursively check nested forms
      } else {
        control?.markAsTouched(); // Mark field as touched to show errors
      }
    });
  }
  
}