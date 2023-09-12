import React from "react";
import Wallpaper from "../commonwallpaper/Wallpaper";
import Footer from "../sign-In/Footer";
import netflixlogo from "../../assets/netflix-logos-idcIWizlPG.png";
import Dropdown from "../commonwallpaper/Dropdown";
import "./SignUp.scss";
import SignUpBody from "./SignUpBody";
import SignupCards from "./SignupCards";

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
        style={{ backgroundColor: "#000" , height: "45rem" }}
      >
        <div class="opacity-75">
          <Wallpaper />
        </div>
        <div class="absolute w-full pr-12 px-12" id="signup-container">
          {" "}
          <SignUpBody />{" "}
        </div>
      </div>{" "}
      <div class="relative flex items-centre justify-centre">
        {" "}
        <SignupCards />{" "}
      </div>
      <div class="absolute">
        <Footer />
      </div>
    </div>
  );
}

export default SignUp;
