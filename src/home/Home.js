import React from "react";
import "./home.scss";
import Navbar from "../components/Navbar";
import Dashboard from "../dashboard/Dashboard";

function Home() {
  return(  <div className="home-container overflow-x-scroll ">
  <Navbar />
  <Dashboard/>
</div>)
 
}

export default Home;
