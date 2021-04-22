package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepo;
import java.util.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController  {
	@Autowired
	private UserRepo repo;
	@PostMapping("/adduserdetails")
	
	public void adduser(@RequestBody User usergiven )	{
		
		repo.save(usergiven); 
		
	}
   @GetMapping("/findusername")
	
	public User findusername(@RequestParam String username)	{
		
	   //String username="a1";
	   return repo.findByUsername(username);
	  
		
	}
   @GetMapping("/findall")
	
  	public Iterable<User> findallusers()	{
  		
  	   //String username="a1";
  	   return repo.findAll();
  	  
  		
  	}
   @PostMapping("/deleteuser/{uname}")

   public void deleteuser(@PathVariable("uname") String username)
   {
	   repo.deleteByUsername(username);
   }
   
	
	
	
	

}
