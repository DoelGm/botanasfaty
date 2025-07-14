import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../components/admin/navbar/navbar.component';

@Component({
  selector: 'app-public-layouts',
  templateUrl: './admin-layouts.component.html',
  imports: [RouterOutlet, NavbarComponent, CommonModule, RouterLink],
})
export class AdminLayoutsComponent implements OnInit {
  activeSection: number | null = null;
  isSidebarOpen = false;
  isLargeScreen = false;

  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isLargeScreen = window.innerWidth >= 768;
    }
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  sidebarSections = [
    {
      title: 'Dashboard',
      links: [{ label: 'Inicio', route: '/admin/' }],
    },
    {
      title: 'Productos',
      links: [
        { label: 'Lista de productos', route: '/admin/productos' },
        { label: 'Agregar producto', route: '/admin/productos/nuevo' },
      ],
    },
    {
      title: 'Usuarios',
      links: [
        { label: 'Lista de usuarios', route: '/admin/usuarios' },
        { label: 'Agregar Usuario', route: '/admin/usuarios/nuevo' },
        { label: 'Roles', route: '/admin/roles' },
      ],
    },
    {
      title: 'Clientes Frecuentes',
      links: [
        { label: 'Lista de Clientes', route: '/admin/clientes' },
        { label: 'Agregar Clientes', route: '/admin/clientes/nuevo' },
      ],
    },
    {
      title: 'Ajustes',
      links: [
        { label: 'Preferencias', route: '/admin/settings' },
        { label: 'Perfil', route: '/admin/usuario/perfil' },
      ],
    },
  ];

  toggleSection(index: number) {
    this.activeSection = this.activeSection === index ? null : index;
  }
}
