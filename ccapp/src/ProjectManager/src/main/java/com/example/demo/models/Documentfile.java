
package com.example.demo.models;



import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "projectdocuments")
public class Documentfile {
		@Id
	    private String id;
	    
	    private String title;
	    private Binary file;
	    
	    public Documentfile() {
	    	
	    }
	    
	    public Documentfile(String title) {
			super();
			this.title = title;
		}  
	    public String getId() {
			return id;
		}

		public void setId(String id) {
			this.id = id;
		}

		

		public String getTitle() {
			return title;
		}

		public void setTitle(String title) {
			this.title = title;
		}

		public Binary getFile() {
			return file;
		}

		public void setFile(Binary file) {
			this.file = file;
		}

		
	}
