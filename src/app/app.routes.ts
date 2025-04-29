import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CrearNuevaCuentaComponent } from './pages/crear-nueva-cuenta/crear-nueva-cuenta.component';
import { OlvidePasswordComponent } from './pages/olvide-password/olvide-password.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ReservarCitaComponent } from './pages/reservar-cita/reservar-cita.component';
import { ReprogramarCitaComponent } from './pages/reprogramar-cita/reprogramar-cita.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

export const routes: Routes = [
    {path: "inicio", component: InicioComponent},
    {path: "crear-nueva-cuenta", component: CrearNuevaCuentaComponent},
    {path: "olvide-password", component: OlvidePasswordComponent},
    {path:"principal", component: PrincipalComponent},
    {path: "reservar-cita", component: ReservarCitaComponent},
    {path: "reprogramar-cita", component: ReprogramarCitaComponent},
    {path: "usuario", component:UsuarioComponent}
    
];
