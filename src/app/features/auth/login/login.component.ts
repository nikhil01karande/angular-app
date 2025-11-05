import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  loading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.loading = true;
    this.errorMessage = '';
    this.auth.login(this.form.value).subscribe({
      next: (res: any) => {
         const userEmail = this.form.value.email; 
        this.auth.setSession(res.token, userEmail);
        this.router.navigate(['/dashboard']);
        this.loading = false;
      },
      error: () => {
        this.errorMessage = 'Invalid email or password.';
        this.loading = false;
      }
    });
  }
}
