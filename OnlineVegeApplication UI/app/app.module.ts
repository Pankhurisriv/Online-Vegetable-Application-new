import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { MsgBoxComponent } from './msg-box/msg-box.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminComponent } from './admin/admin.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { VegFormComponent } from './veg-form/veg-form.component';
import { VegListComponent } from './veg-list/veg-list.component';
import { StockComponent } from './stock/stock.component';
import { BillComponent } from './bill/bill.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { BillFormComponent } from './bill-form/bill-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerinfoComponent } from './customerinfo/customerinfo.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { FeedbackinfoComponent } from './feedbackinfo/feedbackinfo.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderComponent } from './order/order.component';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';
import { ItemsComponent } from './items/items.component';
import { FeedbackcustomerComponent } from './feedbackcustomer/feedbackcustomer.component';
import { CartComponent } from './cart/cart.component';
import { CartFormComponent } from './cart-form/cart-form.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CustorderFormComponent } from './custorder-form/custorder-form.component';





@NgModule({
    declarations: [
    AppComponent,
    HomeComponent,
    CustomerFormComponent,
    NavbarComponent,
    CustomerdashboardComponent,
    HomeComponent,
    MsgBoxComponent,
    AdmindashboardComponent,
    AdminComponent,
    NavbarAdminComponent,
    AdminFormComponent,
    VegFormComponent,
    VegListComponent,
    StockComponent,
    BillComponent,
    BillListComponent,
    BillFormComponent,
    CustomerListComponent,
    CustomerinfoComponent,
   
    FeedbackFormComponent,
    FeedbackListComponent,
    FeedbackinfoComponent,
    OrderFormComponent,
    OrderListComponent,
    OrderComponent,
    ProfileupdateComponent,
    ItemsComponent,
    FeedbackcustomerComponent,
    CartComponent,
    CartFormComponent,
    CartListComponent,
    CustorderFormComponent,
 
  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
