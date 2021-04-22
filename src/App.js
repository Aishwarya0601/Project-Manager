import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import pm1 from "./images/pm1.JPG"
import pm2 from "./images/pm2.JPG"
import pm3 from "./images/pm3.JPG"

import AuthService from "./services/auth.service";
//import UserService from "./services/user.service";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";
import CreateProject from "./components/pcreation.component";
import ViewProjects from "./components/viewproject.component";
import Efficiency from "./components/efficiency.component";
import UserProject from "./components/userproject.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      showPleadBoard:false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    //this.logOut();
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_SLEAD"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
        showPleadBoard:user.roles.includes("ROLE_PLEAD")
       
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
   const { currentUser, showModeratorBoard, showAdminBoard, showPleadBoard } = this.state;
    
    return (
      <div>
      <nav className="navbar navbar-expand navbar-dark navbar-custom">
        <Link to={"/"} className="navbar-brand">
          MyApp
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/homes"} className="nav-link">
              <strong>Home</strong>
            </Link>
          </li>

          {showModeratorBoard && (
            <li className="nav-item">
              <Link to={"/mod"} className="nav-link">
              <strong>Moderator Board</strong>
              </Link>
            </li>
          )}

          {showPleadBoard && (
          <li >
            <li className="nav-item list-custom" >
              <Link to={"/view"} className="nav-link">
              <strong>View</strong>
              </Link>
              
            </li>
            <li className="nav-item list-custom">
            <Link to={"/create"} className="nav-link">
            <strong>Create</strong>
            </Link>
            </li>

            <li className="nav-item list-custom">
            <Link to={"/efficiency"} className="nav-link">
            <strong>Efficiency</strong>
            </Link>
            </li>

          </li>
            
            
            
          )}

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
              <strong>Admin Board</strong>
              </Link>
            </li>
          )}

          {currentUser && !showPleadBoard && (
            
              <li className="nav-item list-custom" >
              <Link to={"/UserProject"} className="nav-link">
              <strong>View</strong>
              </Link>
              
            </li>
            
            
          
          )}

          {currentUser && (
            <li>
            <li className="nav-item list-custom">
              <Link to={"/user"} className="nav-link">
              <strong>User</strong>
              </Link>
            </li>
            
          </li>


            
          
          )}

        

        </div>

        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
              <strong>{currentUser.username}</strong>
              </Link>
            </li>
            
            <li className="nav-item">
              <a href="/homes" className="nav-link" onClick={this.logOut}>
              <strong>LogOut</strong>
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
              <strong>Login</strong>
              </Link>
            </li>
           

            
          </div>
        )}
      </nav>

      
        <Switch>
          
        <Route exact path={["/", "/homes"]} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/profile" component={Profile} />
          <Route path="/user" component={BoardUser} />
          <Route path="/mod" component={BoardModerator} />
          <Route path="/admin" component={BoardAdmin} />
          <Route path="/create" component={CreateProject}/>
          <Route path="/view" component={ViewProjects}/>
          <Route path="/efficiency" component={Efficiency}/>
          <Route path="/userproject" component={UserProject}/>
        </Switch>
     
    


          
      </div>

    );
  }
}

export default App;