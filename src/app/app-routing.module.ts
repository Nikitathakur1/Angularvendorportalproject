import { AuthenticaionGuard } from './authenticaion.guard';
import { CommonModule } from '@angular/common';
import { EditAdminComponent } from './Admin/edit-admin/edit-admin.component';
import { ViewDeliveryScheduleComponent } from './Admin/view-delivery-schedule/view-delivery-schedule.component';
import { BrowserModule } from '@angular/platform-browser';
import { ViewComponent } from './Components/view/view.component';
import { LoginComponent } from './Components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { POComponent } from './Components/po/po.component';
import { ViewPODetailsComponent } from './Components/view-podetails/view-podetails.component';
import { ManageDeliveryScheduleComponent } from './Components/manage-delivery-schedule/manage-delivery-schedule.component';
import { ManageInvoiceDetailsComponent } from './Components/manage-invoice-details/manage-invoice-details.component';
import { TrackdeliveryComponent } from './Components/trackdelivery/trackdelivery.component';
import { ManagecircularComponent } from './Components/managecircular/managecircular.component';
import { ChangepasswordComponent } from './Components/changepassword/changepassword.component';
import { ViewInvoiceDetailsComponent } from './Components/view-invoice-details/view-invoice-details.component';
import { AddInvoiceComponent } from './Components/add-invoice/add-invoice.component';
import { ViewcircularComponent } from './Components/viewcircular/viewcircular.component';
import { ViewGRNDetailsComponent } from './Components/view-grndetails/view-grndetails.component';
import { MngSuppliersComponent } from './Admin/mng-suppliers/mng-suppliers.component';
import { PurchaseOrderComponent } from './Admin/purchase-order/purchase-order.component';
import { MngDeliveryScheduleComponent } from './Admin/mng-delivery-schedule/mng-delivery-schedule.component';
import { MngInvoiceDetailsComponent } from './Admin/mng-invoice-details/mng-invoice-details.component';
import { ManageCircularComponent } from './Admin/manage-circular/manage-circular.component';
import { ChangePassComponent } from './Admin/change-pass/change-pass.component';
import { MngAdminsComponent } from './Admin/mng-admins/mng-admins.component';
import { ReportsComponent } from './Admin/reports/reports.component';
import { EditSuppliersComponent } from './Admin/edit-suppliers/edit-suppliers.component';
import { ViewPoDetailsComponent } from './Admin/view-po-details/view-po-details.component';
import { AddDeliveryScheduleComponent } from './Admin/add-delivery-schedule/add-delivery-schedule.component';
import { ViewInvoiceComponent } from './Admin/view-invoice/view-invoice.component';
import { EditCircularComponent } from './Admin/edit-circular/edit-circular.component';
import { ViewCircularComponent } from './Admin/view-circular/view-circular.component';
import { ViewschedulesupplierComponent } from './Components/viewschedulesupplier/viewschedulesupplier.component';
import { AddadminComponent } from './Admin/addadmin/addadmin.component';
import { UpdateDeliveryScheduleComponent} from './Admin/update-delivery-schedule/update-delivery-schedule.component';
import { PaymentAdviceComponent } from './Admin/payment-advice/payment-advice.component';
import { PaymentDetailsComponent } from './Admin/payment-details/payment-details.component';
import { BinInformationComponent } from './Admin/bin-information/bin-information.component';


import { RegistrationComponent } from './registration/registration.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { LocationComponent } from './location/location.component';
import { AddressComponent } from './address/address.component';
import { SupplierCreateComponentComponent } from './Supplier/Component/supplier-create-component/supplier-create-component.component';
import { update } from 'lodash';
import { UpdateManageSupplierComponent } from './Supplier/Component/update-manage-supplier/update-manage-supplier.component';

// import { RecoverPasswordComponent } from './recover-password/recover-password.component';

