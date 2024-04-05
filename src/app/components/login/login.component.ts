import { Component } from '@angular/core';
import { ModalNewAccountComponent } from "./modal-new-account/modal-new-account.component";
import { ModalForgotPassComponent } from "./modal-forgot-pass/modal-forgot-pass.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [ModalNewAccountComponent, ModalForgotPassComponent]
})
export class LoginComponent {

}
