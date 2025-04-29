import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgIf, RouterLink, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router
  ){}

  loginForm = this.fb.group({
    tipoDoc: ["", [Validators.required]],
    nroDoc: ["", [Validators.required]],
    pwd: ["", [Validators.required]]
  })

  submit(){
    if(this.loginForm.valid)
      console.log(this.loginForm.value)
    else
      this.router.navigate(['/principal']);
  }

  getTipoDocInvalido(){
    return this.loginForm.get("tipoDoc")?.invalid && this.loginForm.get("tipoDoc")?.touched
  }

  getNroDocInvalido(){
    return this.loginForm.get("nroDoc")?.invalid && this.loginForm.get("nroDoc")?.touched
  }

  getPwdInvalido(){
    return this.loginForm.get("pwd")?.invalid && this.loginForm.get("pwd")?.touched
  }

}
