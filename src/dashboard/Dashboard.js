import React, { useState } from "react";
import netflix from "../assets/Netflix.jpeg";

function Dashboard() {
  return (
    <div
    id="init-by-js"
      class="fixed right-0 mt-0 mx-0 mr-0 my-0 py-1 h-[400px] w-[600px] overflow-hidden shadow-lg ring-black ring-opacity-5 focus:outline-none h-screen bg-cover bg-no-repeat"
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
        backgroundImage: `url("https://m.media-amazon.com/images/M/MV5BNDhlZjFmNDQtODVlMC00OTU0LWE2ZWYtOGU0OTQ3NmE5OGY3XkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_.jpg ")`,
      }}
    ></div>
  );
}

export default Dashboard;
