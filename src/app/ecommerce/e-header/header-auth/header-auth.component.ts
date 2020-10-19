import { ThrowStmt } from '@angular/compiler';
import { Component, HostBinding, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../auth.service';
import { EcommerceService } from '../../ecommerce.service';
import { ConfirmPasswordValidator } from './confirm-password.validator';

@Component({
  selector: 'header-auth',
  templateUrl: './header-auth.component.html',
  styleUrls: ['./header-auth.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeaderAuthComponent implements OnInit {
  @HostBinding('attr.class') classes = 'header__auth';
  isAuthenticated: boolean = false;
  modalRef: any;
  constructor(private _modalService: NgbModal, private _fb: FormBuilder, private _authService: AuthService, private _ecommerceService: EcommerceService) { }

  isLogin: boolean = true;
  loginForm: FormGroup;
  signUpForm: FormGroup;

  ngOnInit(): void {
    this._authService.firebaseUser.subscribe(user => {
      this.isAuthenticated = !!user;
    })
    this.createSignUpForm();
    this.createLoginForm();
  }

  onToggleAuth() {
    this.isLogin = !this.isLogin;
  }

  open(content) {
    this.modalRef = this._modalService.open(content, { centered: true, windowClass: 'auth-modal' });
    this.modalRef.result.then((result) => {
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
        confirmPassword: ['', [Validators.required]],
      },
        {
          validator: ConfirmPasswordValidator("password", "confirmPassword")
        })
    })
  }

  onLogin() {
    this.loginForm.markAllAsTouched();
    if (!this.loginForm.valid) return;
    this._ecommerceService.toggleLoader(true);
    this._authService.loginFirebase(this.loginForm.value).subscribe(res => {
      this._ecommerceService.showToast('Login Successful!', { classname: 'bg-success text-light p-2 font-weight-bold' });
      this._ecommerceService.toggleLoader(false);
      this.loginForm.reset();
      this.modalRef.close();
    }, err => {
      this._ecommerceService.toggleLoader(false);
      this._ecommerceService.showToast(`${err}`, { classname: 'bg-danger text-light p-2 font-weight-bold' });
    });
  }

  onSignUp() {
    this.signUpForm.markAllAsTouched();
    if (!this.signUpForm.valid) return;
    this._ecommerceService.toggleLoader(true);
    const accountInfo = {
      email: this.signUpForm.get('email').value,
      password: this.signUpForm.get('passwordGroup.password').value
    }

    this._authService.registerFirebase(accountInfo).subscribe(res => {
      this._ecommerceService.toggleLoader(false);
      this.signUpForm.reset();
      this._ecommerceService.showToast('Your account has been created successfully. You can login now.', { classname: 'bg-success text-light p-2 font-weight-bold'});
      this.isLogin = true;
    }, err => {
      switch (err.error.error.message) {
        case 'EMAIL_EXISTS':
          this._ecommerceService.showToast('This email exists already!', { classname: 'bg-danger text-light p-2 font-weight-bold' });
          break;
        default:
          this._ecommerceService.showToast('Unknown error. Please try again later!', { classname: 'bg-danger text-light p-2 font-weight-bold' });
      }
      this._ecommerceService.toggleLoader(false);
      this.signUpForm.reset();
    });


  }

  onLogout() {
    this._authService.onLogoutFirebase();
  }
}
