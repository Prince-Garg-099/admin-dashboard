import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-user-confirmation',
  template: `
    <h2 mat-dialog-title>Confirm Deletion</h2>
    <mat-dialog-content>Are you sure you want to delete this user?</mat-dialog-content>
    <mat-dialog-actions>
      <button mat-button mat-dialog-close>No</button>
      <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Yes</button>
    </mat-dialog-actions>
  `,
})
export class DeleteUserConfirmationComponent {
  constructor(public dialogRef: MatDialogRef<DeleteUserConfirmationComponent>) {}
}
