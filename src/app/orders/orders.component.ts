import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { EditOrderModalComponent } from './edit-order-modal/edit-order-modal.component';
import { DeleteOrderConfirmationComponent } from './delete-order-confirmation/delete-order-confirmation.component';

@Component({
  selector: 'app-icons',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private orderService: OrderService,private toastr: ToastrService,private dialog: MatDialog ) { }  
  
  allorders:any;

  ngOnInit() {
    this.getAllOrders();
  }

  getAllOrders() {

    this.orderService.getAllOrders().subscribe(
      (res:Object) => {
        // Handle the response here

        this.allorders = res['orders'];
        console.log(this.allorders);

        
      },
      (error) => {
        // Handle the error here
        console.error('Error fetching orders:', error);
      }
    );
  }
  editOrder(order: any): void {
    const dialogRef = this.dialog.open(EditOrderModalComponent, {
      width: '400px',
      data: { order: { ...order } }
   
      // Pass a copy of the order data to the modal
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        // Update the user data if the user saved changes
        // For example:
        this.orderService.updateOrder(result).subscribe(updatedOrder => {
          // Handle the updated user data
          console.log('Updated Order:', updatedOrder);
          this.getAllOrders();
          
          this.toastr.success('Order updated successfully');
        }, error => {
          console.error('Error updating user:', error);
          this.toastr.error('Failed to update user');
        });
      }
    });
  }


  deleteOrder(orderId: string): void {
    const dialogRef = this.dialog.open(DeleteOrderConfirmationComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // If the user confirmed deletion
        this.orderService.deleteOrder(orderId).subscribe(
          () => {
            this.toastr.success('Order deleted successfully');
            this.getAllOrders();
          },
          (error) => {
            console.error('Error deleting order:', error);
            // Optionally, display an error message or perform error handling
          }
        );
      }
    });
  }

}
