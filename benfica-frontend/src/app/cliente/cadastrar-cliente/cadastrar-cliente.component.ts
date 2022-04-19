import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../shared/entity/cliente';
import { ClienteService } from '../shared/services/cliente.service';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.scss'],
  providers: [ClienteService]
})
export class CadastrarClienteComponent implements OnInit {

  cliente = new Cliente();
  idCliente: string;

  constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.idCliente = this.route.snapshot.paramMap.get("id");
    if(this.idCliente != null){
      this.buscarClientePorID();
    }
  }

  public cadastrarCliente(){
    if(!this.idCliente){
      this.clienteService.cadastrarCliente(this.cliente);
    } else {
      this.clienteService.alterarCliente(this.cliente).subscribe(val=>{
        this.router.navigate(["/lista-cliente"]);
      });
    }
    
  }

  public buscarClientePorID(){
    this.clienteService.buscarClientePorID(this.idCliente).subscribe(val => {
      this.cliente = val;
    });
  }


}
