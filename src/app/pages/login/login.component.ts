import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule, Router } from '@angular/router';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgIf, RouterLink, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private readonly ps: ProjectService
  ){}

  loginForm = this.fb.group({
    tipo_documento: ["", [Validators.required]],
    numero_documento: ["", [Validators.required]],
    clave_hash: ["", [Validators.required]],
    /* captcha:["", [Validators.required]] */
  })

  get TipoDocInvalido(){
    return this.loginForm.get("tipo_documento")?.invalid && this.loginForm.get("tipo_documento")?.touched
  }

  get NroDocInvalido(){
    return this.loginForm.get("numero_documento")?.invalid && this.loginForm.get("numero_documento")?.touched
  }

  get PwdInvalido(){
    return this.loginForm.get("clave_hash")?.invalid && this.loginForm.get("clave_hash")?.touched
  }

  __validar_login(data: any){
    this.ps.validar_login(data).subscribe((rest: any) => {
      /* console.log(rest.data[0]) */
      this.router.navigate(['/principal']);
    })
  }

  submit(){
    if(this.loginForm.valid){
      /* console.log(this.loginForm.value) */
      this.__validar_login(this.loginForm.value)
    }else{
      alert("Error de datos")
    }
  }


}
