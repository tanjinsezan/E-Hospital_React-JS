import React,{useState,useEffect} from "react"
import Login from "./Login"
import Header from "./Header"
import Footer from "./Footer"

function Register(){

    useEffect(()=>{
        if(localStorage.getItem('user-info')){
               
        }
    },[])

    const [pname,setpname]=useState("")
    const [dob,setdob]=useState("")
    const [email,setemail]=useState("")
    const [phone,setphone]=useState("")
    const [password,setpassword]=useState("")
    async function signUp(){
        let item={pname,dob,email,phone,password}
        console.warn(item)

        let result = await fetch("http://127.0.0.1:8000/api/patient/add",{
            method: 'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":'application/json',
                "Accept":'application/json'
            }
        })

        result=await result.json()
        console.warn("result",result)
        localStorage.setItem("user-info",JSON.stringify(result))
        return("Patient added successfully");
      
        
}
    
    return(        
       
            <>
            <Header/>
            <div className="col-sm-6 offset-sm-3">
                <h1 align="center">Create HealthID</h1>
                <span>Name</span>
                <input type="text" value={pname} onChange={(e)=>setpname(e.target.value)} className="form-control" placeholder="Enter your name" />
                <br />
                <br />
                <span>Email</span>
                <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} className="form-control" placeholder="Enter your email" />
                <br />
                <br />
                <span>Date of Birth</span>
                <input type="text" value={dob} onChange={(e)=>setdob(e.target.value)} className="form-control" placeholder="Enter your dob" />
                <br />
                <br />
                <span>Phone Number</span>
                <input type="text" value={phone} onChange={(e)=>setphone(e.target.value)} className="form-control" placeholder="Enter your Phone" />
                <br />
                <br />
                <span>Password</span>
                <input type="password" value={password} onChange={(e)=>setpassword(e.target.value)} className="form-control" placeholder="Enter your password" />
                <br />
                <br />
                <button onClick={signUp} className="btn btn-primary">Sign Up</button>

                <Footer/>
            </div>
            </>
       
    )

}
export default Register

