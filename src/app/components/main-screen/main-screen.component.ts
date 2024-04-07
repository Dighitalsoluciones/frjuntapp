import { Component } from '@angular/core';
import { FooterNavigationComponent } from "./footer-navigation/footer-navigation.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-main-screen',
    standalone: true,
    templateUrl: './main-screen.component.html',
    styleUrl: './main-screen.component.css',
    imports: [RouterLink, FooterNavigationComponent]
})
export class MainScreenComponent {

}
