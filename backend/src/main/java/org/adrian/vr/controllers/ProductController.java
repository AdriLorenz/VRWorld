package org.adrian.vr.controllers;

import java.util.List;

import org.adrian.vr.entity.models.Product;
import org.adrian.vr.entity.services.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
public class ProductController {

	@Autowired
	IProductService productService;
	
	@GetMapping("/products")
	public List<Product> getAllProducts() {
		try {
			return productService.getAll();
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
		return productService.getAll();
	}
	
	@GetMapping("/products/{id_product}")
	public Product getOne(@PathVariable(value = "id_product") long id_product) {
		try {
			return productService.get(id_product);
		} catch (Exception e ) {
			System.out.println(e.getMessage());
		}
		return productService.get(id_product);
	}
	
}
