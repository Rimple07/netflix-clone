import React from "react";
import Wallpaper from "../commonwallpaper/Wallpaper";
import Footer from "../sign-In/Footer";
import netflixlogo from "../../assets/netflix-logos-idcIWizlPG.png";
import Dropdown from "../commonwallpaper/Dropdown";
import "./SignUp.scss";
import SignUpBody from "./SignUpBody";
import CardFirst from "./CardFirst";
import CardSecond from "./CardSecond";
import CardThird from "./CardThird";
import CardFourth from "./CardFourth";
import MapCards from "./MapCards";

function SignUp() {
  return (
    <div>
      <div class="absolute flex w-full flex justify-around">
        <div>
          {" "}
          <img
            className="img-logo1"
            src={netflixlogo}
            alt="netflix-logo"
            style={{ color: "red" }}
          />{" "}
        </div>
        <div class="pt-5 flex gap-12">
          {" "}
          <div style={{ color: "white", border: "solid", height: "56px" }}>
            {" "}
            <Dropdown />
          </div>
          <div class=" text-center lg:text-left">
            <button class=" absolute  h-10 bg-red-700 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-0.75 ">
              Sign In
            </button>
          </div>{" "}
        </div>
      </div>
      <div
        className="flex justify-centre items-start bg-black overflow-hidden"
        style={{ backgroundColor: "#000", height: "45rem" }}
      >
        <div class="opacity-75">
          <Wallpaper />
        </div>
        <div class="absolute w-full pr-12 px-12" id="signup-container">
          {" "}
          <SignUpBody />
        </div>
      </div>{" "}
    
      <div class="w-full border-4" id="divider-first">
        {" "}
      </div>
      <div class="relative flex items-centre justify-centre">
        <CardFirst />
      </div>
      <div id="divider-first2" class="w-full border-4 " >
        {" "}
      </div>
      <div class="flex items-centre justify-centre">
        {" "}
        <CardSecond />
      </div>
      <div id="divider-first3" class="w-full border-4" >
        {" "}
      </div>
      <div class="relative flex items-centre justify-centre">
        {" "}
        <CardThird />
      </div>
      <div id="divider-first4" class="w-full border-4">
        {" "}
      </div>
      <div class="flex items-centre justify-centre">
        {" "}
        <CardFourth />
      </div>
      <div id="divider-first5" class="w-full border-4">
        {" "}
      </div>
      <div> <MapCards/></div>
      <div class="absolute">
        <Footer />
      </div>
    </div>
  );
}

export default SignUp;
