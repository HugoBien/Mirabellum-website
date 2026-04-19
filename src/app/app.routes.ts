import { Routes } from '@angular/router';
import { Home } from './component/page/home/home';
import { Contact } from './component/page/contact/contact';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path: 'contact',
        component: Contact
    }
];
