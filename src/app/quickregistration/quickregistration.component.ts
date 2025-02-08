import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-quickregistration',
  templateUrl: './quickregistration.component.html',
  styleUrl: './quickregistration.component.css'
})
export class QuickregistrationComponent {
 @ViewChild('fileInput') fileInput!: ElementRef;
  @ViewChild('imagePreview') imagePreview!: ElementRef;
  @ViewChild('video') video!: ElementRef;
  @ViewChild('snap') snap!: ElementRef;
  @ViewChild('canv1') canvas!: ElementRef;
  imageUrl: string = '../../assets/icons/default.jpg';


  

  ngAfterViewInit() {
    // Ensure that the @ViewChild elements are available
    if (!this.fileInput || !this.imagePreview || !this.video || !this.snap || !this.canvas) {
      console.error('One or more @ViewChild elements are not available');
    }
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
}
