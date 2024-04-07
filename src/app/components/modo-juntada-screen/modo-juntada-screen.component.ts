import { Component } from '@angular/core';
import { FooterNavigationComponent } from "../main-screen/footer-navigation/footer-navigation.component";
import { ModalNuevaJuntadaComponent } from "./modal-nueva-juntada/modal-nueva-juntada.component";

@Component({
    selector: 'app-modo-juntada-screen',
    standalone: true,
    templateUrl: './modo-juntada-screen.component.html',
    styleUrl: './modo-juntada-screen.component.css',
    imports: [FooterNavigationComponent, ModalNuevaJuntadaComponent]
})
export class ModoJuntadaScreenComponent {

}
