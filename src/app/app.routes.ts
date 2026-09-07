import { Routes } from '@angular/router';
import { About } from './about/about';
import { Landing } from './landing/landing';

export const routes: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'about', component: About },
    { path: 'main', component: Landing }
];
