import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminFormComponent } from './admin-form/admin-form.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { BillFormComponent } from './bill-form/bill-form.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { BillComponent } from './bill/bill.component';
import { CartFormComponent } from './cart-form/cart-form.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartComponent } from './cart/cart.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerdashboardComponent } from './customerdashboard/customerdashboard.component';
import { CustomerinfoComponent } from './customerinfo/customerinfo.component';
import { CustorderFormComponent } from './custorder-form/custorder-form.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { FeedbackListComponent } from './feedback-list/feedback-list.component';
import { FeedbackcustomerComponent } from './feedbackcustomer/feedbackcustomer.component';
import { FeedbackinfoComponent } from './feedbackinfo/feedbackinfo.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderComponent } from './order/order.component';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';
import { StockComponent } from './stock/stock.component';
import { VegFormComponent } from './veg-form/veg-form.component';
import { VegListComponent } from './veg-list/veg-list.component';

const routes: Routes = [

{ path : '',pathMatch:'full', component : HomeComponent },
{path : 'register',pathMatch:'full',component :CustomerFormComponent},
{path : 'register1',pathMatch:'full',component :AdminFormComponent},
// { path : 'cust', component : CustomerRegDashboardComponent, children : [
// { path : 'add', component : CustomerFormComponent },
//   // { path : 'edit/:cid', component : CustomerFormComponent },
//   {path:'',pathMatch:'full',redirectTo:'cust'},
// ]},

{path: 'login',pathMatch:'full', component : AdminComponent},

{path:'dashboard1', component: AdmindashboardComponent,children :[
{path: 'stock', pathMatch:'full', component : StockComponent},
{path: 'bill', pathMatch:'full', component : BillComponent},
{path: 'customer',pathMatch:'full',component: CustomerinfoComponent},
{path: 'feedback',pathMatch:'full',component: FeedbackinfoComponent},
{path: 'order',pathMatch:'full',component: OrderComponent},
]},


{path:'stock', component: StockComponent,children :[
{ path : 'list', component : VegListComponent },
{path: 'add', pathMatch:'full', component : VegFormComponent},
{ path : 'edit/:vegId', component : VegFormComponent }, 
{ path : '', redirectTo : 'list', pathMatch : 'full'},
]},  



{path:'bill', component: BillComponent,children :[
  { path : 'list', component : BillListComponent },
  {path: 'add', pathMatch:'full', component : BillFormComponent},
  { path : 'edit/:billingId', component : BillFormComponent }, 
  { path : '', redirectTo : 'list', pathMatch : 'full'},
  ]}, 

  {path:'customer',component:CustomerinfoComponent,children:[
    {path: 'list',component: CustomerListComponent},
    { path : '', redirectTo : 'list', pathMatch : 'full'},
  ]},

  {path:'feedback',component:FeedbackinfoComponent,children:[
    {path: 'list',component: FeedbackListComponent},
    { path : '', redirectTo : 'list', pathMatch : 'full'},
  ]},

  
  // {path:'feed',component:FeedbackcustomerComponent,children:[
  //   {path: 'add',component: FeedbackFormComponent},
  //   { path : '', redirectTo : 'list', pathMatch : 'full'},
  // ]},

  {path:'order', component: OrderComponent,children :[
    { path : 'list', component : OrderListComponent },
    {path: 'add', pathMatch:'full', component : OrderFormComponent},
    { path : 'edit/:orderNo', component : OrderFormComponent }, 
    { path : '', redirectTo : 'list', pathMatch : 'full'},
    ]}, 

    {path:'cart', component: CartComponent,children :[
      { path : 'list', component : CartListComponent },
      {path: 'add', pathMatch:'full', component : CartFormComponent},
      { path : 'edit/:cartId', component : CartFormComponent }, 
      { path : '', redirectTo : 'list', pathMatch : 'full'},
      ]}, 
  
{path:'dashboard', component: CustomerdashboardComponent,children :[
  {path:'',pathMatch:'full',redirectTo:'items'},
  {path: 'cart', pathMatch:'full', component : CartComponent},
  {path: 'profile', pathMatch:'full', component : ProfileupdateComponent},
  { path : 'items', component : ItemsComponent },

 {path: 'feed', pathMatch:'full', component : FeedbackFormComponent},
 {path: 'order1', pathMatch:'full', component : CustorderFormComponent},

 
 ]},


//  {path:'dashboard', component: AdmindashboardComponent,children :[
//   // {path:'',pathMatch:'full',redirectTo:'items'},
//   // {path: 'profile', pathMatch:'full', component : CustomerFormComponent},
 
//  ]},




];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
