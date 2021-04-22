import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";
const API_URL1="http://localhost:8080/api/test/";

class AuthService {
  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password,phonenumber,projectassigned,status,role) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
      phonenumber,
      projectassigned,
      status,
      role
    });
  }

  getalldetails()
  {
    return axios.get(API_URL1+'alldetails',
      {
          params:{username:JSON.parse(localStorage.getItem('user')).username}}
      ) 
      .then(response => {
        
        const res=response.data;
          localStorage.setItem("employee", JSON.stringify(response.data));
          
          console.log('helol',response.data.username)
          return response.data;
        })
         .then(data=>{
           console.log("data",data)
           return data;
         }) 
        
      
        //retur JSON.parse(localStorage.getItem("employee"));
        
        // response.data;
      //.then(response=>{
        //return response.data
      //});
      
    }
    
  getall()
  {
    this.getalldetails();
    console.log("getall", localStorage.getItem('user'))
    return localStorage.getItem('employee');
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }

  getAvailEmployees(){
    return axios.get(API_URL1+'getavailableemp')
    .then(response => {
        const resa=response.data;
        localStorage.setItem("allemployee", response.data);
        
        //console.log('all',response.data.username)
        return response.data;
      })
       .then(data=>{
         console.log("data",data)
         return data;
       }) 
  }
  getallAvailableEmployees(){
    this.getAvailEmployees();
    console.log("getallavail", localStorage.getItem('allem'))
    return localStorage.getItem('allemployee');


  }
  gete(){
    return axios.get(API_URL1+'getavailableemp')
  }
  listprojectname(){
    return axios.get(API_URL1+'getprojectnames')
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

}


export default new AuthService();