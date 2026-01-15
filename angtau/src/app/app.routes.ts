import { Routes } from '@angular/router';
import { Concept } from './concept/concept';

export const routes: Routes = [
    {'path': 'c', component: Concept},
    {'path': '', component: Concept}
];
