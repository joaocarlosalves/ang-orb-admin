import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { Md5 } from 'ts-md5/dist/md5';
import { Injectable, EventEmitter } from '@angular/core';

import { Usuario } from './usuario';
import { TokenService } from '../../token.service';


@Injectable()
export class AuthService {

  private userLogado = false;

  homePage = new EventEmitter<boolean>();

  constructor(private http: HttpClient, private router: Router, public userToken: TokenService) { }

  login(usuario: Usuario) {

    if (usuario.userLogin && usuario.userPass) {
      document.getElementById('msg-erro-login').style.display = 'none';

      const urlGetToken = '_________URL';
      const password = Md5.hashStr(usuario.userPass);
      const bodyGetToken: string = 'grant_type=password&username=' + usuario.userLogin + '&password=' + password;

      this.http.post(urlGetToken, bodyGetToken, {
          headers: new HttpHeaders()
              .set('Content-Type',    'application/x-www-form-urlencoded')
              .set('Authorization',   'Basic cmV0YWd1YXJkYTpvcmJpdGFsbA==')
              .set('systemName',      'siteOle')
              .set('environmentName', 'hml')
              .set('productName',     'appOrbitallCard')
      })
      .subscribe(
        data => {
          this.userToken.userToken = data['tokenBackEnd']['OAuth2AccessToken']['access_token'];
          this.userLogado = true;
          this.homePage.emit(true);
          this.router.navigate(['/empresas']);
        },
        error => {
          document.getElementById('msg-erro-login').style.display = 'block';
          this.homePage.emit(false);
        }
      );
    } else {
      document.getElementById('msg-erro-login').style.display = 'block';
      this.homePage.emit(false);
    }
  }

  usuarioLogado() {
    return true;
  }
}
