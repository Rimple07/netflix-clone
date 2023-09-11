import React from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom"
import SignIn from "../components/sign-In/SignIn";
import Home from "../home/Home";
import SignUp from "../components/sign-up/SignUp";

function Routes1() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/signin" element={<SignIn/>}/>
        <Route index element={<Home/>} />
        <Route exact path="/signup" element={<SignUp/>} />
     
    </Routes>
  </BrowserRouter>  
  )
}

export default Routes1;
