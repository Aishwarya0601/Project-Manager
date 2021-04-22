import axios from 'axios';
import { useState } from 'react';
//import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/api/test/';

class UserService {
  
  authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken };
    } else {
      return {};
    }
  }
  getPublicContent() {
    return axios.get(API_URL + 'all');
  }

  getUserBoard() {
    return axios.get(API_URL + 'user', { headers: this.authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: this.authHeader() });
  }

  getPleadBoard() {
    return axios.get(API_URL + 'plead', { headers: this.authHeader() });
  }
  


  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: this.authHeader() });
  }
  updateskillset(username,skillset){
    console.log(skillset)
    return axios.post(API_URL+'addskillset',{
      username,
      skillset
    })
  }
  createproject(projectname, projectlead,projectdescription, startdate, enddate,client)
  {
    return axios.post(API_URL+'addproject',{
      projectname,
      projectlead,
      projectdescription, 
      
      startdate, 
      enddate,
      client

    })
  }
  updateproject(username,projectassigned){
    return axios.post(API_URL+'updateassignproject', {
      
      username,
      projectassigned,

    })

  }
  listprojectname(){
    return axios.get(API_URL+'getprojectnames')
    .then(response => {
        //const resa=response.data;
        //localStorage.setItem("projectname", response.data);
        return response.data;
      })
       .then(data=>{
         console.log("data",data)
        localStorage.setItem("pr", JSON.stringify(data));
        console.log("pr", localStorage.getItem('pr'))
       
         return data;
       }) 
  }
  getlistprojectname(){
    //console.log("jikk");
    const lt=this.listprojectname();
    
   console.log("getprojectnames", localStorage.getItem('pr'))
    console.log("hi", lt)
    return JSON.parse(localStorage.getItem('pr'));
    //return ['a','b'];

  }
  getprojectnameofprojectlead(){
    return axios.get(API_URL+'getprojectsoflead/'+ JSON.parse(localStorage.getItem('user')).username)
    .then(response => {
      return response.data;
    })
     .then(data=>{
       console.log("data",data)
      localStorage.setItem("projectname", JSON.stringify(data));
       //console.log("pr", localStorage.getItem('pr'))
     
       return data;
     }) 


  }
  getprojectnameofleadsalt(){
    this.getprojectnameofprojectlead()
    console.log( JSON.parse(localStorage.getItem('user')).username)
    console.log("getprojectnames", localStorage.getItem('projectname'))
    return JSON.parse(localStorage.getItem('projectname'));


  }
  getinfoproject(projectname)
  {
    return axios.get(API_URL+'getprojectobject/'+projectname) 
      .then(response => {
        
        const res=response.data;
          
          
          //console.log('proinfo',response.data.username)
          return response.data;
        })
         .then(data=>{
           console.log("prodata",data)
           localStorage.setItem("g2", JSON.stringify(data));
           return data;
         }) 
       
      
    }
    
  getallinfoproject(projectname,fl)
  {
    //console.log("parameter",projectname.projname)
    console.log("project",projectname)
    if (fl==1){
      console.log("inside f 1") ;
    this.getinfoproject(projectname.projname);
    }
    else if(fl==2)
    {
      console.log("inside f 2") ;
      this.getinfoproject(projectname);
    }
    //this.getinfoproject(projectname);
    console.log("getallinfo", localStorage.getItem('g2'))
    return localStorage.getItem('g2');
  }
  uploadfiles(projectname,files)
  {
    console.log("par",files)
    var bodyFormData = new FormData();

    bodyFormData.append('title', projectname);

    bodyFormData.append('image', files); 
    axios
    ({
      method: "post",
      url: API_URL+'filesadd/add',
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" },
    })
  }
  savetimesheet(username,startdate,enddate,weeklywrkhrs,projectname){
    return axios.post(API_URL+'savetimesheet',{
      username,
      startdate,
      enddate,
      weeklywrkhrs,
      projectname
    }
    )
  }
  getpercent(projectname,startdate){
    console.log("projectname",projectname)
    console.log("startdate",startdate)
    return axios.post("http://localhost:8080/api/test/gettimesheets",{
      projectname,
      startdate
    }
    ).then(response => {
        //console.log('proinfo',response.data.username)
        return response.data;
      })
       .then(data=>{
         console.log("progressvalue",data)
         localStorage.setItem("progress", JSON.stringify(data));
         return data;
       }) 
       
  }
  getprogresspercent(projectname,startdate)
  {
      this.getpercent(projectname,startdate);
      console.log(localStorage.getItem("progress"))
      return localStorage.getItem("progress");
  }
  endproject(projectname){
    return axios.post(API_URL+'completeproject/'+projectname
    )
  }
  
  
  
 
  
}

export default new UserService();