package com.example.demo.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Optional;

import com.example.demo.models.Employee;

public interface UserRepository extends MongoRepository<Employee, String>{
		  Boolean existsByUsername(String username);

	  Boolean existsByEmail(String email);
	  public Employee findByUsername(String username);

}
