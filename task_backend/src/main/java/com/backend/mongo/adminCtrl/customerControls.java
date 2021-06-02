package com.backend.mongo.adminCtrl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.mongo.admin.customer;
import com.backend.mongo.repository.customerRepository;

@RestController
@CrossOrigin(origins = "*")
public class customerControls {

	@Autowired
	private customerRepository custmrepo;
	
	@PostMapping("/addCustomer")
	public String addCoustomer(@RequestBody customer newcustomer) {
		custmrepo.insert(newcustomer);
		return("new customer created");
		
	}
	@PostMapping("/dltCustomer/{id}")
	public String dltCoustomer(@PathVariable String id) {
		custmrepo.deleteById(id);
		return("order completed");
		
	}
	@GetMapping("/listCustomer")
	public List<customer> listcustomer() {
		return custmrepo.findAll();
	}
	
	@GetMapping("/demo")
	public String demo() {
		return "hello world";
	}
	
	
}
