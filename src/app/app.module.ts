import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { ListFournisseurComponent } from './list-fournisseur/list-fournisseur.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './users/users.component';
import { ListUserComponent } from './list-user/list-user.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  declarations: [
    AppComponent,
    FournisseurComponent,
    ListFournisseurComponent,
    NavbarComponent,
    HeaderComponent,
    UsersComponent,
    ListUserComponent,
    NotFoundComponent,
    MainInvoiceComponent,
    InvoiceListComponent,
    InvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
