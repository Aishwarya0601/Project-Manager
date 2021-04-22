package com.example.demo.payload.request;
import java.util.*;
public class updateSkillset {
	private String username;
	private List<String> skillset=new ArrayList<String>();
	
	public updateSkillset() {}
	public updateSkillset(String username, List<String> skillset) {
		super();
		this.username = username;
		this.skillset = skillset;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public List<String> getSkillset() {
		return skillset;
	}
	public void setSkillset(List<String> skillset) {
		this.skillset = skillset;
	}
	

}
