import React from "react";
import mobilepik from "../../assets/mobilepik.jpeg";
import blockImage from "../../assets/boxshot (1).png";
import "./SignUp.scss";

function CardSecond() {
  return (
    <div class="w-full flex justify-betweenbg-black text-white pt-12   px-12 pb-12 bg-black " >
      <div class="flex flex-row-reverse items-center  w-full bg-black  px-12 pb-10"  >
        <div
          class="text-left bg-black " className="first-block-container1"
        >
          <h2 class="text-5xl font-black font-white">
            {" "}
            Download your shows to watch offline
          </h2>
          <p class="font-normal text-base font-normal text-2xl w-full">
            Save your favourites easily and always have something to watch
          </p>
          <div className="line-one"></div>
        </div>
        <div></div>
        <div class=" pl-0.375">
          <div class="relative">
            <img
              src={mobilepik}
              class="h-auto max-w-full w-full"
              alt="tv-image"
            />
            <div className="blockImage-mainContainer">
              <div className="blockImage-container">
                <img
                  src={blockImage}
                  class="max-w-full w-full"
                  alt="block-image"
                  className="block-image"
                />
              </div>
              <div className="stranger-container">
                <div class="text-base font-medium text-white">Stranger Things</div> 
               <div class=" text-sm font-normal" className="blue-label">Stranger Things</div>
              </div>
          
            <div className="download-gif-container"> </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSecond;
