package com.benficaapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.benficaapp.controllers"})
@EntityScan(basePackages = {"com.benficaapp.models"})
public class BenficaappApplication {

	public static void main(String[] args) {
		SpringApplication.run(BenficaappApplication.class, args);
	}

}
