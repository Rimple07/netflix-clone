import React from "react";
import Wallpaper from "../commonwallpaper/Wallpaper";
import Footer from "../sign-In/Footer";
import netflixlogo from "../../assets/netflix-logos-idcIWizlPG.png";
import Dropdown from "../commonwallpaper/Dropdown";
import "./SignUp.scss";

function SignUp() {
  return (
    <div
      className="flex bg-black bg-opacity-100 overflow-hidden"
      style={{ backgroundColor: "#000" }}
    >
      <div class="absolute flex w-full flex justify-around">
        <div>
          {" "}
          <img
            // class="h-auto"
            className="img-logo1"
            src={netflixlogo}
            alt="netflix-logo"
            style={{ color: "red" }}
          />{" "}
        </div>

        <div style={{ color: "white" }}>
          {" "}
          <Dropdown />
        </div>
        <div class="text-center lg:text-left border-4 " style={{backgroundColor: "red"}}>
          <button
            type="button"
            class="inline-block rounded bg-primary border-solid border-indigo-500  px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white "
            data-te-ripple-init
            data-te-ripple-color="light"
          
         
          >
            Sign In
          </button>
        </div>
      </div>

      <div>
        <Wallpaper />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default SignUp;
