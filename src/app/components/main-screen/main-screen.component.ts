import { Component } from '@angular/core';
import { FooterNavigationComponent } from "./footer-navigation/footer-navigation.component";

@Component({
    selector: 'app-main-screen',
    standalone: true,
    templateUrl: './main-screen.component.html',
    styleUrl: './main-screen.component.css',
    imports: [FooterNavigationComponent]
})
export class MainScreenComponent {

}
