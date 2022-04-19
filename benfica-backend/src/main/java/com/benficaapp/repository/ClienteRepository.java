package com.benficaapp.repository;

import org.springframework.data.repository.CrudRepository;

import com.benficaapp.models.Cliente;

public interface ClienteRepository extends CrudRepository<Cliente, Long>{
	
}
