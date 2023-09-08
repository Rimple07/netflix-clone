import React from "react";
import netflixPik from "../../assets/Netflix.jpeg";
import netflixlogo from "../../assets/netflix-logos-idcIWizlPG.png";
import "./signIn.scss";
import Footer from "./Footer";

function SignIn() {
  return (
    <div>
      <div
        className=" absolute bg-black bg-opacity-50 overflow-hidden"
        style={{ backgroundColor: "#000" }}
      >
          <div className="logo-container">
          <img
            class="h-auto max-w-xs"
            className="img-logo"
            src={netflixlogo}
            alt="netflix-logo"
            style={{color:"red"}}
          />
        </div>
       
        <div
          id="init-by-js"
          class="bg-black bg-opacity-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabindex="-1"
          style={{
            
            width: "100vw",
            height: "100vh",
            minHeight: "100%",
            minWidth: "100%",
            backgroundSize: "cover",
            backgroundImage: `url(${netflixPik})`,
            opacity: "0.5",
          }}
        ></div>

        <Footer />
      </div>{" "}
    </div>
  );
}

export default SignIn;
