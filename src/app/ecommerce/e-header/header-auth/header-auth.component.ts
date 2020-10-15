import { ThrowStmt } from '@angular/compiler';
import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'header-auth',
  templateUrl: './header-auth.component.html',
  styleUrls: ['./header-auth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderAuthComponent implements OnInit {
  @HostBinding('attr.class') classes = 'header__auth';
  constructor(private _modalService: NgbModal, private _fb: FormBuilder, private _authService: AuthService) { }

  isLogin: boolean = true;
  loginForm: FormGroup;
  signUpForm: FormGroup;

  ngOnInit(): void {
    this.createSignUpForm();
    this.createLoginForm();
  }

  onToggleAuth() {
    this.isLogin = !this.isLogin;
  }

  open(content) {
    this._modalService.open(content, { centered: true, windowClass: 'auth-modal' }).result.then((result) => {
      this.isLogin = true;
    }, (reason) => {
      this.isLogin = true;
    });;
  }

  createLoginForm() {
    this.loginForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  createSignUpForm() {
    this.signUpForm = this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      passwordGroup: this._fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      })
    })
  }

  onLogin() {
    console.log('Hello');
    this.loginForm.markAllAsTouched();
    if(!this.loginForm.valid) return;
    console.log('Login')
  }

  onSignUp(){

  }
}
