package com.benficaapp.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.benficaapp.models.Cliente;
import com.benficaapp.repository.ClienteRepository;

@CrossOrigin
@Controller
@RequestMapping("cliente")
public class ClienteController {
	
	@Autowired
	private ClienteRepository er;
	
	@RequestMapping(value="/cadastrar-cliente", method=RequestMethod.POST)
	public ResponseEntity<Cliente> salvarCliente(@RequestBody Cliente cliente) {
		Cliente clienteSalvar = er.save(cliente);
		return ResponseEntity.ok(clienteSalvar);
	}
	
	@RequestMapping("/clientes")
	@ResponseBody
	public ResponseEntity<Iterable<Cliente>>  listaClientes() {
		Iterable<Cliente> clientes = er.findAll();
		return ResponseEntity.ok(clientes);
	}
	
	@RequestMapping(value="/deletar-cliente/{codigo}", method=RequestMethod.DELETE)
	public ResponseEntity<?> deletarCliente(@PathVariable Long codigo){	

		Cliente clienteBusca = new Cliente();
		clienteBusca = er.findById(codigo).get();
		
		if(clienteBusca != null && clienteBusca.getCodigo() != null) {
			try {
				er.deleteById(clienteBusca.getCodigo());
				return ResponseEntity.ok(clienteBusca);
			} catch(Exception ex) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(ex);
			}
		} 
		return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
	}
	
	
	@RequestMapping(value="/alterar-cliente", method=RequestMethod.PUT)
	public ResponseEntity<Cliente> alterarCliente(@RequestBody Cliente cliente) {
		Cliente clienteAlterar = er.save(cliente);
		return ResponseEntity.ok(clienteAlterar);
	}
	
	@RequestMapping(value="/{codigo}", produces = "application/json")
    public ResponseEntity<Cliente> buscarPorCodigo(@PathVariable Long codigo) {
        Cliente cliente = er.findById(codigo).get();
        return ResponseEntity.ok(cliente);
    }
	
}	
