import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ToasterComponent } from '../toaster/toaster.component';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  constructor(private snackBar: MatSnackBar) {}

  show(message: string, type: 'success' | 'error' | 'info' | 'warning', duration: number = 3000) {
    this.snackBar.openFromComponent(ToasterComponent, {
      data: { message, type },
      duration,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
