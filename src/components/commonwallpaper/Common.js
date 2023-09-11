import React from "react";
import netflixlogo from "../../assets/netflix-logos-idcIWizlPG.png";
import Footer from "../sign-In/Footer";
import Wallpaper from "./Wallpaper";

function CommonWallpaper() {
  return (
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
          style={{ color: "red" }}
        />
      </div>
      <div>
        {" "}
        <Wallpaper />
      </div>
      <div>
        {" "}
        <Footer />
      </div>
    </div>
  );
}

export default CommonWallpaper;
