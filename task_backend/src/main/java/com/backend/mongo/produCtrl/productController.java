package com.backend.mongo.produCtrl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.mongo.product.products;
import com.backend.mongo.repository.productRepository;

@RestController
@CrossOrigin(origins = "*")
public class productController {
	
	@Autowired
	private productRepository prepo;
	
	@PostMapping("/createProduct")
	public String createTask(@RequestBody products task) {
		prepo.insert(task);
		System.out.println("ctrated");
		return "created";
	}
	
	@GetMapping("/display")
	public List<products> display() {
		return prepo.findAll();
	}
	
	@PostMapping("/deleteproduct/{id}")
	public String deleteprd(@PathVariable String id) {
		prepo.deleteById(id);
		return "deleted";
	}
	
	@PostMapping("/selectProduct/{id}")
	public products electeprd(@PathVariable String id) {
		products selected = prepo.findById(id).orElseThrow();
		return selected;
	}
	
	
}
