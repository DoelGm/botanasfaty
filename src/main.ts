import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(), // Activa las animaciones
    ...appConfig.providers // Incluye el resto de tu configuración
  ]
})
  .catch((err) => console.error(err));
