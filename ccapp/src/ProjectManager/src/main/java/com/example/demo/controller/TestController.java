package com.example.demo.controller;

import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.*;

import com.example.demo.Repository.DocumentfileRepository;
import com.example.demo.Repository.ProjectRepository;
import com.example.demo.Repository.TimesheetRepo;
import com.example.demo.Repository.UserRepository;
import com.example.demo.models.Documentfile;
import com.example.demo.models.ERole;
import com.example.demo.models.EStatus;
import com.example.demo.models.Employee;
import com.example.demo.models.Project;
import com.example.demo.models.Role;
import com.example.demo.models.Timesheet;
import com.example.demo.payload.request.updateProject;
import com.example.demo.payload.request.updateSkillset;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.example.demo.payload.request.addproject;
import com.example.demo.payload.request.gettimesheet;

import java.io.*;
import java.time.LocalDate;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {
	@Autowired
	private UserRepository userrepo;
	@Autowired
	private ProjectRepository prorepo;
	@Autowired
    private DocumentfileRepository docfileRepo;
	@Autowired
    private TimesheetRepo timeRepo;
	@GetMapping("/all")
	public String allAccess() {
		return "Public Content.";
	}
	
	@GetMapping("/user")
	@PreAuthorize("hasRole('USER') or hasRole('SLEAD') or hasRole('ADMIN') or hasRole('PLEAD')")
	public String userAccess() {
		
		
		List<String> mylist=new ArrayList<String>();
		mylist.add("add");
		Employee updateemployee = userrepo.findByUsername("admin2"); // fetching a document that you want to update the field
		updateemployee.setSkillSet(mylist); // setting the new value to the field myField
		userrepo.save(updateemployee); // saving (It basically updates the document) the updated document 
		return "User Content.";
	}
	
	@PostMapping("/addskillset")
	public void addskillset(@RequestBody updateSkillset skillset )	{
		
		Employee updateemployee = userrepo.findByUsername(skillset.getUsername()); 
		List<String> existingskills=updateemployee.getSkillSet();
		List<String> newskills=skillset.getSkillset();
		
		for(String s: newskills) {
			existingskills.add(s);
		}
		Set<String> hSet = new HashSet<String>(existingskills);
        hSet.addAll(existingskills);
        List<String> finallist=new ArrayList<String>();
        finallist.addAll(hSet);
        System.out.println(hSet);
        System.out.println(finallist);
        
        
		updateemployee.setSkillSet(finallist); 
		userrepo.save(updateemployee); 
		
	}
	@GetMapping("/alldetails")
	public Employee getalldetails(@RequestParam String username) {
		Employee detailsofemployee = userrepo.findByUsername(username); 
		return detailsofemployee;
		
	}
	
	
	@GetMapping("/mod")
	@PreAuthorize("hasRole('SLEAD')")
	public String moderatorAccess() {
		return "Moderator Board.";
	}
	
	@GetMapping("/plead")
	@PreAuthorize("hasRole('PLEAD')")
	public String projectAccess() {
		return "Project Board.";
	}
	
	@GetMapping("/admin")
	@PreAuthorize("hasRole('ADMIN')")
	public String adminAccess() {
		
		return "Admin Board.";
	}
	@GetMapping("/getavailableemp")
	
	public List<Employee> showavailabledetails()
	{
		List<Employee> listemp1=userrepo.findAll();
		List<Employee> listempavail=new ArrayList<Employee>();
		for (Employee e : listemp1)   
		{  
			
			if (e.getStatus()==EStatus.AVAILABLE  )  {
				Set<Role> newlist=e.getRole();
				System.out.println(newlist);
				if ((newlist.isEmpty()==false))
				{
					for (Role r : newlist) {
						if (r!=null)
						{
							if (r.getName()!=ERole.ROLE_ADMIN && r.getName()!=ERole.ROLE_PLEAD && r.getName()!=ERole.ROLE_SLEAD)
							{
								System.out.println("tru");
								listempavail.add(e);
							}
						}
					
						}
				}
				
				
				
			}
		   
		}  
		return listempavail;
		 
	}
	@PostMapping("/updateassignproject")
	public void updateproject(@RequestBody updateProject project )	{
		
		Employee updateemployeepro = userrepo.findByUsername(project.getUsername());
		updateemployeepro.setProjectassigned(project.getProjectassigned()); 
		updateemployeepro.setStatus(EStatus.UNAVAILABLE);
		userrepo.save(updateemployeepro); 
		Project updatedproject=prorepo.findByProjectname(project.getProjectassigned());
		List<Employee> existingteam=new ArrayList<Employee>();
		existingteam=updatedproject.getAccessmembers();
		existingteam.add(updateemployeepro);
		updatedproject.setAccessmembers(existingteam);
		prorepo.save(updatedproject);
	
	}
	@PostMapping("/addproject")
	public void addproject(@RequestBody  addproject project )	 {
		Project newproject=new Project(project.getProjectname(),project.getProjectlead(),project.getProjectdescription(), project.getStartdate(), project.getEnddate(),project.getClient());
		prorepo.save(newproject); 
	}
	@GetMapping("/getprojectnames")
	
	public List<String> getprojectname()
	{
		List<Project> prolist1=prorepo.findAll();
		List<String> prolist2=new ArrayList<String>();
		for (Project e : prolist1)   
		{  
			
			prolist2.add(e.getProjectname());
			
		   
		}  
		return prolist2;
		 
	}
	@GetMapping("/getprojectsoflead/{plead}")
	
	public List<String> getprojectnamesoflead(@PathVariable("plead") String projectlead)
	{
		
		List<Project> prolist1=prorepo.findAll();
		List<String> prolist2=new ArrayList<String>();
		for (Project e : prolist1)   
		{  
			
			if (e.getProjectlead().equals(projectlead)) {
				System.out.println("helloin");
			prolist2.add(e.getProjectname());
			}
			
		   
		} 
		
		return prolist2;
		 
	}
	
	@GetMapping("/getprojectobject/{proname}")
	public Project getprojectobject(@PathVariable("proname") String projectname)
	{
		return prorepo.findByProjectname(projectname);
	}
	
    @PostMapping("/filesadd/add")
    public String addPhoto(@RequestParam("title") String title, 
      @RequestParam("image") MultipartFile file, Model model) 
      throws IOException {
    	Documentfile docfile = new Documentfile(title); 
    	docfile.setFile(new Binary(BsonBinarySubType.BINARY, file.getBytes())); 
    	docfile = docfileRepo.insert(docfile); 
    	String id= docfile.getId(); 
        //String id = photoService.addPhoto(title, image);
        return "redirect:/photos/" + id;
    }
    @GetMapping("/file/{id}")
    public String getPhoto(@PathVariable String id, Model model) {
        Documentfile docfile = docfileRepo.findById(id).get(); 
        model.addAttribute("title", docfile.getTitle());
        model.addAttribute("image", 
          Base64.getEncoder().encodeToString(docfile.getFile().getData()));
        return "photos";
    }
    @PostMapping("/savetimesheet")
    public String addtimesheet(@RequestBody Timesheet Tmsheet)
    {
    	timeRepo.save(Tmsheet);
    	return "success";
    }
    @PostMapping("/gettimesheets")
    public int gettimesheetprojectwise(@RequestBody gettimesheet gttimesheet)
    {
    	Integer totalhoursworked=0;
    	
    	List<Timesheet> resulttimesheets=timeRepo.findAll();
    	List<Timesheet> finaltimesheets=new ArrayList<Timesheet>();
    	for(Timesheet t: resulttimesheets) 
    	{
    		System.out.println(t.getStartdate());
    		System.out.println(gttimesheet.getStartdate());
    		
    		if (t.getProjectname().equals(gttimesheet.getProjectname()) && t.getStartdate().equals(gttimesheet.getStartdate()) )
    		{
    			
    			finaltimesheets.add(t);
    			totalhoursworked+=t.getTolhrsworked();
    		}
    		
    	}
    	//return resulttimesheets;
    	Project p=prorepo.findByProjectname(gttimesheet.getProjectname());
    	int n=p.getAccessmembers().size();
    	int eh=n*8*5;
    	int percent ;
    	percent=(totalhoursworked*100)/eh;
    	System.out.println(percent);
    	System.out.println(eh);
    	System.out.println(totalhoursworked);
    	return percent;
    }
    @GetMapping("/projectexists")
    public String projectexists(@RequestParam("projectname") String projectname)
    {
    	
    	
    	Project p= prorepo.findByProjectname(projectname);
    	if (p==null)
    	{
    		return "Absent";
    	}
    	else
    	{
    		return "Present";
    	}
    	//return p;
    }
    @GetMapping("/returnhello")
    public String testfunction() {
    	return "Hello World!";
    }
    @PostMapping("/completeproject/{projectname}")
    public void completeproject(@PathVariable("projectname") String projectname)
    {
    	Project p=prorepo.findByProjectname(projectname);
    	
    	List<Employee> teammembers=p.getAccessmembers();
    	for(Employee e: teammembers) {
    		Employee e2=userrepo.findByUsername(e.getUsername());
    		e2.setStatus(EStatus.AVAILABLE);
    		e2.setProjectassigned(null);
    		userrepo.save(e2);
    	}
    	//List<Employee> resulttimesheets=timeRepo.findAll();
    	
    	prorepo.deleteByProjectname(projectname);
    	
    }
    
	
	
	
}