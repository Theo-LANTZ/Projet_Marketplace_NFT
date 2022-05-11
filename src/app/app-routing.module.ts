import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { LoginComponent } from './login/login.component';
import { MesNftComponent } from './mes-nft/mes-nft.component';
import { RegisterComponent } from './register/register.component';
import { VenteComponent } from './vente/vente.component';

/* All ROUTES !*/ 
const appRoutes: Routes = [
  { path : 'login', component: LoginComponent},
  { path : 'accueil', component: AccueilComponent},
  { path : 'register', component: RegisterComponent},
  { path : 'vente', component: VenteComponent},
  { path : 'mynft', component: MesNftComponent},
  { path : '', redirectTo: '/AccueilComponent', pathMatch: 'full'},
  { path : '**', component: AccueilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
