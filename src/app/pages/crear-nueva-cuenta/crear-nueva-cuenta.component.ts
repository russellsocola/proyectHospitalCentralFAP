import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-crear-nueva-cuenta',
  imports: [ReactiveFormsModule, NgIf, RouterLink, RouterModule],
  templateUrl: './crear-nueva-cuenta.component.html',
  styleUrl: './crear-nueva-cuenta.component.css'
})
export class CrearNuevaCuentaComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router
  ){}

  
}
