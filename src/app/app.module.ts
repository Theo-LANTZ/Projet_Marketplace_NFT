import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*Adding angularMaterial Modules*/
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

/*Adding components*/ 
import { LoginComponent } from './login/login.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MesNftComponent } from './mes-nft/mes-nft.component';
import { VenteComponent } from './vente/vente.component';
import { RegisterComponent } from './register/register.component';

/*Adding Services*/
import { TokenStorageService } from './services/token-storage.service';
import { AuthService } from './services/auth.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OeuvreService } from './services/oeuvres.service';
import { ActionService } from './services/actions.service';
import { ValidationComponent } from './validation/validation.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccueilComponent,
    RegisterComponent,
    VenteComponent,
    MesNftComponent,
    ValidationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  providers: [TokenStorageService,AuthService, ToastrService,OeuvreService, ActionService],
  bootstrap: [AppComponent],
  entryComponents:[ValidationComponent],
})
export class AppModule { }
