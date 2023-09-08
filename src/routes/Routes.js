import React from "react";
import {BrowserRouter, Routes,Route} from "react-router-dom"
import SignIn from "../components/sign-In/SignIn";
import Home from "../home/Home";
import SignUp from "../components/sign-up/SignUp";

function Routes1() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<SignIn/>}>
        <Route index element={<Home/>} />
        <Route path="blogs" element={<SignUp />} />
      </Route>
    </Routes>
  </BrowserRouter>  
  )
}

export default Routes1;
