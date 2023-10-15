import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './users/users.component';
import { ListUserComponent } from './list-user/list-user.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FournisseurComponent } from './fournisseur/fournisseur.component';
import { MainInvoiceComponent } from './main-invoice/main-invoice.component';
import { InvoiceComponent } from './invoice/invoice.component';

const routes: Routes = [
  {path:'home',component : HeaderComponent},
  {path:'users',component : UsersComponent},
  {path:'listusers',component : ListUserComponent},
  {path:'', redirectTo : '/home' , pathMatch:'full'},
  {path:'fournisseur/:id',component : FournisseurComponent},
  {path:'invoices' , component:MainInvoiceComponent},
  {path:'invoice/:idFacture/:active' , component: InvoiceComponent },




  {path:'**',component : NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
