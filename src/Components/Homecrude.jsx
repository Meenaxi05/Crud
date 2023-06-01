import React from "react";
import style from "./home.module.css"
import { Link } from "react-router-dom";

const Homecrude=()=>{
    return(
        <section id={style.nav}>
            <Link to="/">CREATE-USERS</Link>
            <Link to="/user">USERS</Link>
        </section>
    )
}
        
export default Homecrude