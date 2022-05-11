import { Component } from '@angular/core';
import { TokenStorageService } from './services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private roles: string[] = [];
  showFiller = false;
  isLoggedIn = false;
  constructor(private tokenStorageService: TokenStorageService){ }
  ngOnInit(): void {
    //On vérifie si l'utilisateur dispose d'un token...
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    //Si l'utilisateur a ouvert une session on vérifie le rôle dont il dispose et on affiche les elements en fonction de son rôle...
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
    } 
  }
  
  logout(): void {
    //Cette fonction va déconnecter l'utilisateur lors du click et recharger la page...
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
