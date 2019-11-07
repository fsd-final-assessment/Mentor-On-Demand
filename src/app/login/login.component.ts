import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { concatMap } from 'rxjs/operators';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    error = '';

    constructor(
        private titleService:Title,
        private router: Router,
        private authService: AuthService,
        private userService: UserService
    ) {
        // redirect to home if already logged in
        if (this.authService.currentUserValue) {
            this.router.navigate(['/']);
        }
        this.titleService.setTitle("Login");
    }

    ngOnInit() {
        this.loginForm = new FormGroup( {
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

    hasError(controlName: string, errorName: string) {
        return this.loginForm.controls[controlName].hasError(errorName);
    }

    // convenience getter for easy access to form fields
	get f() { return this.loginForm.controls; }

    onSubmit() {
        if (this.loginForm.valid) {
            this.authService.login(this.f.username.value, this.f.password.value)
                .pipe(
                    concatMap((user)=>{
                        console.log('user',user);
                        return this.userService.findByUsername(this.f.username.value);
                    })
                )
                .subscribe(
                    data => {
                        this.authService.updateUser(data);
                        this.router.navigate(["/"]);
                    },
                    error => {
                        this.error = error;
                    });
        }
    }
}
