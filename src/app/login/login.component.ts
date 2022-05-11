import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { TokenStorageService } from '../services/token-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  userName = new FormControl('', [Validators.required])
  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private router: Router, private toastr: ToastrService) { }
  ngOnInit(): void {
    //Si l'utilisateur est connecté on affiche son rôle ...
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  getErrorMessage() {
    if (this.userName.hasError('required')) {
      return 'You must enter a value';
    }
    else return null;
  }
  onSubmit(): void {
    //Ici on vérifie si les champs de connexion de l'utilisateur sont valides...
    //Si oui, on lui attribue un token et on récupère ses informations, de plus on recharge la page...
    const { username, password } = this.form;
    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  reloadPage(): void {
    this.router.navigate(['/accueil']).then(() => {
    this.toastr.success("Bienvenue : " + this.form.username);
    setTimeout(()=>{
      window.location.reload();
    },
    2000);
    });
  }
}