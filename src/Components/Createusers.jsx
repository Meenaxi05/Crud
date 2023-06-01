import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./home.module.css"


const Createusers=()=>{
    let[name,setName]=useState("")
    let[salary,setSalary]=useState("")
    let[company,setCompany]=useState("")

    let navigator=useNavigate()

    let nameData=(e)=>{
        setName(e.target.value)
    }

    let salaryData=(e)=>{
        setSalary(e.target.value)
    }

    let companyData=(e)=>{
        setCompany(e.target.value)
    }

    let formHandle=(e)=>{
        e.preventDefault()
        let payload={name,salary,company}
        axios.post("http://localhost:3000/users",payload)
        .then(()=>{
            console.log("DATA HAS BEEN ADDED");
        })
        .catch(()=>{
            console.log("SOMTHING IS FISHY");
        })
        navigator("/user")
    }
  return(
        <div id={style.myform}>
                <form action="">
                    <br />
                
                    
                    <tr>
                        <th colSpan="2"><h4>User Detailss</h4><br /></th>
                    </tr>
                

                    <tr>
                        <td><label htmlFor="">NAME</label></td>
                        <td>:<input type="text" value={name} onChange={nameData} /></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="">SALARY</label></td>
                        <td>:<input type="text" value={salary}  onChange={salaryData} /></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="">COMPANY</label></td>
                        <td>:<input type="text" value={company}  onChange={companyData}/></td>
                    </tr>

                    <tr>
                        <th colSpan="2" onClick={formHandle}><button>Submit</button></th>
                    </tr>


                </form>
              </div>
    )
}

export default Createusers