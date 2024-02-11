import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { OrdersComponent } from '../../orders/orders.component';
import { ProductsComponent } from '../../products/products.component';
import { UsersComponent } from '../../users/users.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'orders',          component: OrdersComponent },
    { path: 'products',           component: ProductsComponent },
    { path: 'users',  component: UsersComponent },
];
