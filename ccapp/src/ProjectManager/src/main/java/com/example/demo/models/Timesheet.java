package com.example.demo.models;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonFormat;
@Document(collection="timesheet")

public class Timesheet {
	@Id
	private String Id;
	private String username;
	//@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
	private LocalDate startdate;
	//@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
	private LocalDate enddate;
	private List<Integer> weeklywrkhrs=new ArrayList<Integer>();
	private String projectname;
	private Integer tolhrsworked;
	
	public Timesheet(String username, LocalDate startdate, LocalDate enddate, List<Integer> weeklywrkhrs,
			String projectname) {
		super();
		this.username = username;
		
		this.startdate = startdate;
		this.enddate = enddate;
		this.weeklywrkhrs = weeklywrkhrs;
		this.projectname = projectname;
		this.tolhrsworked=0;
		for(Integer i: getWeeklywrkhrs())
		{
			this.tolhrsworked+=i;
		}
		
		
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
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
	public List<Integer> getWeeklywrkhrs() {
		return weeklywrkhrs;
	}
	public void setWeeklywrkhrs(List<Integer> weeklywrkhrs) {
		this.weeklywrkhrs = weeklywrkhrs;
	}
	public String getProjectname() {
		return projectname;
	}
	public void setProjectname(String projectname) {
		this.projectname = projectname;
	}
	public String getId() {
		return Id;
	}
	public void setId(String id) {
		Id = id;
	}
	public Integer getTolhrsworked() {
		return tolhrsworked;
	}
	public void setTolhrsworked(Integer tolhrsworked) {
		this.tolhrsworked = tolhrsworked;
	}
	
	
	
	
	
	
	
	
	
	
	

}
