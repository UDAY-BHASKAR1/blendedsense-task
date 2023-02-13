import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/api/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  visible: boolean = true;
  changetype: boolean = true;

  login: FormGroup;

  errorlist: any = '';

  title = 'toaster-not';
  loginUserData: any = {};
  dataItem: any = {};
  timer: any;
  timeOut: number;
  constructor(
    private postData: AuthenticationService,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder
  ) {
    
    this.login = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit() {
    // if there is token in localstorage navigate to dashboard
    if (!!localStorage.getItem('token') == null) {
      //  return this.router.navigate(['/login']);
    } else {
      return this.router.navigate(['/Dashboard']);
    }
  }

  onSubmit(): void {
    console.log(this.login.value);

    this.postData.getUser(this.login.value).subscribe(
      (res) => {
        this.dataItem = res;
        console.log(this.dataItem);
        localStorage.setItem('token', this.dataItem.token);
        this.toastr.success('login succesfull', null, { timeOut: 1000 });
        this.timer = setTimeout(() => {
          this.router.navigate(['/Dashboard']);
        }, 1000);
      },
      (err) => {
        this.toastr.error('Invalid User Details', null, { timeOut: 1000 });
      }
    );
  }

  inputRequiredValidation(login: FormGroup, type: string): boolean {
    return (
      (login.get(type).touched || login.get(type).dirty) &&
      login.get(type)?.errors !== null &&
      login.get(type)?.errors.required
    );
  }

  inputPatternValidation(login: FormGroup, type: string): boolean {
    return (
      (login.get(type).touched || login.get(type).dirty) &&
      login.get(type)?.errors !== null &&
      login.get(type)?.errors.email
    );
  }

  viewpass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
}
