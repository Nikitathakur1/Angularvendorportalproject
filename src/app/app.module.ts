import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { ViewComponent } from './Components/view/view.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './Components/home/home.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { POComponent } from './Components/po/po.component';
import { ViewPODetailsComponent } from './Components/view-podetails/view-podetails.component';
import { ManageDeliveryScheduleComponent } from './Components/manage-delivery-schedule/manage-delivery-schedule.component';
import { ManageInvoiceDetailsComponent } from './Components/manage-invoice-details/manage-invoice-details.component';
import { TrackdeliveryComponent } from './Components/trackdelivery/trackdelivery.component';
import { ManagecircularComponent } from './Components/managecircular/managecircular.component';
import { ChangepasswordComponent } from './Components/changepassword/changepassword.component';
import { ChatBotComponent } from './Components/chat-bot/chat-bot.component';
import { MyChatBotModule } from './Components/my-chat-bot/my-chat-bot.module';
import { ViewInvoiceDetailsComponent } from './Components/view-invoice-details/view-invoice-details.component';
import { AddInvoiceComponent } from './Components/add-invoice/add-invoice.component';
import { ViewcircularComponent } from './Components/viewcircular/viewcircular.component';
import { ViewGRNDetailsComponent } from './Components/view-grndetails/view-grndetails.component';
import { EditAdminComponent } from './Admin/edit-admin/edit-admin.component';
import { MngSuppliersComponent } from './Admin/mng-suppliers/mng-suppliers.component';
import { EditSuppliersComponent } from './Admin/edit-suppliers/edit-suppliers.component';
import { PurchaseOrderComponent } from './Admin/purchase-order/purchase-order.component';
import { ViewPoDetailsComponent } from './Admin/view-po-details/view-po-details.component';
import { MngDeliveryScheduleComponent } from './Admin/mng-delivery-schedule/mng-delivery-schedule.component';
import { AddDeliveryScheduleComponent } from './Admin/add-delivery-schedule/add-delivery-schedule.component';
import { MngInvoiceDetailsComponent } from './Admin/mng-invoice-details/mng-invoice-details.component';
import { ManageCircularComponent } from './Admin/manage-circular/manage-circular.component';
import { EditCircularComponent } from './Admin/edit-circular/edit-circular.component';
import { AdminMenuComponent } from './Admin/admin-menu/admin-menu.component';
import { ChangePassComponent } from './Admin/change-pass/change-pass.component';
import { ReportsComponent } from './Admin/reports/reports.component';
import { MngAdminsComponent } from './Admin/mng-admins/mng-admins.component';
import { ViewInvoiceComponent } from './Admin/view-invoice/view-invoice.component';
import { ViewCircularComponent } from './Admin/view-circular/view-circular.component';
import { ViewschedulesupplierComponent } from './Components/viewschedulesupplier/viewschedulesupplier.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddadminComponent } from './Admin/addadmin/addadmin.component';
import { PaymentAdviceComponent } from './Admin/payment-advice/payment-advice.component';
import { PaymentDetailsComponent } from './Admin/payment-details/payment-details.component';
import { StatementOfAccountComponent } from './Admin/statement-of-account/statement-of-account.component';
import { AccountDetailsComponent } from './Admin/account-details/account-details.component';
import { BinInformationComponent } from './Admin/bin-information/bin-information.component';
import { UpdateDeliveryScheduleComponent } from './Admin/update-delivery-schedule/update-delivery-schedule.component';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { AuthGuardService } from './auth-guard.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationComponent } from './location/location.component';
import { AddressComponent } from './address/address.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { SupplierCreateComponentComponent } from './Supplier/Component/supplier-create-component/supplier-create-component.component';
import { UpdateManageSupplierComponent } from './Supplier/Component/update-manage-supplier/update-manage-supplier.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewComponent,
    HomeComponent,
    SidebarComponent,
    POComponent,
    ViewPoDetailsComponent,
    ManageDeliveryScheduleComponent,
    TrackdeliveryComponent,
    ManageCircularComponent,
    ChangePassComponent,
    ViewInvoiceComponent,
    AddInvoiceComponent,
    ViewcircularComponent,
    ViewGRNDetailsComponent,
    EditAdminComponent,
    MngSuppliersComponent,
   EditSuppliersComponent,
   PurchaseOrderComponent,
   ViewPoDetailsComponent,
   MngDeliveryScheduleComponent,
   AddDeliveryScheduleComponent,
 MngInvoiceDetailsComponent,
 ManageInvoiceDetailsComponent,
 ManagecircularComponent,
 ManageCircularComponent,
 EditCircularComponent,
 AdminMenuComponent,
//  ChangePassComponent,
ReportsComponent,
MngAdminsComponent,
ViewInvoiceComponent,
ViewInvoiceDetailsComponent,
ViewcircularComponent,
ViewschedulesupplierComponent,
RegistrationComponent,
// RecoverPasswordComponent,
AddadminComponent,
PaymentAdviceComponent,
PaymentDetailsComponent,
// StatementOfAccountComponent,
AccountDetailsComponent,
BinInformationComponent,
UpdateDeliveryScheduleComponent,
LocationComponent,
AddressComponent,
SupplierCreateComponentComponent,
UpdateManageSupplierComponent,

// ChatBotComponent

    // AppComponent,
    // LoginComponent,
    // ViewComponent,
    // HomeComponent,
    // SidebarComponent,
    // POComponent,
    // ViewPODetailsComponent,
    // ManageDeliveryScheduleComponent,
    // ManageInvoiceDetailsComponent,
    // TrackdeliveryComponent,
    // ManagecircularComponent,
    // ChangepasswordComponent,
    // ViewInvoiceDetailsComponent,
    // AddInvoiceComponent,
    // ViewcircularComponent,
    // ViewGRNDetailsComponent,
    // EditAdminComponent,
    // MngSuppliersComponent,

    // EditSuppliersComponent,
    // PurchaseOrderComponent,
    // ViewPoDetailsComponent,
    // MngDeliveryScheduleComponent,
    // AddDeliveryScheduleComponent,
    // MngInvoiceDetailsComponent,
    // ManageCircularComponent,
    // EditCircularComponent,
    // AdminMenuComponent,
    // ChangePassComponent,
    // ReportsComponent,
    // MngAdminsComponent,
    // ViewInvoiceComponent,
    // ViewCircularComponent,
    // ViewschedulesupplierComponent,
    // RecoverPasswordComponent,
    // RegistrationComponent,
    // AddadminComponent,
    // PaymentAdviceComponent,
    // PaymentDetailsComponent,
    // StatementOfAccountComponent,
    // AccountDetailsComponent,
    // BinInformationComponent,
    // UpdateDeliveryScheduleComponent,
    // ChatBotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MyChatBotModule,
    CommonModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatSelectModule,
    DropDownListModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    
  
  ],
  providers: [DatePipe,
  AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
