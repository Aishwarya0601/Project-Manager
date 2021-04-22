import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import userService from "../services/user.service";
import AuthService from "../services/auth.service";

const required = value => {
    if (!value) {
      return (
        <div className="alert alert-danger c1" role="alert">
          This field is required!
        </div>
      );
    }
  };
export default class pcreation extends Component {
    constructor(props) {
        super(props);
        this.handleaddproject = this.handleaddproject.bind(this);
        this.onChangeProjectname = this.onChangeProjectname.bind(this);
       // this.onChangeProjectlead = this.onChangeProjectlead.bind(this);
        this.onChangeProjectDescription = this.onChangeProjectDescription.bind(this);
        this.onChangeClient=this.onChangeClient.bind(this);
        this.onChangeStartdate = this.onChangeStartdate.bind(this);
        this.onChangeEnddate=this.onChangeEnddate.bind(this);
  
      this.state = {
          projectname:"",
         // projectlead: "",
          projectdescription: "",
          client:"",
          startdate: null,
          enddate:null,
          currentUser: AuthService.getCurrentUser()
          
        };  
      }
      onChangeProjectname(e) {
        
        this.setState({
          projectname: e.target.value
        });
      }
   
    
      onChangeProjectDescription(e) {
        this.setState({
          projectdescription: e.target.value
        });
      }
      onChangeClient(e) {
        this.setState({
          client: e.target.value
        });
      }
      onChangeStartdate(e) {
        this.setState({
          startdate: e.target.value
        });
      }
    
      onChangeEnddate(e) {
        this.setState({
          enddate: e.target.value
        });
      }
      handleaddproject(e) {
        e.preventDefault();
    
        
    
        
    
        if (this.checkBtn.context._errors.length === 0) {
          userService.createproject(
            this.state.projectname,
            this.state.currentUser.username,
            this.state.projectdescription,
            
            this.state.startdate,
            this.state.enddate,
            this.state.client
            
          ).then(
            response => {
             
            },
            error => {
              const resMessage =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
    
              
            }
          );
        }
      }

    render() {
        
        return (
            <div className="profilediv">
            <Form
            onSubmit={this.handleaddproject}
            ref={c => {
              this.form = c;
            }}
            >
              <br></br><br></br><br></br><br></br>
              
              <div className="form-group">
                
                      <label htmlFor="username" className="form-label">Project Name</label>
                      <center><Input className="form-input"
                        type="text"
                        size="50"
                        
                        name="name"
                        value={this.state.projectname}
                        onChange={this.onChangeProjectname}
                        validations={[required]}
    
                      /></center>
            </div>
           
                    <div className="form-group">
                      <label htmlFor="email" className="form-label"><center>Project Description</center></label>
                      <center><Input className="form-input"
                        type="text"
                        size="50"
                        
                        name="email"
                        value={this.state.projectdescription}
                        onChange={this.onChangeProjectDescription}
                        validations={[required]}
                      /></center>
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label"><center>Project Client</center></label>
                      <center><Input className="form-input"
                        type="text"
                        size="50"
                        
                        name="client"
                        value={this.state.client}
                        onChange={this.onChangeClient}
                        validations={[required]}
                      /></center>
                    </div>
                    <div className="form-group">
                      <label htmlFor="phonenumber" className="form-label"><center>Start Date</center></label>
                      <center><Input className="form-input"
                        type="Date"
                        size="50"
                        
                        name="phonenumber"
                        value={this.state.startdate}
                        onChange={this.onChangeStartdate}
                        validations={[required]}
                        
                      /></center>
                    </div>
                    <div className="form-group">
                      <label htmlFor="phonenumber" className="form-label"><center>End Date</center></label>
                      <center><Input className="form-input"
                        type="Date"
                        size="50"
                        
                        name="phonenumber"
                        value={this.state.enddate}
                        onChange={this.onChangeEnddate}
                        validations={[required]}
                        
                      /></center>
                    </div>
                    
                    <div className="form-group">
                      <button className="form-input-btn">Add Project</button>
                    </div>
                    <CheckButton
                  style={{ display: "none" }}
                  ref={c => {
                    this.checkBtn = c;
                  }}
                />
    
          </Form>
          
            </div>    
          );
    }

}