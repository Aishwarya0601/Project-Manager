package com.example.demo.payload.request;

import java.time.LocalDate;
import java.util.List;

import com.example.demo.models.Employee;
import com.fasterxml.jackson.annotation.JsonFormat;

public class addproject {
	private String projectname;
	private String projectlead;
	private String projectdescription;
	//@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
	private LocalDate startdate;
	//@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
	private LocalDate enddate;
	private String client;
	
	public addproject() {}
	
	
	public addproject(String projectname, String projectlead, String projectdescription, LocalDate startdate,
			LocalDate enddate,  String client) {
		super();
		this.projectname = projectname;
		this.projectlead = projectlead;
		this.projectdescription = projectdescription;
		this.startdate = startdate;
		this.enddate = enddate;
		this.client=client;
	}


	public String getProjectdescription() {
		return projectdescription;
	}

	public void setProjectdescription(String projectdescription) {
		this.projectdescription = projectdescription;
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


	public String getClient() {
		return client;
	}


	public void setClient(String client) {
		this.client = client;
	}
	

}
