import { Component, OnInit, NgZone } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { AuthenticationService } from '../authenticationn.service';

@Component({
  selector: 'tcb-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    formControls: { [key: string]: FormControl } = {};
    registrationForm: FormGroup;

    constructor(private _authService: AuthenticationService, private zone: NgZone) {
        this.formControls = {
            'name': new FormControl('', Validators.compose([Validators.required])),
            'email': new FormControl('', Validators.compose([Validators.required])),
            'password': new FormControl('', Validators.compose([Validators.required]))
        };
        this.registrationForm = new FormGroup(this.formControls);
    }

    ngOnInit() {
    }

    postRegister() {
        const formValue = this.registrationForm.value;
        this._authService.postRegister(formValue.name, formValue.email, formValue.password).subscribe(
            data => console.log(data),
            err => console.log(err),
            () => console.log('New User added!')
        );
    }

}
