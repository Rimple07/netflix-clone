import React from "react";
import device from "../../assets/device.png"
import "./SignUp.scss"

function CardThird() {
  return (
   
    <div class="w-full flex justify-betweenbg-black text-white pr-12 px-12 pb-12 pt-12 bg-black" >
      <div class="flex items-center  w-full bg-black  px-12 pb-10 mr-12" >
        <div class="text-left  px-12 bg-black" className="first-block-container">
          <h2 class="text-5xl font-black font-white"> Watch everywhere</h2>
          <p class="font-normal text-base font-normal text-2xl w-full">
          Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
          </p>
          <div className="line-one"></div>
        </div>
       
         <div class=" pl-0.375" className="main-screen">
          <div class="relative">
          <img
  src={device}
  class="h-auto max-w-full w-full overflow-clip"
  alt="tv-image"
  className="device-pik" />
           <div class="bg-video" className="video-container-second">
   <video class="bg-video__content object-contain overflow-clip" autoPlay muted loop >
      <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4"/>
   </video>
  
</div>
<div>
   </div>
   <div>

   </div>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default CardThird;
