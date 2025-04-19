import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {

  email: string = '';
  password: string = '';

  flagError: boolean = false;
  flagSuccess: boolean = false;
  msjError: string = "";

  constructor(private router: Router, private authService: AuthService) {}

  goHome() {
    
    this.router.navigate(['/home']);
  }

  onlogin(){
    if (!this.validarCampo()) {
      return;
    }
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Login exitoso:', response);
        // guardar token, redirigir, etc.
      },
      error: (err) => {
        console.error('Error en login:', err);
      }
    });

  }

  closeErrorAlert() {
    this.flagError = false; 
  }


  validarCampo(){
    if (!this.email || this.email.trim() === "") {
      this.flagError = true;
      this.msjError = "El campo de correo no puede estar vacío";
      return false;
    }

    if (!this.password || this.password.trim() === "") {
      this.flagError = true;
      this.msjError = "El campo de password no puede estar vacío";
      return false;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(this.email)) {
      this.flagError = true;
      this.msjError = "Formato de correo no válido";
      return false;
    }

    this.flagError = false;
    return true;
  }

}