const routes: Routes = [
  { path: '', redirectTo: "/login", pathMatch: 'full' },  


  {
    path: 'login',
    component:LoginComponent
  },
  {
    path:'recoverpwd',
    component: RecoverPasswordComponent
  },
    {
    path:'register',
    component:RegistrationComponent
  },
  
  // {
  //   path :'updateSupplier/supplierID',
  //   // path :'managesupplier/update/supplierID',
  //   component:UpdateManageSupplierComponent
  // },
  // {
  //   path:'recoverpwd',
  //   component:RecoverPasswordComponent
  // },
  {
    path:'',
    component:ViewComponent,
    children:[
      {path:'home',component:HomeComponent,canActivate:[AuthenticaionGuard]},
      {path:'po',component:POComponent,canActivate:[AuthenticaionGuard]},
      {path:'podetails',component:ViewPODetailsComponent,canActivate:[AuthenticaionGuard]},
      {path:'mngdelivery',component:ManageDeliveryScheduleComponent,canActivate:[AuthenticaionGuard]},
      {path:'mnginvoice',component:ManageInvoiceDetailsComponent,canActivate:[AuthenticaionGuard]},
      {path:'trackdelivery',component:TrackdeliveryComponent,canActivate:[AuthenticaionGuard]},
      {path:'mngcircular',component:ManagecircularComponent,canActivate:[AuthenticaionGuard]},
      {path:'chngpass',component:ChangepasswordComponent,canActivate:[AuthenticaionGuard]},
      {path:'viewdelivery',component: ViewschedulesupplierComponent,canActivate:[AuthenticaionGuard]},
      {path:'viewinvoice',component:ViewInvoiceDetailsComponent,canActivate:[AuthenticaionGuard]},
      {path:'addinvoice',component:AddInvoiceComponent,canActivate:[AuthenticaionGuard]},
      {path:'viewcircular',component:ViewcircularComponent,canActivate:[AuthenticaionGuard]},
      {path:"grn",component:ViewGRNDetailsComponent,canActivate:[AuthenticaionGuard]},
      
      {path:"addadmin",component:AddadminComponent,canActivate:[AuthenticaionGuard]},
      {path:"editadmin",component:EditAdminComponent,canActivate:[AuthenticaionGuard]},
      {path:"mngadmin",component:MngAdminsComponent,canActivate:[AuthenticaionGuard]},
      {path:"mngsupplier",component:MngSuppliersComponent,canActivate:[AuthenticaionGuard]},
      {path:"editsupplier",component:EditSuppliersComponent,canActivate:[AuthenticaionGuard]},
      {path:"poadmin",component:PurchaseOrderComponent,canActivate:[AuthenticaionGuard]},
      {path:"purchasedetails",component:ViewPoDetailsComponent,canActivate:[AuthenticaionGuard]},
      {path:"mngdeladmin",component:MngDeliveryScheduleComponent,canActivate:[AuthenticaionGuard]},
      {path:"updateschedule",component:UpdateDeliveryScheduleComponent,canActivate:[AuthenticaionGuard]},
      {path:"ViewDeliverySchedule",component:ViewDeliveryScheduleComponent,canActivate:[AuthenticaionGuard]},
      {path:"AddDeliverschedule",component:AddDeliveryScheduleComponent,canActivate:[AuthenticaionGuard]},
      {path:"mnginvoiceadmin",component:MngInvoiceDetailsComponent,canActivate:[AuthenticaionGuard]},
      {path:"viewinvoiceadmin",component:ViewInvoiceComponent,canActivate:[AuthenticaionGuard]},
      {path:"mngcircularadmin",component:ManageCircularComponent,canActivate:[AuthenticaionGuard]},
      {path:"viewcircularadmin",component:ViewCircularComponent,canActivate:[AuthenticaionGuard]},
      {path:"editcircularadmin",component:EditCircularComponent,canActivate:[AuthenticaionGuard]},
      {path:"trackdeladmin",component:MngDeliveryScheduleComponent,canActivate:[AuthenticaionGuard]},
      {path:"chngpassadmin",component:ChangePassComponent,canActivate:[AuthenticaionGuard]},
      {path:"reports",component:ReportsComponent,canActivate:[AuthenticaionGuard]},
      {path:"paymentadvice",component:PaymentAdviceComponent,canActivate:[AuthenticaionGuard]},
      {path:"paymentdetails",component:PaymentDetailsComponent,canActivate:[AuthenticaionGuard]},
      {path:"bininformation",component:BinInformationComponent,canActivate:[AuthenticaionGuard]},
      {path: "locn",component:LocationComponent,canActivate:[AuthenticaionGuard]},
      {path: "addrs",component:AddressComponent,canActivate:[AuthenticaionGuard]},
      {path: "supplr",component:SupplierCreateComponentComponent,canActivate:[AuthenticaionGuard]},
      // {path:"updateSupplier",component:UpdateManageSupplierComponent,canActivate:[AuthenticaionGuard]},
      {path:'updateSupplier/supplierID',component:UpdateManageSupplierComponent,canActivate:[AuthenticaionGuard]}

    ]
  },
 
];

@NgModule({
  imports: [BrowserModule,CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
