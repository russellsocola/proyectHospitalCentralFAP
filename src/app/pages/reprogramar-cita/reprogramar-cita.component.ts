import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-reprogramar-cita',
  imports: [ReactiveFormsModule, NgIf, RouterLink, RouterModule],
  templateUrl: './reprogramar-cita.component.html',
  styleUrl: './reprogramar-cita.component.css'
})
export class ReprogramarCitaComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router
  ){}

  
}
