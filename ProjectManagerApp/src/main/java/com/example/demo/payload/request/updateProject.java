package com.example.demo.payload.request;

public class updateProject {
	private String username;
	private String projectassigned;
	
	public updateProject() {}

	public updateProject(String username, String projectassigned) {
		super();
		this.username = username;
		this.projectassigned = projectassigned;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getProjectassigned() {
		return projectassigned;
	}

	public void setProjectassigned(String projectassigned) {
		this.projectassigned = projectassigned;
	}
	

}
