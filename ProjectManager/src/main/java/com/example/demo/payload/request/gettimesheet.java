package com.example.demo.payload.request;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

public class gettimesheet {
	private String projectname;
	//@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
	private LocalDate startdate;

	public gettimesheet() {}
	public gettimesheet(String projectname, LocalDate startdate) {
		super();
		this.projectname = projectname;
		this.startdate = startdate;
	}
	
	
	public String getProjectname() {
		return projectname;
	}

	public void setProjectname(String projectname) {
		this.projectname = projectname;
	}

	public LocalDate getStartdate() {
		return startdate;
	}

	public void setStartdate(LocalDate startdate) {
		this.startdate = startdate;
	}
	

}
