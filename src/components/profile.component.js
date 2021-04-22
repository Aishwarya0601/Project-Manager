import React, { Component } from "react";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import { Switch, Route, Link } from "react-router-dom";
import Home from "../components/home.component";
import userService from "../services/user.service";
import authService from "../services/auth.service";
import axios from "axios";
import emailicon  from "../images/mailcon.JPG";
import phone  from "../images/phoneicon.JPG";
import usern  from "../images/usern.png";
import edp2 from "../images/edp2.png"
import projecticon from "../images/projecticon.JPG"
import statusicon from "../images/statusicon.JPG"
import roleicon from "../images/roleicon.JPG"
import skillicon from "../images/skillicon.JPG"
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.myFunction = this.myFunction.bind(this);
    this.onChangeSkill = this.onChangeSkill.bind(this);
    this.updateskillset1 = this.updateskillset1.bind(this);

    this.state = {
      show:false,
      currentUser: AuthService.getCurrentUser(),
      userinfo:AuthService.getall(),
      skillset:[]

     // userinfo: AuthService.getalldetails()
     
    };
  }
   myFunction() {
     console.log("hi everybody")
    var x = document.getElementById("myDIV");
    if (x.display === "none") {
      x.display = "block";
    } else {
      x.display = "none";
    }
  }
  onChangeSkill(e) {
    const target = e.target;
    var value = target.value;
        
    if(target.checked){
      this.setState(
        { skillset: [...this.state.skillset, value] }
      )
    }

  }
  updateskillset1()
  {
    this.setState({show:!this.state.show})
    //UserService.updateskillset("admin2",["f","e"]);

  }
   //componentDidMount()
  //{
    
    //const url = "http://localhost:8080/api/test/alldetails?username=admin2";
    //const response =  fetch(url);
    //const data = response.json();
    //this.setState({ userinfo: data });
   // fetch("http://localhost:8080/api/test/alldetails?username=admin2")
     //       .then(response => response.json())
       //     .then(result => {
         //       this.setState({users: result, isFetching: false})
 // }
 // }
 //componentDidMount() {
  // fetch the project name, once it retrieves resolve the promsie and update the state. 
  //axios.get("http://localhost:8080/api/test/alldetails?username=admin2").then(result => this.setState({
    //phno:result
 // }))

  render() {

    const { currentUser,userinfo} = this.state;
    //const userinfo=AuthService.getalldetails();
    //const userinfo2=AuthService.getall();
     
    console.log("userinfo2",JSON.parse(userinfo).email);
    //console.log("hipros",Promise.resolve(userinfo).then(function f3(a){return a.email}));
    //var asd=Promise.resolve(userinfo);
    //asd.then(function f1(a){
    //this.setState({
    // phno: userinfo
      //});
     //global.dfg=a.email;
      //console.log(a.phonenumber)
      //console.log("ullale",global.dfg)
      
    //})
   //console.log("jkk",userinfo)
    return (
      <div className="profilediv">
      <div className="profiledivcenter">
      <img src={edp2} style={{
                  position: 'absolute',
                  top: 20,
                  left: 30, 
                }} width="95" height="95"  ></img>
                <div className="rectange"><font className="profilenametext">{currentUser.username}</font></div>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        
       
       <div className="contactdetails"> 
        <table>
        <tr>
        
          <td>
            <img src={emailicon} width="45" height="35"  ></img>
          </td>
          <td>
            <font color= "#108FAB" size="5"><b>Email</b></font>
          </td>
          <td><font color= "#108FAB" size="5">&nbsp;{currentUser.email}</font></td>
        
        </tr>
        
        
        <tr>
        <td><img src={phone} width="35" height="35" ></img>
          </td>
          <td>
            <font color= "#108FAB" size="5"><b>Phonenumber</b></font>
          </td>
          <td className="profiletext"><font color= "#108FAB" size="5">&nbsp;{JSON.parse(userinfo).phonenumber}</font></td>
        </tr>
        </table>
        </div>
        <br></br><br></br><br></br><br></br>
        
        <div className="projectdetails"> 
        <table>
        <tr>
        
          <td>
            <img src={projecticon} width="45" height="35"  ></img>
          </td>
          <td>
            <font color= "#108FAB" size="5"><b>Project&nbsp;Assigned</b></font>
          </td>
          <td><font color= "#108FAB" size="5">&nbsp;{JSON.parse(userinfo).projectassigned}</font></td>
        
        </tr>
        
        
        <tr>
        <td><img src={statusicon} width="35" height="35" ></img>
          </td>
          <td>
            <font color= "#108FAB" size="5"><b>Status</b></font>
          </td>
          <td className="profiletext"><font color= "#108FAB" size="5">&nbsp;{JSON.parse(userinfo).status}</font></td>
        </tr>
        </table>
        <br></br>
        <table>
          <tr>
        <td><img src={roleicon} width="35" height="35" ></img>
          </td>
          <font color= "#108FAB" size="5"><b>Roles</b></font>
        </tr>
       <tr>
        <td></td>
        
        <td className="profiletext"><font color= "#108FAB" size="4"><ul>
        
          {currentUser.roles &&
            currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
        </ul></font>
        </td>
        </tr>
        </table>

        <table>
          <tr>
        <td><img src={skillicon} width="35" height="35" ></img>
          </td>
          <font color= "#108FAB" size="5"><b>Skillset</b></font>
        </tr>
       <tr>
        <td></td>
        
        <td className="profiletext"><font color= "#108FAB" size="4">{JSON.parse(userinfo).skillSet.map((skill) => <li>{skill}</li>)}</font>
        </td>
        </tr>
        </table>



        </div>


        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <div className="skillsetclass">
              {
                  this.state.show? <div>                  
                    <font className="profiletext">
                      <h3>Add skillset</h3>

                  <input   type="checkbox" name="skills" className="form-input-c" style={{width:"30px"}}  value="C"  onChange={this.onChangeSkill} />C<br></br>
                  <input   type="checkbox" name="skills" className="form-input-c" style={{width:"30px"}}  value="C++"  onChange={this.onChangeSkill} />C++<br></br>
                  <input   type="checkbox" name="skills" className="form-input-c" style={{width:"30px"}}  value="Java"  onChange={this.onChangeSkill} />Java<br></br>
                  <input   type="checkbox" name="skills" className="form-input-c" style={{width:"30px"}}  value="Python"  onChange={this.onChangeSkill} />Python<br></br>
                  <input   type="checkbox" name="skills" className="form-input-c" style={{width:"30px"}}  value="R"  onChange={this.onChangeSkill} />R<br></br>
                  </font>
                  <button className="smallbutton" onClick= {()=>UserService.updateskillset(currentUser.username,this.state.skillset)} >Confirm</button></div> : null
              }
              
              <button className="button" onClick={()=>{this.setState({show:!this.state.show}) ;}}><span>{ this.state.show? 'Update' : 'Add'} </span></button>
              
          </div>
      <Switch>
          
        <Route exact path={["/", "/homes"]} component={Home} />
          
        </Switch>
      </div>
        
      </div>
      
      




    );
  }
}