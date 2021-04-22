package com.example.demo.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.models.Project;

public interface ProjectRepository extends MongoRepository<Project, String> {
	public Project  findByProjectname(String projectname);
	public void deleteByProjectname(String projectname);

}
