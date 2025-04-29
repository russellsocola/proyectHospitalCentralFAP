import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-reservar-cita',
  imports: [ReactiveFormsModule, NgIf, RouterLink, RouterModule],
  templateUrl: './reservar-cita.component.html',
  styleUrl: './reservar-cita.component.css'
})
export class ReservarCitaComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router
  ){}

}
