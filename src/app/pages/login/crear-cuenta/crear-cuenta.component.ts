import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-crear-cuenta',
  imports: [ReactiveFormsModule, NgIf, RouterLink, RouterModule],
  templateUrl: './crear-cuenta.component.html',
  styleUrl: './crear-cuenta.component.css'
})
export class CrearCuentaComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router
  ){}

  
}
