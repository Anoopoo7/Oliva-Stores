package com.backend.mongo.personCtrl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.mongo.person.person;
import com.backend.mongo.repository.userRepository;

@RestController
@CrossOrigin(origins = "*")
public class personControll {

	@Autowired
	private userRepository userrepo;

	@PostMapping("/createuser")
	public String createUser(@RequestBody person user) {
		userrepo.insert(user);
		return "user created";
	}
	
	@PostMapping("/singleuser/{id}")
	public person singleUser(@PathVariable String id) {
		person selected = userrepo.findById(id).orElseThrow();
		return selected;
	}
	
	@PostMapping("/loginuser")
	public person loginUser(@RequestBody person user) {
		
		person data= null;
		
		try {
			String id = user.getId();
			String password = user.getPassword();
			System.out.println(id);
			System.out.println(password);
			int pass1 = Integer.parseInt(password);
			person selected = userrepo.findById(id).orElseThrow();
			String check = selected.getPassword();
			int pass2 = Integer.parseInt(check);

			
			if (pass1 == pass2) {
				data = selected;
				return data;
			}else {
				return data;
			}
		} catch (Exception e) {
			return data;
		}
	}
	
	
	@GetMapping("/displayusers")
	public List<person> displayuser() {
		return userrepo.findAll();
	}
}

