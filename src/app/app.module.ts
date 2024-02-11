import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import{AdminService} from './services/admin.service';
import{OrderService} from './services/order.service';
import{UserService} from './services/user.service';
import{ProductService} from './services/product.service';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppComponent } from './app.component';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { EditUserModalComponent } from './users/edit-user-modal/edit-user-modal.component';
import { DeleteUserConfirmationComponent } from './users/delete-user-confirmation/delete-user-confirmation.component';
import { EditProductModalComponent } from './products/edit-product-modal/edit-product-modal.component';
import { DeleteProductConfirmationComponent } from './products/delete-product-confirmation/delete-product-confirmation.component';
import { EditOrderModalComponent } from './orders/edit-order-modal/edit-order-modal.component';
import { DeleteOrderConfirmationComponent } from './orders/delete-order-confirmation/delete-order-confirmation.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    MatDialogModule,
    ToastrModule.forRoot(),
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    EditUserModalComponent,
    DeleteUserConfirmationComponent,
    EditProductModalComponent,
    DeleteProductConfirmationComponent,
    EditOrderModalComponent,
    DeleteOrderConfirmationComponent

  ],
  providers: [AdminService,OrderService,UserService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
