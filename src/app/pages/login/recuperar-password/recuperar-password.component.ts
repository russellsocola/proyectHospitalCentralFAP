import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-recuperar-password',
  imports: [ReactiveFormsModule, NgIf, RouterLink, RouterModule],
  templateUrl: './recuperar-password.component.html',
  styleUrl: './recuperar-password.component.css'
})
export class RecuperarPasswordComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router
  ){}


}
