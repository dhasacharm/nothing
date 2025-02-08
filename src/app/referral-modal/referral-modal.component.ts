import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-referral-modal',
  templateUrl: './referral-modal.component.html',
  styleUrls: ['./referral-modal.component.css']
})
export class ReferralModalComponent {
  referralForm: FormGroup;
  title: string;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ReferralModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.title = data.title;
    this.referralForm = this.fb.group({
      referralName: [data.referralName || '', Validators.required],
      reason: [data.reason || '', Validators.required],
      payerNumber: [data.payerNumber || '', Validators.required]
    });
  }

  onSubmit() {
    if (this.referralForm.valid) {
      this.dialogRef.close(this.referralForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}