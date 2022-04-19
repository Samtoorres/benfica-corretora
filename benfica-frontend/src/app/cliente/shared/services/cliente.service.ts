import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../entity/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { 

  }

    public cadastrarCliente(cliente: Cliente){
      this.http.post("http://localhost:8080/cliente/cadastrar-cliente", cliente).subscribe(val=>console.log(val));
    }

    public buscarClientes():Observable<any[]>{
      return this.http.get<any[]>("http://localhost:8080/cliente/clientes");
    }

    public deletarCliente(cliente: Cliente){
      return this.http.delete("http://localhost:8080/cliente/deletar-cliente/"+cliente.codigo);
  }

  public alterarCliente(cliente: Cliente){
    return this.http.put("http://localhost:8080/cliente/alterar-cliente", cliente);
  }

  public buscarClientePorID(idCliente: string){
    return this.http.get<Cliente>("http://localhost:8080/cliente/"+idCliente);
  }
}
