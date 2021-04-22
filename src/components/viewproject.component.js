import React, { Component } from "react";

import UserService from "../services/user.service";
import AuthService from "../services/auth.service";
import { render } from "@testing-library/react";
import Form from "react-validation/build/form";

import Input from "react-validation/build/input";
export default class Viewproject extends Component {
    constructor(props) 
    {
      super(props);
     // this.myFunction=this.bind.myFunction(this);
      this.myFunction = this.myFunction.bind(this);
      this.handlefileupload = this.handlefileupload.bind(this);
      this.state = {
          show:false,
          projectinfo:{},
          userinfo:AuthService.getCurrentUser(),
          projectname:UserService.getprojectnameofleadsalt(),
          projectnameselected:"",
          fileuploaded:null
      };
    }

    handlefileupload(e)
    {
      //console.log("fivalue",e.target.value)
      //console.log("file0",e.target.files[0])
      let file=e.target.files[0]
      let fd=new FormData()
      fd.append('img',file)
      console.log("fd",fd.get('img'))
      console.log("fileupd",e.target.files)
      UserService.uploadfiles(this.state.projectinfo.projectname,fd.get('img'))
    }

    
    
    myFunction() {
      //document.getElementById("panel").style.display = "block";
     // this.setState({show:!this.state.show}) ;

    }   
render()
{
    const {projectname, projectinfo}=this.state
    console.log("prorender",projectinfo)
    return(
        
        <div className="row" >
        <div className="column1">
        
        
         {projectname.map(projname => {
           return (
             <ul ><button className="button-view" onClick={()=>{ 
              
                          //this.state.projectinfo=UserService.getallinfoproject({projname});
                          this.setState({projectinfo:JSON.parse(UserService.getallinfoproject({projname},1))});

                          //.then((res) => 
                          //{
                          //this.setState({projectinfo: res.data});
                          //}
                          //);
                          //console.log("inside",JSON.parse(this.projectinfo));
                          this.setState({show:true}) ;
                          }}>
                    <h4 >{projname}</h4></button>
              </ul>
             
           )
         })}
         
    
        </div>
        
        <div className="column2">
        
        
          <div>
          {
            this.state.show?
            <div className="projectdiv" >
          <div><p className="paragraphcolor"><h2><center>{this.state.projectinfo.projectname}</center></h2></p></div>
             <h5>
               <font color="#0F92A3">

                

                    <br></br>
                   <center><strong>Project Lead</strong></center>
                   
                   <center><small>{this.state.projectinfo.projectlead}</small></center>
                   <br></br>
                   <center><strong>Project Description</strong></center>
                   
                   <center><small>{this.state.projectinfo.projectdescription}</small></center>
                 
                
                   

                   <br></br>
                   <center><strong>Client</strong></center>
                   
                   <center><small>{this.state.projectinfo.client}</small></center>

                   <br></br>
                   <center><strong>Team members</strong></center>
                   
                   <center><small>{this.state.projectinfo.accessmembers.map(team=>{
                     return(
                       <li>{team.username}</li>
                     )
                   })}

                   </small></center>

                   <br></br>
                   <center><strong>Project Start Date</strong></center>
                   
                   <center><small>{this.state.projectinfo.startdate}</small></center>
                 
                   <br></br>
                   <center><strong>Project End Date</strong></center>

                   
                   <center><small>{this.state.projectinfo.enddate}</small></center>
                   <br></br>

                   <center><strong>Project Documentation</strong></center>
                  
                   <br></br>
                   <center><button onClick={()=>{UserService.endproject(this.state.projectinfo.projectname)}}>End</button></center>


                   


                   <Form>
                   <div className="form-group">

                      <center><Input className="form-input"
                        type="File"
                        onChange={this.handlefileupload}
                       
                        
                      /></center>
                    </div>
                    
                   </Form>
                   </font></h5></div>:null
                   
          }
        
        </div>
        </div>
        </div>

    );
}
}