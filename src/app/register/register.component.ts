import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ConstantsService } from '../services/constants.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  loginForm: FormGroup;
  error = '';
  selectedIndex:number;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authService: AuthService,
        private toastr: ToastrService,
        private constantsService: ConstantsService
    ) {
        // redirect to home if already logged in
        if (this.authService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
      this.selectedIndex = 0;
        this.loginForm = new FormGroup( {
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            contactNumber: new FormControl(''),
            linkedinUrl: new FormControl('')
        });
    }
    selectedIndexChange(index){
      this.selectedIndex = index;
      this.loginForm.patchValue({
        username: this.f.username.value,
        password: this.f.password.value,
        firstName: this.f.firstName.value,
        lastName: this.f.lastName.value,
        contactNumber: this.f.contactNumber.value,
        linkedinUrl: this.f.linkedinUrl.value
      });
    }
    hasError(controlName: string, errorName: string) {
        return this.loginForm.controls[controlName].hasError(errorName);
    }

    // convenience getter for easy access to form fields
	get f() { return this.loginForm.controls; }

    onSubmit() {console.log('onSubmit');
        if (this.loginForm.valid) {
            this.authService.register(this.f.username.value, this.f.password.value,this.f.firstName.value,this.f.lastName.value,this.f.contactNumber.value,this.f.linkedinUrl.value,this.selectedIndex==0?this.constantsService.ROLES.USER:this.constantsService.ROLES.MENTOR)
                .subscribe(
                    data => {
                        this.toastr.success('success!', 'Register');
                        this.router.navigate(["/login"]);
                    },
                    error => {
                        this.error = error;
                    });
        }
    }
}
