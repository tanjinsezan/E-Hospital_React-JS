import React, {useState, userEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from './Footer'

const Login = ()=>{
    let[token, settoken]= useState("");
    let[email, setemail] = useState("");
    let[password, setpassword] =useState("");
    const navigate = useNavigate();

    const loginSubmit= ()=>{
        var obj = {email,password};
        alert (obj.email, obj.password);
        axios.post("http://127.0.0.1:8000/api/admin/AdminLogin",obj)
        .then(resp=>{
            alert (resp.data);
            var token = resp.data;
            console.log(token);
            var user = {pid: token.pid, access_token:token.token};
            localStorage.setItem('user',JSON.stringify(user));
            console.log(localStorage.getItem('user'));
            if (token == ""){
                navigate('/login');
            }
            else{
                navigate('/Patient')
            }
        }).catch(err=>{
            console.log(err);
        });


    }
      return (
    <>
    <div className="col-sm-6 offset-sm-3">
      <Header/>
      <h1 align="center">Login page</h1>
      <div className="col-sm-6 offset-sm-3">
         <input type="text" placeholder="Email" onChange={(e)=>setemail(e.target.value)} className="form-control"/> <br/>
         <input type="password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)} className="form-control"/> <br/>
         <button onClick={loginSubmit} className="btn btn-primary">Login</button>
      </div>
      
    </div>
    </>
  )
}
export default Login;