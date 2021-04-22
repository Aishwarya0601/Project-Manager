package com.example.demo.models;

import java.util.HashSet;
import java.util.*;


import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="users")
public class Employee {
	 @Id
	  private String id;
	 	
	  		
	  @NotBlank
	  @Size(max = 20)
	  private String username;

	  @NotBlank
	  @Size(max = 50)
	  @Email
	  private String email;

	  @NotBlank
	  @Size(max = 120)
	  private String password;
	  
	  @NotBlank
	  @Size(max = 10)
	  private String phonenumber;
	  
	  private String projectassigned;
	  
	   
	  private EStatus status;
	  
	  private List<String> skillSet=new ArrayList<String>();
	  @DBRef
	  private Set<Role> role =new HashSet<>();

	  public Employee() {
	  }
	  
	  

	

	  public Employee(String username, String email,String password, String phonenumber,String projectassigned, EStatus status) {
		super();
		this.username = username;
		this.email = email;
		this.password = password;
		this.phonenumber = phonenumber;
		this.projectassigned = projectassigned;
		this.status = status;
		
		
	}





	





	//public Employee(String username2, String email2, String password2, String phonenumber2, String projectassigned2,
		//	EStatus currstatus) {
		// TODO Auto-generated constructor stub
	//}





	public String getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}

	public String getProjectassigned() {
		return projectassigned;
	}

	public void setProjectassigned(String projectassigned) {
		this.projectassigned = projectassigned;
	}

	public EStatus getStatus() {
		return status;
	}

	public void setStatus(EStatus status) {
		this.status = status;
	}

	public String getId() {
	    return id;
	  }

	  public void setId(String id) {
	    this.id = id;
	  }

	  public String getUsername() {
	    return username;
	  }

	  public void setUsername(String username) {
	    this.username = username;
	  }

	  public String getEmail() {
	    return email;
	  }

	  public void setEmail(String email) {
	    this.email = email;
	  }

	  public String getPassword() {
	    return password;
	  }

	  public void setPassword(String password) {
	    this.password = password;
	  }
	  
	  public List<String> getSkillSet() {
		return skillSet;
	  }

	  public void setSkillSet(List<String> skillSet) {
		this.skillSet = skillSet;
	  }

	public Set<Role> getRole() {
		return role;
	}

	public void setRole(Set<Role> role) {
		this.role = role;
	}
	  
	  


	  
	 

}
