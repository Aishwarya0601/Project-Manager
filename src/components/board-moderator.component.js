import React, { Component } from "react";

import UserService from "../services/user.service";
import AuthService from "../services/auth.service";
//import userService from "../services/user.service";
export default class BoardModerator extends Component {
  constructor(props) {
    super(props);
    this.onChangeProjectassignedupdate=this.onChangeProjectassignedupdate.bind(this);
    this.state = {
      
      availemp:[],
      projectassigned:"",
      projectnames:UserService.getlistprojectname()
    };
  }
  
  onChangeProjectassignedupdate(e) {
    console.log("hij",e.target.value)
    this.setState({
    
      projectassigned: e.target.value
    });
    console.log("after",this.state.projectassigned)
  }
  componentDidMount(){
    AuthService.gete().then((res) => {
      this.setState({availemp: res.data});
  });
  
 

  }
  

  render() {
    const { availemp, projectnames  } = this.state;
    console.log("insidemoderatorproject",projectnames);
    return (
      <div><div>
      <h2 className="text-center"> Employee Name</h2>
      
      <div className="row">
        
          <table className="table table-striped table-bordered">
              <thead>
                  <tr>
                      <th> Name</th>
                      <th> Mail</th>
                      <th> Phonenumber</th>
                      <th> Skillset</th>

                      <th> Actions</th>

                  </tr>
              </thead>
              <tbody>
                  {
                      this.state.availemp.map(
                        availemp =>
                          <tr key={availemp.id}>
                              <td> {availemp.username} </td>
                              <td> {availemp.email} </td>
                              <td> {availemp.phonenumber} </td>
                              <td> {availemp.skillSet.map((emp)=><li>{emp}</li>)}</td>
                             
                             <td>
                               <select  
        onChange={this.onChangeProjectassignedupdate} >
         {projectnames.map(projname => {
           return (
             <option value={projname}> {projname} </option>
             
           )
         })}
         
    </select>
    <button  className="update-btn" onClick={()=> UserService.updateproject(availemp.username,this.state.projectassigned)}>Assign</button>
    </td>

                          </tr>
                      )
                  }
              </tbody>
          </table>
      </div>
  </div></div>
        
      
      
      
    );
  }
}