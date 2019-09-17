import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth-guard';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';


const routes: Routes = [
    // home
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        data: {title: 'Home'}
    },
    // login
    {
        path: 'login',
        component: LoginComponent,
        data: {title: 'Login'}
    },
    // logout
    {
        path: 'logout',
        component: LoginComponent,
        data: {title: 'Logout'}
    },
    // empresas
    {
        path: 'empresas',
        component: EmpresasComponent,
        canActivate: [AuthGuard],
        data: {title: 'Empresas'}
    },
    // configuracoes
    {
        path: 'configuracoes',
        component: ConfiguracoesComponent,
        canActivate: [AuthGuard],
        data: {title: 'Configurações'}
    },
    // usuarios
    {
        path: 'usuarios',
        component: UsuariosComponent,
        canActivate: [AuthGuard],
        data: {title: 'Usuários'}
    }
];

export const RoutingModule = RouterModule.forRoot(routes);
