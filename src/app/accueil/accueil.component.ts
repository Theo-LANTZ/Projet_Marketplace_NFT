import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Oeuvre } from '../interfaces/oeuvres.interface';
import { Likes } from '../interfaces/likes.interface';
import { OeuvreService } from '../services/oeuvres.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  isLoggedIn = false;
  roles: string[] = [];
  oeuvre : Oeuvre[] | undefined;
  like : Likes[] | undefined;
  likes: Likes = {
    id: 0,
    id_oeuvre: 0,
    id_user: 0
  }
  constructor(private oeuvreService: OeuvreService,private tokenStorage: TokenStorageService, public dialog: MatDialog) { }

  ngOnInit(): void {
    //Si l'utilisateur est connecté on affiche son rôle ...
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
    
    this.oeuvreService.getOeuvres().subscribe((data: Oeuvre[]) =>
    this.oeuvre = data);
  }

  Like(){
    if(!this.isLoggedIn){
      this.openDialog()
    }else{
      console.log('A liké !');
    }
  }

  Dislike(){
    if(!this.isLoggedIn){
      this.openDialog()
    }else{
      console.log('a disliké');
    }
  }

  openDialog() {
    this.dialog.open(DialogConnexion);
  }
}

@Component({
  selector: 'dialog-connexion',
  templateUrl: 'dialog-connexion.html',
})
export class DialogConnexion {
  constructor(public dialogRef: MatDialogRef<DialogConnexion>, private router:Router) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  login(): void{
    this.router.navigate(['/login']);
    this.dialogRef.close();
  }
}
