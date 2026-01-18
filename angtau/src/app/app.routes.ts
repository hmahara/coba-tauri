import { Routes } from '@angular/router';
import { Concept } from './concept/concept';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
    {'path': 'c', component: Concept},
    {'path': '', component: Concept},
    {'path': 'dashboard', component: Dashboard}
];
