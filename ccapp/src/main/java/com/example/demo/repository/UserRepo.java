package com.example.demo.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.User;

public interface UserRepo extends MongoRepository<User, String> {
	public User findByUsername(String username);
	public void deleteByUsername(String username);

}
