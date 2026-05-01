import { Routes } from '@angular/router';
import { Home } from './component/page/home/home';
import { Contact } from './component/page/contact/contact';
import { Evenements } from './component/page/evenements/evenements';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'contacts',
        component: Contact
    },
    {
        path: 'events',
        component: Evenements
    }
];
