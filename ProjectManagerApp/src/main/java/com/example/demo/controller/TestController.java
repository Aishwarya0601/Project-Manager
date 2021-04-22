package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.*;
import com.example.demo.Repository.UserRepository;
import com.example.demo.models.EStatus;
import com.example.demo.models.Employee;
import com.example.demo.payload.request.updateProject;
import com.example.demo.payload.request.updateSkillset;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {
	@Autowired
	private UserRepository userrepo;
	@GetMapping("/all")
	public String allAccess() {
		return "Public Content.";
	}
	
	@GetMapping("/user")
	@PreAuthorize("hasRole('USER') or hasRole('SLEAD') or hasRole('ADMIN') or hasRole('PLEAD')")
	public String userAccess() {
		
		
		List<String> mylist=new ArrayList<String>();
		mylist.add("add");
		Employee updateemployee = userrepo.findByUsername("admin2"); // fetching a document that you want to update the field
		updateemployee.setSkillSet(mylist); // setting the new value to the field myField
		userrepo.save(updateemployee); // saving (It basically updates the document) the updated document 
		return "User Content.";
	}
	
	@PostMapping("/addskillset")
	//@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	public void addskillset(@RequestBody updateSkillset skillset )	{
		Employee updateemployee = userrepo.findByUsername(skillset.getUsername()); 
		updateemployee.setSkillSet(skillset.getSkillset()); 
		userrepo.save(updateemployee); 
		
	}
	@GetMapping("/alldetails")
	//@PreAuthorize("hasRole('SLEAD')")
	public Employee getalldetails(@RequestParam String username) {
		Employee detailsofemployee = userrepo.findByUsername(username); 
		return detailsofemployee;
		
	}
	
	
	@GetMapping("/mod")
	@PreAuthorize("hasRole('SLEAD')")
	public String moderatorAccess() {
		return "Moderator Board.";
	}
	
	@GetMapping("/plead")
	@PreAuthorize("hasRole('PLEAD')")
	public String projectAccess() {
		return "Project Board.";
	}
	
	@GetMapping("/admin")
	@PreAuthorize("hasRole('ADMIN')")
	public String adminAccess() {
		
		return "Admin Board.";
	}
	@GetMapping("/getavailableemp")
	
	public List<Employee> showavailabledetails()
	{
		List<Employee> listemp1=userrepo.findAll();
		List<Employee> listempavail=new ArrayList<Employee>();
		for (Employee e : listemp1)   
		{  
			if (e.getStatus()==EStatus.AVAILABLE) {
				listempavail.add(e);
			}
		   
		}  
		return listempavail;
		 
	}
	@PostMapping("/updateassignproject")
	//@PreAuthorize("hasRole('MODERATOR') ")
	public void updateproject(@RequestBody updateProject project )	{
		Employee updateemployeepro = userrepo.findByUsername(project.getUsername());
		updateemployeepro.setProjectassigned(project.getProjectassigned()); 
		userrepo.save(updateemployeepro); 
	}
}