import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import UserService from "../services/user.service";
import AuthService from "../services/auth.service";

export default class BoardUser extends Component {
  constructor(props) {
    super(props);
    this.onChangeStartdate = this.onChangeStartdate.bind(this);
    this.onChangeEnddate = this.onChangeEnddate.bind(this);
    this.onChangeHrs = this.onChangeHrs.bind(this);
    this.handleRegister = this.handleRegister.bind(this);

    this.state = {
      content: "", 
      userinfo:AuthService.getall(),
      projectnames:UserService.getlistprojectname(),
      username:"",
      startdate:null,
      enddate:null,
      weeklywrkhrs:[],
      projectname:""

    };
  }
  

  onChangeStartdate(e) {
    this.setState({username:JSON.parse(this.state.userinfo).username})
    this.setState({projectname:JSON.parse(this.state.userinfo).projectassigned})
    this.setState({
      startdate: e.target.value
    });
  }

  onChangeEnddate(e) {
    this.setState({
      enddate: e.target.value
    });
  }

  onChangeHrs(e) {
    //const target = e.target;
    var value = e.target.value;
        
    
      this.setState(
        { weeklywrkhrs: [...this.state.weeklywrkhrs, value] }
      )
    

  }
  handleRegister(e) {

    e.preventDefault();
   // this.form.validateAll();
    

    if (this.checkBtn.context._errors.length === 0) {
      UserService.savetimesheet(
        
        this.state.username,
        this.state.startdate,
        this.state.enddate,
        this.state.weeklywrkhrs,
        this.state.projectname
        
        
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
    
    const { projectnames,userinfo  } = this.state;
    return (

      <div className="profilediv">
        <div><center><h3>Timesheet</h3></center></div>
        
      <Form
      onSubmit={this.handleRegister}
      ref={c => {
        this.form = c;
      }}
    >
        <div className="form-group">
                <label htmlFor="username" className="form-label">Start Date</label>
                <center><Input className="form-input"
                  type="Date"
                  name="startdate"
                  name="name"
                  onChange={this.onChangeStartdate}
                  
                  

                /></center>
              </div>
              
        <div className="form-group">
                <label htmlFor="username" className="form-label">End Date</label>
                <center><Input className="form-input"
                  type="Date"
                  size="50"
                  
                  name="enddate"
                  onChange={this.onChangeEnddate}

                /></center>
        </div>
        <div className="form-group">
          <center><table>
            <tbody>
              <tr>
                <td><label htmlFor="email" >Day</label></td>
                <td><label htmlFor="email" >ProjectName</label></td>
                <td><center><label htmlFor="email" >Hours</label></center></td>
                
              
              </tr>
              <tr>
              <td><label htmlFor="email" >Monday</label></td>
              
              <td>
              <select>
              <option >Design </option>
             <option >Development </option>
             <option >Testing </option>
         
         </select></td><td>
              <Input className="form-input-user"
                  type="text"
                  name="phonenumber"
                  onChange={this.onChangeHrs}
                />
              </td>
              
              </tr>
              <tr>
              <td><label htmlFor="email" >Tuesday</label></td>
              <td>
              <select>
         
             <option >Design </option>
             <option >Development </option>
             <option >Testing </option>
             
             
           
         
         </select></td>
              <td>
              <Input className="form-input-user"
                  type="text"
                  name="phonenumber"
                  onChange={this.onChangeHrs}
                />
              </td>
              
              
              </tr>
              <tr>
              <td><label htmlFor="email" >Wednesday</label></td>
              <td>
              <select>
              <option >Design </option>
             <option >Development </option>
             <option >Testing </option>
         
         </select></td>
              <td>
              <Input className="form-input-user"
                  type="text"
                 
                  
                  name="phonenumber"
                  onChange={this.onChangeHrs}
                  
                />
              </td>
              
              
              </tr>
              <tr>
              <td><label htmlFor="email" >Thursday</label></td>
              <td>
              <select>
              <option >Design </option>
             <option >Development </option>
             <option >Testing </option>
         
         </select></td>
              <td>
              <Input className="form-input-user"
                  type="text"
                  
                  
                  name="phonenumber"
                  onChange={this.onChangeHrs}
                  
                />
              </td>
            
              </tr>
              <tr>
              <td><label htmlFor="email" >Friday</label></td>
              <td>
              <select>
              <option >Design </option>
             <option >Development </option>
             <option >Testing </option>
         
         </select></td>
              <td>
              <Input className="form-input-user"
                  type="text"
                  
                  name="phonenumber"
                  onChange={this.onChangeHrs}
                  
                />
              </td>
              



              </tr>
            </tbody>
          </table>
          </center>  
             
            </div>  
            <div className="form-group">
                  <button className="form-input-btn">Submit</button>
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