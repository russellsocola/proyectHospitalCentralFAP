import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-olvide-password',
  imports: [ReactiveFormsModule, NgIf, RouterLink, RouterModule],
  templateUrl: './olvide-password.component.html',
  styleUrl: './olvide-password.component.css'
})
export class OlvidePasswordComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router
  ){}

  
}
