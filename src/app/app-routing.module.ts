import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavetopComponent } from './navetop/navetop.component';
import { NavsideComponent } from './navside/navside.component';
import { PartenaireListComponent } from './partenaire-list/partenaire-list.component';
import { ModalComponent } from './modal/modal.component';
import { PartenaireAddComponent } from './partenaire-add/partenaire-add.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { TransactionComponent } from './transaction/transaction.component';
import { DepotComponent } from './depot/depot.component';
import { UtilisateurListComponent } from './utilisateur-list/utilisateur-list.component';
import { AuthGuard } from './auth.guard';
import { CompteComponent } from './compte/compte.component';

const routes: Routes = [
  {
    path: '',  
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'utilisateur',
    component: UtilisateurComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'compte',
    component: CompteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'utilisateur/:id',
    component: UtilisateurComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'utilisateur-list',
    component: UtilisateurListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'partenaire-add',
    component: PartenaireAddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'partenaire-add/:id',
    component: PartenaireAddComponent,
    canActivate: [AuthGuard]
  },
  {
  
    path: 'navetop',
    component: NavetopComponent
  }, 
  {
    path: 'navside',
    component: NavsideComponent
  },
  {
    path: 'partenaire-list',
    component:  PartenaireListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'modal',
    component: ModalComponent
  },
  {
    path: 'transaction',
    component: TransactionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'depot',
    component: DepotComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
