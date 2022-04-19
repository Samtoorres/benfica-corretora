import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Cliente } from '../shared/entity/cliente';
import { ClienteService } from '../shared/services/cliente.service';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.scss']
})
export class ListaClienteComponent implements OnInit{

  displayedColumns: string[] = ['nome', 'cpf', 'veiculo', 'acoes'];
  dataSource = [];

  constructor(private clienteService: ClienteService) { 
    this.buscarClientes();
  }

  ngOnInit(): void {
  }

  buscarClientes(){
    this.clienteService.buscarClientes().subscribe(val => this.dataSource = val);
  }

  deletarCliente(cliente : Cliente){
   this.clienteService.deletarCliente(cliente).subscribe(val => this.buscarClientes());
  }

  alterarCliente(cliente : Cliente){
    this.clienteService.alterarCliente(cliente);
  }
}
