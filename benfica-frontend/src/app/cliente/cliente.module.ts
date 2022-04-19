import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import {MatButtonModule} from '@angular/material/button';
import { ClienteRoutingModule } from './cliente-routing.module';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { CadastrarClienteComponent } from './cadastrar-cliente/cadastrar-cliente.component';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {CdkTableModule} from '@angular/cdk/table';

@NgModule({
  declarations: [ListaClienteComponent, CadastrarClienteComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    ClienteRoutingModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    CdkTableModule
  ],
  exports: []
})
export class ClienteModule { }
