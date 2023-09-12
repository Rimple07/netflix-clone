import React from "react";
import netflixPik from "../../assets/Netflix.jpeg";

function Wallpaper() {
  return (
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
        // backgroundSize: "cover",
        backgroundImage: `url(${netflixPik})`,
        opacity: "0.5",
      }}
    ></div>
  );
}

export default Wallpaper;
