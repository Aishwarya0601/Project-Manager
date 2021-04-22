package com.example.demo.Repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.models.Documentfile;

public interface DocumentfileRepository extends MongoRepository<Documentfile, String> {

}
