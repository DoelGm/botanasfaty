import { Routes } from '@angular/router';
import { HomeComponent } from './pages/public/home/home.component';
import { PublicLayoutsComponent } from './layouts/public-layouts/public-layouts.component';
import { AdminLayoutsComponent } from './layouts/admin-layouts/admin-layouts.component';
import { ProductComponent } from './pages/public/product/product.component';
import { OfertsComponent } from './pages/public/oferts/oferts.component';
import { DashoboardComponent } from './pages/admin/dashoboard/dashoboard.component';
import { NewProductComponent } from './components/admin/new-product/new-product.component';
import { ProductTableComponent } from './components/admin/product-table/product-table.component';
import { NewUserComponent } from './components/admin/new-user/new-user.component';
import { UsersTableComponent } from './components/admin/users-table/users-table.component';
import { NewCustumerComponent } from './components/admin/new-custumer/new-custumer.component';
import { CustumersTableComponent } from './components/admin/custumers-table/custumers-table.component';

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
            {path: '', component: DashoboardComponent},
            {path: 'productos/nuevo', component: NewProductComponent},
            {path: 'productos', component: ProductTableComponent},
            {path: 'usuarios', component: UsersTableComponent},
            {path: 'usuarios/nuevo', component: NewUserComponent},
            {path: 'clientes', component: CustumersTableComponent},
            {path: 'clientes/nuevo', component: NewCustumerComponent},
            {path: 'usuario/perfil', component: NewUserComponent},


        ]
    }
];
