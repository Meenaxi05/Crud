import axios from "axios"
import React, { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import style from "./home.module.css"


const Edituser = () => {
    let[name,setName] = useState("")
    let[salary,setSalary] = useState("")
    let[company,setCompany] = useState("")

    let{index}=useParams()
    let navigator=useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:3000/users/${index}`)
        .then((resp)=>{
            console.log(resp.data)
            setName(resp.data.name)
            setSalary(resp.data.salary)
            setCompany(resp.data.company)

        })
    },[index])



    let nameData=(e)=>{
        e.preventDefault()
        setName(e.target.value)
    }

    let salaryData=(e)=>{
        e.preventDefault()
        setSalary(e.target.value)
    }
    let companyData=(e)=>{
        e.preventDefault()
        setCompany(e.target.value)
    }
    let formHandle=(e)=>{
        e.preventDefault()
        let payload={name,salary,company}
        axios.put(`http://localhost:3000/users/${index}`,payload)
        .then(()=>{
            console.log("DATA HAS BEEN UPDATED");
        })
        navigator("/user")

        
    }

return(
        

<div id={style.myform}>
                <form action="">
                    <br />
                
                    
                    <tr>
                        <th colSpan="2"><h4>Update User Details</h4><br /></th>
                    </tr>
                

                    <tr>
                        <td><label htmlFor="">NAME</label></td>
                        <td>:<input type="text" value={name} onChange={nameData} /></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="">SALARY</label></td>
                        <td>:<input type="text" value={salary} onChange={salaryData} /></td>
                    </tr>

                    <tr>
                        <td><label htmlFor="">COMPANY</label></td>
                        <td>:<input type="text" value={company} onChange={companyData}  /></td>
                    </tr>

                    <tr>
                        <th colSpan="2"><button onClick={formHandle}>Update</button></th>
                    </tr>


                </form>
            
        </div>
    )
}
export default Edituser