package com.example.demo;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.*;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.Repository.ProjectRepository;
import com.example.demo.controller.TestController;
import com.example.demo.models.Project;

public class testing {
	@Autowired
	private ProjectRepository prorepo;
	@InjectMocks
    private TestController testController;

    @Mock
    private ProjectRepository proRepository;

    
	@Test
    public void testController() {
        TestController testController = new TestController();
        String result = testController.testfunction();
        assertEquals(result, "Hello World!");
    }
	@Test
	public void projectexiststest() {
		MockitoAnnotations.initMocks(this);
		
		
		//TestController testController = new TestController();
		String result=testController.projectexists("GlobalDeals");
		assertEquals(result, "Absent");
	}
	

}
