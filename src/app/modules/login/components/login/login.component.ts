import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/modules/core/services/auth/auth.service';
import { LoginResponseDTO } from 'src/app/domain/dto/LoginResponseDTO';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      password: this.fb.control('', [Validators.required, Validators.minLength(8)]),
      remember: this.fb.control(false)
    })
  }

  onSubmit() {
    this.authService.loginUser({
      username: this.form.value.username,
      password: this.form.value.password
    }).subscribe((response: LoginResponseDTO) => {
      if (response.success) {
        this.router.navigate(['/posts'], { queryParams: { categoryId: 1 } });
      } else {
        this._snackBar.open(response.msg, 'Dismiss', { duration: 5 * 1000});
      }
    });
  }
}
