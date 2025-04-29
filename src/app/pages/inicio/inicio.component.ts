import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [ReactiveFormsModule, NgIf, RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  constructor(
    private fb: FormBuilder
  ){}

  inicioForm = this.fb.group({
    tipoDoc: ["", [Validators.required]],
    nroDoc: ["", [Validators.required]],
    pwd: ["", [Validators.required, Validators.email]],
  })

  submit(){
    if(this.inicioForm.valid)
      console.log(this.inicioForm.value)
    else
      alert("falta programar")
  }
}
