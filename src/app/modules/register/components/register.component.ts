import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, FormControl } from '@angular/forms';
import { UserService } from '../../core/services/user-service/user-service';
import { RegisterUserDTO } from '../../../domain/dto/RegisterUserDTO';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      whoAreYou: this.fb.group({
        firstNameControl: this.fb.control('', Validators.required),
        lastNameControl: this.fb.control('', Validators.required)
      }),
      personalDetails: this.fb.group({
        jobDescControl: this.fb.control('', Validators.required),
        addressControl: this.fb.control('', Validators.required),
        telControl: this.fb.control('')
      }),
      accountDetails: this.fb.group({
        userNameControl: this.fb.control('', Validators.required),
        emailControl: this.fb.control('', Validators.required),
        passwordControl: this.fb.control('', [Validators.required, Validators.minLength(8)]),
        confirmPasswordControl: this.fb.control('', [Validators.required, Validators.minLength(8)]),
        termsControl: this.fb.control(false, [Validators.required, this.termsValidator])
      }, { validators: this.confirmPasswordValidator })
    });
  }

  confirmPasswordValidator(group: FormGroup): ValidationErrors {
    if (
      group.get('passwordControl') && group.get('confirmPasswordControl')
      && group.get('passwordControl').value !== group.get('confirmPasswordControl').value
    ) {
      group.get('confirmPasswordControl').setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }

    return null;
  }

  termsValidator(control: FormControl): ValidationErrors {
    if (control && !control.value) {
      return { termsAccepted: false };
    }

    return null;
  }

  onSubmit() {
    const user: RegisterUserDTO = {
      first_name: this.registerForm.get('whoAreYou').get('firstNameControl').value,
      last_name: this.registerForm.get('whoAreYou').get('lastNameControl').value,
      email: this.registerForm.get('accountDetails').get('emailControl').value,
      username: this.registerForm.get('accountDetails').get('userNameControl').value,
      password: this.registerForm.get('accountDetails').get('passwordControl').value,
      job_desc: this.registerForm.get('personalDetails').get('jobDescControl').value,
      address: this.registerForm.get('personalDetails').get('addressControl').value,
      mobile: this.registerForm.get('personalDetails').get('telControl').value
    };

    this.userService.registerUser(user).subscribe(response => {
      if (response.success) {
        this.router.navigate(['/']);
      } else {
        console.log(response.msg);
      }
    }, error => {
      console.log(error);
    });
  }
}
