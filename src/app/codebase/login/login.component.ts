import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '../../../../node_modules/@angular/forms';

import { AuthenticationService } from '../authenticationn.service';

@Component({
  selector: 'tcb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    formControls: { [key: string]: FormControl } = {};
    loginForm: FormGroup;

    constructor(private _authService: AuthenticationService) {
        this.formControls = {
            'email': new FormControl('', Validators.compose([Validators.required])),
            'password': new FormControl('', Validators.compose([Validators.required]))
        };

        this.loginForm = new FormGroup(this.formControls);

    }

    ngOnInit() {
    }

    postLogin() {
        const formValue = this.loginForm.value;
        this._authService.postLogin(formValue.email, formValue.password).subscribe(
            data => console.log(data),
            err => console.log(err),
            () => console.log('Done login... redirect to profile')
        );
    }

}
