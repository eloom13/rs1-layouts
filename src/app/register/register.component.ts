import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CustomValidators } from './custom-validators'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgbModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Ispravna svojstva
})
export class RegisterComponent {
  public frmSignup: FormGroup;
  public showPassword: boolean = false;
  public showConfirmPassword: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.frmSignup = this.createSignupForm();
  }

  createSignupForm(): FormGroup {
    return this.fb.group({
      firstName: [null, Validators.required], 
      lastName: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [
        Validators.required,
        Validators.minLength(8),
        CustomValidators.patternValidator(/\d/, { hasNumber: true }),
        CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
        CustomValidators.patternValidator(/[!@#$%^&*(),.?":{}|<>]/, { hasSpecialCharacters: true }),
      ]],
      confirmPassword: [null, Validators.required],
    }, { validators: CustomValidators.passwordMatchValidator });
  }  

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword; // Prebacuje vrednost za lozinku
  }

  toggleConfirmPasswordVisibility(): void {
    this.showConfirmPassword = !this.showConfirmPassword; // Prebacuje vrednost za potvrdu lozinke
  }

  submit() {
    if (this.frmSignup.valid) {
      console.log(this.frmSignup.value);
      this.router.navigate(['/login']);
    } else {
      console.log('Form is invalid');
    }
  }
  
}
