import { NgModule } from '@angular/core';
import { NgModel, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RoutingModule } from './app.router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { ListaMenuComponent } from './menu/lista-menu/lista-menu.component';
import { HeaderMenuComponent } from './menu/header-menu/header-menu.component';
import { FooterMenuComponent } from './menu/footer-menu/footer-menu.component';
import { UserAvatarComponent } from './menu/header-menu/user-avatar/user-avatar.component';

import { HeaderComponent } from './header/header.component';
import { BtnHeaderComponent } from './header/btn-header/btn-header.component';

import { FooterComponent } from './footer/footer.component';

import { LoginComponent } from './pages/login/login.component';
import { AuthService } from './pages/login/auth.service';
import { AuthGuard } from './guards/auth-guard';
import { TokenService } from './token.service';

import { HomeComponent } from './pages/home/home.component';

import { EmpresasComponent } from './pages/empresas/empresas.component';
import { EmpresasService } from './pages/empresas/empresas.service';

import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    HeaderMenuComponent,
    UserAvatarComponent,
    ListaMenuComponent,
    BtnHeaderComponent,
    LoginComponent,
    HomeComponent,
    FooterMenuComponent,
    EmpresasComponent,
    ConfiguracoesComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    RoutingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    Title,
    AuthService,
    AuthGuard,
    TokenService,
    EmpresasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
