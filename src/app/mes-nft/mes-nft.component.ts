import { Component, Inject, OnInit } from '@angular/core';
import { Oeuvre } from '../interfaces/oeuvres.interface';
import { OeuvreService } from '../services/oeuvres.service';
import { TokenStorageService } from '../services/token-storage.service';
import { MatDialog} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-mes-nft',
  templateUrl: './mes-nft.component.html',
  styleUrls: ['./mes-nft.component.scss']
})
export class MesNftComponent implements OnInit {
  isLoggedIn = false;
  oeuvre : Oeuvre[] | undefined;
  currentUser: any;
  animal!:string;
  name!:string;
  
  constructor(private tokenStorage: TokenStorageService, private oeuvreService: OeuvreService, public dialog: MatDialog) { }
  
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

  openDialog() {
    this.dialog.open(validationComponent);
  }
}

@Component({
  selector: 'validation-component',
  templateUrl: 'validation-component.html',
})
export class validationComponent{
  name:string = '';
  sellnft(){
    console.log()
  }
}
