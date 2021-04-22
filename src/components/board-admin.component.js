

import UserService from "../services/user.service";
import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../services/auth.service";
import edp2 from "../images/edp2.png"
const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger c1" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger c1"  role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger c1" role="alert">
        Username must be between 3 and 20 chars.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger c1" role="alert">
        Password must be between 6 and 40 chars.
      </div>
    );
  }
};

const vphonenumber = value => {
  if (value.length != 10) {
    return (
      <div className="alert alert-danger c1" role="alert">
        This is not a valid phonenumber.
      </div>
    );
  }
};

export default class BoardAdmin extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePhonenumber=this.onChangePhonenumber.bind(this);
    this.onChangeProjectassigned=this.onChangeProjectassigned.bind(this);
    this.onChangeStatus=this.onChangeStatus.bind(this);
    this.onChangeRole=this.onChangeRole.bind(this);
    

    this.state = {
      username: "",
      email: "",
      password: "",
      phonenumber:"",
      projectassigned:"",
      status:"",
      role:[],
      successful: false,
      message: "",
      content:"",
      projectnames:UserService.getlistprojectname()
    };

    
  
  }
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangePhonenumber(e) {
    this.setState({
      phonenumber: e.target.value
    });
  }
  onChangeProjectassigned(e) {
    this.setState({
      projectassigned: e.target.value
    });
  }
  onChangeStatus(e) {
    this.setState({
      status: e.target.value
    });
  }
  onChangeRole(e) {
    const target = e.target;
        var value = target.value;
        
        if(target.checked){
          this.setState(
            { role: [...this.state.role, value] }
          )
        }

  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.email,
        this.state.password,
        this.state.phonenumber,
        this.state.projectassigned,
        this.state.status,
        this.state.role
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }
  
  componentDidMount() {
    UserService.getAdminBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    const{projectnames}=this.state;
    return (
        
        <div className=" card1 ">
          <img
            src={edp2}
            alt="profile-img"
            className="profile-img-card"
          />

          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username" className="form-label">Username</label>
                  <center><Input className="form-input"
                    type="text"
                    size="50"
                    
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}

                  /></center>
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label"><center>Email</center></label>
                  <center><Input className="form-input"
                    type="text"
                    size="50"
                    
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  /></center>
                </div>

                <div className="form-group">
                  <label htmlFor="password" className="form-label"><center>Password</center></label>
                  <center><Input className="form-input"
                    type="password"
                    size="50"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  /></center>
                </div>
                <div className="form-group">
                  <label htmlFor="phonenumber" className="form-label"><center>Phonenumber</center></label>
                  <center><Input className="form-input"
                    type="text"
                    size="50"
                    
                    name="phonenumber"
                    value={this.state.phonenumber}
                    onChange={this.onChangePhonenumber}
                    validations={[required, vphonenumber]}
                    
                  /></center>
                </div>
                
                <div className="form-group">
                  <label htmlFor="status" className="form-label"><center>Status</center></label>
                  <div onChange={this.onChangeStatus}>
                  <input type="radio" value="Available" name="status" className="form-inputs"  /> Available<br></br>
                  <input type="radio" value="Unavailable" name="status" className="form-inputs" /> Unavailable
        
      </div>
      <div className="form-group">
                  <label htmlFor="projectassigned" className="form-label"><center>ProjectAssigned</center></label>
                  <br></br> 
                  <select className="customdropdown"  >
              {projectnames.map(projname => {
            return (
             <option value={projname}  onChange={this.onChangeProjectassigned}> {projname} </option>
             
           )
         })}
        
    </select>
    
                </div>
                </div>
                <div className="form-group">
                  <div class="form-row">
                            <div class="form-group col-md-6">
                                <label className="form-label" >Roles</label>
                                <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" name="hobbies" id="inlineCheckboxh1" value="admin" className="form-inputs-c" onChange={this.onChangeRole} />Admin
                                    
                                    </div>
                                    <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" name="hobbies" id="inlineCheckboxh1" value="user" className="form-inputs-c" onChange={this.onChangeRole} />User
                                    
                                    </div>
                                    <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" name="hobbies" id="inlineCheckboxh1" value="staffinglead" className="form-inputs-c" onChange={this.onChangeRole} />Staffing Lead
                                    
                                    </div>
                                    <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" name="hobbies" id="inlineCheckboxh1" value="projectlead" className="form-inputs" onChange={this.onChangeRole} />Project Manager
                                    
                                    </div>

                                      </div>
                                    </div>
                </div>
                
                <div className="form-group">
                  <button className="form-input-btn">Sign Up</button>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="profilediv">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success c2 "
                      : "alert alert-danger c2"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
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