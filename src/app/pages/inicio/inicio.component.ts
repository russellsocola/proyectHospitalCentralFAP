import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [ReactiveFormsModule, NgIf, RouterLink, RouterModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})

export class InicioComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router
  ){}

  
  inicioForm = this.fb.group({
    tipoDoc: ["", [Validators.required]],
    nroDoc: ["", [Validators.required]],
    pwd: ["", [Validators.required]]
  })

  submit(){
    if(this.inicioForm.valid)
      console.log(this.inicioForm.value)
    else
      this.router.navigate(['/principal']);
  }

  getTipoDocInvalido(){
    return this.inicioForm.get("tipoDoc")?.invalid && this.inicioForm.get("tipoDoc")?.touched
  }

  getNroDocInvalido(){
    return this.inicioForm.get("nroDoc")?.invalid && this.inicioForm.get("nroDoc")?.touched
  }

  getPwdInvalido(){
    return this.inicioForm.get("pwd")?.invalid && this.inicioForm.get("pwd")?.touched
  }
}
