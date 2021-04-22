package com.example.demo.models;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFormat;

import java.time.LocalDate;
import java.util.*;

@Document(collection="projectdetails")
public class Project {
	
	@Id
	private String id;
	private String projectname;
	private String projectlead;
	private String projectdescription;
	private List<Employee> accessmembers;
	private String client;
	//@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
	private LocalDate startdate;
	//@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
	private LocalDate enddate;
	public Project() {
		
	}
	
	

	public Project(String projectname, String projectlead, String projectdescription,
			 LocalDate startdate, LocalDate enddate,String client)
	{
		super();
		this.projectname = projectname;
		this.projectlead = projectlead;
		this.projectdescription = projectdescription;
	
		this.accessmembers=new ArrayList<Employee>();
		this.startdate = startdate;
		this.enddate = enddate;
		this.client=client;
	}



	public String getClient() {
		return client;
	}



	public void setClient(String client) {
		this.client = client;
	}



	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getProjectname() {
		return projectname;
	}
	public void setProjectname(String projectname) {
		this.projectname = projectname;
	}
	public String getProjectlead() {
		return projectlead;
	}
	public void setProjectlead(String projectlead) {
		this.projectlead = projectlead;
	}

	public String getProjectdescription() {
		return projectdescription;
	}

	public void setProjectdescription(String projectdescription) {
		this.projectdescription = projectdescription;
	}

	public List<Employee> getAccessmembers() {
		return accessmembers;
	}

	public void setAccessmembers(List<Employee> accessmembers) {
		this.accessmembers = accessmembers;
	}

	public LocalDate getStartdate() {
		return startdate;
	}

	public void setStartdate(LocalDate startdate) {
		this.startdate = startdate;
	}

	public LocalDate getEnddate() {
		return enddate;
	}

	public void setEnddate(LocalDate enddate) {
		this.enddate = enddate;
	}
	
	
	

}
