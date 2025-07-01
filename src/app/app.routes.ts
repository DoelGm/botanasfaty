import { Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { PublicLayoutsComponent } from './layouts/public-layouts/public-layouts.component';   
import { AdminLayoutsComponent } from './layouts/admin-layouts/admin-layouts.component';
import { ProductComponent } from './pages/public/product/product.component';
import { OfertsComponent } from './pages/public/oferts/oferts.component';

export const routes: Routes = [

    {
        path: '', 
        component: PublicLayoutsComponent,
        children: [
            {path: '', component: HomeComponent},
            {path: 'product', component: ProductComponent},
            {path: 'oferts', component: OfertsComponent},
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
