package com.example.demo.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.models.Timesheet;

public interface TimesheetRepo extends MongoRepository<Timesheet, String> {
	public Timesheet findByprojectname(String projectname);
	
}
