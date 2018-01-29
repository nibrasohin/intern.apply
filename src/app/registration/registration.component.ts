import {Component, OnInit} from '@angular/core';
import {RegisterApiService} from '../shared/services/register-api/register-api.service';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    public user = {
        username: '',
        password: '',
        passwordConfirm: '',
        email: '',
        emailConfirm: ''
    };

    public isSubmitted = false;
    public response: Object;

    constructor(private registerAPI: RegisterApiService) {
    }

    ngOnInit() {
    }

    onSubmit() {
        this.register();
        this.isSubmitted = true;
    }

    private register(): void {
        this.registerAPI.register(this.user).subscribe((res) => {
            this.response = res;
        });
    }
}
