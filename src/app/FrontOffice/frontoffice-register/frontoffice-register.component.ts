
import { Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ReferralModalComponent } from '../../referral-modal/referral-modal.component';
import { dropdownValue } from '../../data/PatientRegister';
import { country, statesOfIndia } from '../../data/country';

@Component({
  selector: 'app-frontoffice-register',
  templateUrl: './frontoffice-register.component.html',
  styleUrl: './frontoffice-register.component.css'
})
export class FrontofficeRegisterComponent implements AfterViewInit, OnInit {
  @ViewChild('fileInput') fileInput!: ElementRef;
  @ViewChild('imagePreview') imagePreview!: ElementRef;
  @ViewChild('video') video!: ElementRef;
  @ViewChild('snap') snap!: ElementRef;
  @ViewChild('canv1') canvas!: ElementRef;
  imageUrl: string = '../../assets/icons/default.jpg';
  countries: string[] = country;
  states: string[] = statesOfIndia;
  FormDropDownValue :any = dropdownValue
  patientRegisterForm!: FormGroup;
  todayDate :  string = ""
  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    let today = new Date();

    this.todayDate = today.getDate().toString().padStart(2, '0') + '-' +
                        (today.getMonth() + 1).toString().padStart(2, '0') + '-' +
                        today.getFullYear();

  }

  ngOnInit(): void {
    this.patientRegisterForm = this.fb.group({
      title: [ '', Validators.required],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      DOB: ['', Validators.required],
      Age: ['', Validators.required],
      Gender: ['', Validators.required],
      Mobile: ['', Validators.required],
      AlternateMobileNum: [''],
      Email: ['', [Validators.required, Validators.email]],
      MaritalStatus: ['', Validators.required],
      Ethnicity: ['', Validators.required],
      AlternateEmail: ['', [Validators.required, Validators.email]],
      PassportNumber: ['', Validators.required],
      NationalId: ['', Validators.required],
      Attender_Information: ['', Validators.required],
      Nationality: ['', Validators.required],
      AddressLine1: ['', Validators.required],
      addressSearch: ['', Validators.required],
      Country: [this.countries[0]  || '', Validators.required],
      State: ['', Validators.required],
      District: ['', Validators.required],
      City: ['', Validators.required],
      Area: ['', Validators.required],
      Pincode: ['', Validators.required],
      PatientType: ['', Validators.required],
      CovidVaccine: ['', Validators.required],
      IsVip: [false],
      VipType: ['', Validators.required],
      Occupation: ['', Validators.required],
      VisaType: ['', Validators.required],
      Department: ['', Validators.required],
      Doctor: ['', Validators.required],
      Payer: ['', Validators.required],
      PayerType: ['', Validators.required],
      Source_Type: ['', Validators.required],
      ReferralName: ['', Validators.required],
      Reason: ['', Validators.required],
      PayerNumber: ['', Validators.required],
      IsMlc: [false],
      Discount_Type: ['', Validators.required],
      Discount: ['', Validators.required],
      Remarks: ['', Validators.required],
      Emergency: [false],
      No_Bill: [false],
      Is_OPD: [false],
      Payment_Type: ['', Validators.required],
      Receipt_Amount: ['', Validators.required],
      Membership_Number: ['', Validators.required],
      MembershipType: ['', Validators.required],
      Membership_Alternate_Num: ['', Validators.required],
      Membership_Alternate_Email: ['', [Validators.required, Validators.email]],
      UserPic: [''],
      

    });
  }
  

  getDropdownValues(name: string) {
    const dropdown = this.FormDropDownValue.find((item: { name: string, value: any[] }) => item.name === name);
    return dropdown ? dropdown.value : [];
  }
  ngAfterViewInit() {

    // Ensure that the @ViewChild elements are available
    if (!this.fileInput || !this.imagePreview || !this.video || !this.snap || !this.canvas) {
      console.error('One or more @ViewChild elements are not available');
    }
  }



  openReferralModal(title: string): void {
    const dialogRef = this.dialog.open(ReferralModalComponent, {
      width: '100vw',
      maxWidth: '100vw',
      height: '70vh',
      data: { title }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.patientRegisterForm.patchValue(result);
      }
    });
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
    console.log(this.patientRegisterForm.value);
    console.log(this.patientRegisterForm.errors); // Shows form errors (if any)

    if (this.patientRegisterForm.valid) {
      console.log('✅ Form Submitted Successfully!', this.patientRegisterForm.value);
      

    } else {
      console.log('❌ Form Invalid! Please check your inputs.');
      this.markFormGroupTouched(this.patientRegisterForm); // ✅ Highlight errors
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