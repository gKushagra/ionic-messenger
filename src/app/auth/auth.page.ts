import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: 'auth.page.html',
    styleUrls: ['auth.page.scss']
})
export class AuthPage implements OnInit {

    isLogin: boolean = false;
    isSignup: boolean = false;
    isVerify: boolean = false;
    isResetRequest: boolean = false;
    isReset: boolean = false;

    form: FormGroup = new FormGroup({
        email: new FormControl(null, [Validators.email]),
        password: new FormControl(null),
        code: new FormControl(null),
        newPassword: new FormControl(null),
        confirmPassword: new FormControl(null)
    });

    constructor(
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.isLogin = true;
    }

    onSubmit(): void {
        console.log(this.form.value);
        this.router.navigate(['/app/tabs/tab1']);
    }

    forgotPassword(): void {
        this.isLogin = false;
        this.isSignup = false;
        this.isReset = false;
        this.isVerify = false;
        this.isResetRequest = true;
    }

    createAccount(): void {
        this.isLogin = false;
        this.isSignup = true;
        this.isReset = false;
        this.isVerify = false;
        this.isResetRequest = false;
    }

    login(): void {
        this.isLogin = true;
        this.isSignup = false;
        this.isReset = false;
        this.isVerify = false;
        this.isResetRequest = false;
    }
}