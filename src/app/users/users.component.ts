import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { EditUserModalComponent } from './edit-user-modal/edit-user-modal.component';
import { DeleteUserConfirmationComponent } from './delete-user-confirmation/delete-user-confirmation.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private toastr: ToastrService,private userService:UserService,private dialog: MatDialog) {}

allusers:[];
  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {

    this.userService.getAllUsers().subscribe(
      (res) => {
        // Handle the response here
        this.allusers = res.users;
        console.log('All users:', res.users);
        console.log('4th users:', res.users[3]);
      },
      (error) => {
        // Handle the error here
        console.error('Error fetching users:', error);
      }
    );
  }

  editUser(user: any): void {
    const dialogRef = this.dialog.open(EditUserModalComponent, {
      width: '300px',
      data: { user: { ...user } }
   
      // Pass a copy of the user data to the modal
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        // Update the user data if the user saved changes
        // For example:
        this.userService.updateUser(result).subscribe(updatedUser => {
          // Handle the updated user data
          console.log('Updated User:', updatedUser);
          this.getAllUsers();
          // You might want to update the user in allusers array as well
          // const index = this.allusers.findIndex(u => u._id === updatedUser._id);
          // if (index !== -1) {
          //   this.allusers[index] = updatedUser;
          // }
          this.toastr.success('User updated successfully');
        }, error => {
          console.error('Error updating user:', error);
          this.toastr.error('Failed to update user');
        });
      }
    });
  }

  deleteUser(userId: string): void {
    const dialogRef = this.dialog.open(DeleteUserConfirmationComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // If the user confirmed deletion
        this.userService.deleteUser(userId).subscribe(
          () => {
            console.log('User deleted successfully');
            // Optionally, refresh the user list or perform any other actions
            this.getAllUsers();
          },
          (error) => {
            console.error('Error deleting user:', error);
            // Optionally, display an error message or perform error handling
          }
        );
      }
    });
  }

}