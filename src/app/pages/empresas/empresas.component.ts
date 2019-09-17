import { Component, OnInit } from '@angular/core';
import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Usuario } from '../login/usuario';
import { TokenService } from '../../token.service';
import { EmpresasService } from './empresas.service';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css'],
  providers: [Usuario]
})

@Injectable()
export class EmpresasComponent implements OnInit {

  constructor(private usuario: Usuario, public token: TokenService, private http: HttpClient, public empresas: EmpresasService) { }

  ngOnInit() {
    const urlGetCompany = 'https://api.orbitallcartoes.com.br/v1/company';

    this.http.get(urlGetCompany, {
        headers: new HttpHeaders()
            .set('Content-Type',    'application/x-www-form-urlencoded')
            .set('Authorization',   'Bearer ' + this.token.userToken + '')
            .set('systemName',      'siteOle')
            .set('environmentName', 'hml')
            .set('productName',     'appOrbitallCard')
    })
    .subscribe(
      data => {
        // this.listaEmpresa = data[0];
        this.empresas = data['retorno']['listCompany'];
      },
      error => {
        console.log('Erro. Se persistir, entre em contato com o suporte técnico.');
      }
    );
  }

  // Função para inserir uma empresa
  incluiEmpresa() {
    console.log('Oi');
  }

  // Função para editar uma empresa
  editaEmpresa() {
    console.log('Oi');
  }

  // Função para excluir uma empresa
  excluiEmpresa() {
    console.log('Oi');
  }

}
