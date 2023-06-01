import React from "react"
import Homecrude from "./Components/Homecrude"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Createusers from "./Components/Createusers"
import Users from "./Components/Users"
import Edituser from "./Components/Edituser"




const App=()=>{
    return(
        <div>
        <BrowserRouter>
        <Homecrude/>
        <Routes>
            <Route element={<Createusers/>} path="/"/>
            <Route element={<Users/>} path="/user"/>
            <Route element={<Edituser/>} path="/edit/:index"/>
        </Routes>

        </BrowserRouter>
        
        </div>
    )

}

export default App