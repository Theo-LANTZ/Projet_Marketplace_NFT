import { Component, OnInit } from '@angular/core';
import { Oeuvre } from '../interfaces/oeuvres.interface';
import { Vente } from '../interfaces/vente.interface';
import { OeuvreService } from '../services/oeuvres.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {
  vente: Vente = {
    id_oeuvre: 1,
    id_user: null,
    prix: null,
  }
  
  name:string = '';
  currentUser: any;
  oeuvre!: Oeuvre[];
  isLoggedIn!: Boolean;
  constructor(private oeuvreService: OeuvreService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {

    //Si l'utilisateur est connecté on affiche son rôle ...
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
    this.currentUser = this.tokenStorage.getUser();

    this.oeuvreService.getOeuvresById(this.currentUser.id)
    .subscribe((data: Oeuvre[]) => {
      this.oeuvre = data;
    });
  }
  createVente(data: Vente){
    data.id_user= this.currentUser.id;
    console.log(data);
  }
}
