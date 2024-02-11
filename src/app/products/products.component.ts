import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { EditProductModalComponent } from './edit-product-modal/edit-product-modal.component';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { DeleteProductConfirmationComponent } from './delete-product-confirmation/delete-product-confirmation.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService,private toastr: ToastrService,private dialog: MatDialog ) { }
  allproducts:any;
  ngOnInit() {
this.getAllProducts();
  }

  getAllProducts() {

    this.productService.getAllProducts().subscribe(
      (res:Object) => {
        // Handle the response here

        this.allproducts = res['products'];
        console.log(this.allproducts);

        
      },
      (error) => {
        // Handle the error here
        console.error('Error fetching users:', error);
      }
    );
  }
  editProduct(product: any): void {
    const dialogRef = this.dialog.open(EditProductModalComponent, {
      width: '400px',
      data: { product: { ...product } }
   
      // Pass a copy of the product data to the modal
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
        // Update the user data if the user saved changes
        // For example:
        this.productService.updateProduct(result).subscribe(updatedProduct => {
          // Handle the updated user data
          console.log('Updated Product:', updatedProduct);
          this.getAllProducts();
          // You might want to update the user in allusers array as well
          // const index = this.allusers.findIndex(u => u._id === updatedUser._id);
          // if (index !== -1) {
          //   this.allusers[index] = updatedUser;
          // }
          this.toastr.success('Product updated successfully');
        }, error => {
          console.error('Error updating user:', error);
          this.toastr.error('Failed to update user');
        });
      }
    });
  }


  deleteProduct(productId: string): void {
    const dialogRef = this.dialog.open(DeleteProductConfirmationComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // If the user confirmed deletion
        this.productService.deleteProduct(productId).subscribe(
          () => {
            this.toastr.success('Product deleted successfully');
            this.getAllProducts();
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
