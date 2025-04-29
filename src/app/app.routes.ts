import { Routes } from '@angular/router';
import { PrincipalComponent } from './pages/principal/principal.component';
import { LoginComponent } from './pages/login/login.component';
import { CrearCuentaComponent } from './pages/login/crear-cuenta/crear-cuenta.component';
import { RecuperarPasswordComponent } from './pages/login/recuperar-password/recuperar-password.component';
import { ReservarMedicoComponent } from './pages/principal/gestionar-cita/reservar-medico/reservar-medico.component';
import { SeleccionarEspecialidadComponent } from './pages/principal/gestionar-cita/seleccionar-especialidad/seleccionar-especialidad.component';
import { ResumenCitaComponent } from './pages/principal/gestionar-cita/resumen-cita/resumen-cita.component';
import { ConfirmarCitaComponent } from './pages/principal/gestionar-cita/confirmar-cita/confirmar-cita.component';
import { CancelarCitaComponent } from './pages/principal/gestionar-cita/cancelar-cita/cancelar-cita.component';
import { ConfirmarCancelacionComponent } from './pages/principal/gestionar-cita/confirmar-cancelacion/confirmar-cancelacion.component';
import { MensajeCancelacionComponent } from './pages/principal/gestionar-cita/mensaje-cancelacion/mensaje-cancelacion.component';
import { ReprogramarCitaComponent } from './pages/principal/gestionar-cita/reprogramar-cita/reprogramar-cita.component';
import { GestionarCitaComponent } from './pages/principal/gestionar-cita/gestionar-cita.component';
import { HistorialClinicoComponent } from './pages/principal/historial-clinico/historial-clinico.component';
import { UsuarioComponent } from './pages/principal/usuario/usuario.component';
import { ReservarLaboratorioComponent } from './pages/principal/gestionar-cita/reservar-laboratorio/reservar-laboratorio.component';

export const routes: Routes = [
    {path:"", redirectTo: "login", pathMatch: "full"}, // Ruta por defecto
    {path:"login", component: LoginComponent},
    {path:"crear-cuenta", component: CrearCuentaComponent},
    {path: "recuperar-password", component: RecuperarPasswordComponent},
    
    {path:"principal", component: PrincipalComponent},
    {path: "gestionar-cita", component: GestionarCitaComponent},
        {path: "reservar-medico", component: ReservarMedicoComponent},
        {path: "seleccionar-especialidad", component: SeleccionarEspecialidadComponent},
        {path: "reservar-laboratorio", component: ReservarLaboratorioComponent},
        {path: "resumen-cita",  component: ResumenCitaComponent},
        {path: "confirmar-cita", component: ConfirmarCitaComponent},
        {path: "cancelar-cita",component: CancelarCitaComponent},
        {path: "confirmar-cancelacion", component: ConfirmarCancelacionComponent},
        {path: "mensaje-cancelacion", component: MensajeCancelacionComponent},
        {path: "reprogramar-cita", component: ReprogramarCitaComponent},
    {path: "historial-clinico", component: HistorialClinicoComponent},

    {path: "usuario", component: UsuarioComponent}


    
];
