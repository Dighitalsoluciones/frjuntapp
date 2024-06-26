import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { ModoJuntadaScreenComponent } from './components/modo-juntada-screen/modo-juntada-screen.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'main', component: MainScreenComponent },
    { path: 'juntada', component: ModoJuntadaScreenComponent },

];
