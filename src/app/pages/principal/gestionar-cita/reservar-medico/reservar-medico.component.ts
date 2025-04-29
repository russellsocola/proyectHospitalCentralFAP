import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-reservar-medico',
  imports: [ReactiveFormsModule, NgIf, RouterLink, RouterModule],
  templateUrl: './reservar-medico.component.html',
  styleUrl: './reservar-medico.component.css'
})
export class ReservarMedicoComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router
  ){}

  gestionarCitaForm = this.fb.group({
    tipoDoc: ["", [Validators.required]],
    nroDoc: ["", [Validators.required]],
    pwd: ["", [Validators.required]]
  })
  
 
  btnAtraz(){
    if(this.gestionarCitaForm.valid)
      console.log(this.gestionarCitaForm.value)
    else
      this.router.navigate(['/gestionar-cita']);
  }

  btnContinuar(){
    if(this.gestionarCitaForm.valid)
      console.log(this.gestionarCitaForm.value)
    else
      this.router.navigate(['/seleccionar-especialidad']);
  }
/*
  getTipoDocInvalido(){
    return this.gestionarCitaForm.get("tipoDoc")?.invalid && this.gestionarCitaForm.get("tipoDoc")?.touched
  }

  getNroDocInvalido(){
    return this.gestionarCitaForm.get("nroDoc")?.invalid && this.gestionarCitaForm.get("nroDoc")?.touched
  }

  getPwdInvalido(){
    return this.gestionarCitaForm.get("pwd")?.invalid && this.gestionarCitaForm.get("pwd")?.touched
  }
 */

}
