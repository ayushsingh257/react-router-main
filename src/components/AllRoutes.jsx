import React from 'react'
import { Route, Routes } from "react-router-dom";
// import Home from '../pages/Home'
import  Contacts from "../pages/Contacts"
import About from "../pages/About";
import Home from '../pages/Home';


const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contacts/>}></Route>
        </Routes>
    )
}

export default AllRoutes