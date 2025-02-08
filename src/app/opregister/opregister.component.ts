import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ReferralModalComponent } from '../referral-modal/referral-modal.component';

@Component({
  selector: 'app-opregister',
  templateUrl: './opregister.component.html',
  styleUrls: ['./opregister.component.css']
})
export class OpregisterComponent {
  @ViewChild('fileInput') fileInput!: ElementRef;
  @ViewChild('imagePreview') imagePreview!: ElementRef;
  @ViewChild('video') video!: ElementRef;
  @ViewChild('snap') snap!: ElementRef;
  @ViewChild('canv1') canvas!: ElementRef;
  fileToUpload: any;
  imageUrl: string = '../../assets/icons/default.jpg';

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.registerForm = this.fb.group({
      referralName: ['', Validators.required],
      reason: ['', Validators.required],
      payerNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  openReferralModal(title: string,): void {
    const dialogRef = this.dialog.open(ReferralModalComponent, {
      width: '250px',
      data: { title }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.registerForm.patchValue(result);
      }
    });
  }
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
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
    videoElement.srcObject.getTracks().forEach((track: { stop: () => any; }) => track.stop());
  }

  removeImage() {
    const canvasElement = this.canvas.nativeElement;
    const context = canvasElement.getContext('2d');
    context.clearRect(0, 0, canvasElement.width, canvasElement.height);
    this.imagePreview.nativeElement.src = '../../assets/icons/default.jpg';
  }

  triggerFileInput() {
    this.fileInput.nativeElement.click();
  }
}