import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PublicLayoutsComponent } from './layouts/public-layouts/public-layouts.component';   
import { AdminLayoutsComponent } from './layouts/admin-layouts/admin-layouts.component';

export const routes: Routes = [

    {
        path: '', 
        component: PublicLayoutsComponent,
        children: [
            {path: '', component: HomeComponent},
        ]
    },
    {
        path: 'admin', 
        component: AdminLayoutsComponent,
        children: [
            {path: '', component: HomeComponent},
        ]
    }
];
