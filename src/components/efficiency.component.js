
import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import { CircularProgressbar } from 'react-circular-progressbar';
import CheckButton from "react-validation/build/button";
import UserService from "../services/user.service";
import AuthService from "../services/auth.service";
import 'react-circular-progressbar/dist/styles.css';

export default class efficiency extends Component {
    constructor(props) {
        super(props);
        this.onChangeStartdate = this.onChangeStartdate.bind(this);
        this.onChangeProjectname = this.onChangeProjectname.bind(this);
        this.handlesubmit = this.handlesubmit.bind(this);
       
  
      this.state = {
          userinfo:AuthService.getall(),
          projectname:"",
          startdate:null,
          progressvalue:0,
          projectnamesoflead:UserService.getprojectnameofleadsalt(),
          
          
        };  
      }
      onChangeProjectname(e) {
        
      this.setState({
        projectname: e.target.value
      });
    }

      onChangeStartdate(e) {
          this.setState({projectname:JSON.parse(this.state.userinfo).projectassigned})
        this.setState({
            startdate: e.target.value
        });
      }
   
    
      
      handlesubmit(e) {
        e.preventDefault();
        this.setState({progressvalue:UserService.getprogresspercent(this.state.projectname,this.state.startdate)})
        
      }
      render()
      {
          const{projectnamesoflead}=this.state
          return(
              <div className="profilediv">
                <Form>
                <div className="form-group">
                <label htmlFor="username" className="form-label">Start Date</label>
                <center><Input className="form-input"
                  type="Date"
                  name="startdate"
                  name="name"
                  onChange={this.onChangeStartdate}
                  
                  

                /></center>
              </div>
              <label htmlFor="username" className="form-label">Project Name</label>
              <br></br>
              <select className="customdropdown"  >
              {projectnamesoflead.map(projnamelead => {
            return (
             <option value={projnamelead}  onChange={this.onChangeProjectname}> {projnamelead} </option>
             
           )
         })}
        
    </select>
    <br></br><br></br>
              <div className="form-group">
                  <button className="form-input-btn" onClick={this.handlesubmit}>Submit</button>
                </div>

                
                
                </Form>
                <label htmlFor="username" className="form-label"><h3>Progress so far</h3></label>
                <CircularProgressbar className="customprogressbar" value ={this.state.progressvalue} maxValue="100" text={`${this.state.progressvalue}%`}/>
               
                
              
              </div>




          )
      }

}
