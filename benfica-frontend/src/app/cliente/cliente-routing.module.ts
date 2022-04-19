import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
    {path: 'lista-cliente', component: ListaClienteComponent},
    {path: 'cadastrar-cliente', component: CadastrarClienteComponent},
    {path: 'alterar-cliente/:id', component: CadastrarClienteComponent},
    {path: 'home', component: HomeComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class ClienteRoutingModule { 

  }