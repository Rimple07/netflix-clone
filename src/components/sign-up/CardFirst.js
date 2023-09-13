import React from "react";
import tvimage from "../../assets/ tvImage.png"
import "./SignUp.scss"

function CardFirst() {
  return (
   
    <div class="w-full flex justify-betweenbg-black text-white pr-12 px-12 pb-12 pt-12 bg-black" >
      <div class="flex items-center  w-full bg-black  px-12 pb-10 mr-12" >
        <div class="text-left  px-12 bg-black" className="first-block-container">
          <h2 class="text-5xl font-black font-white"> Enjoy on your TV</h2>
          <p class="font-normal text-base font-normal text-2xl w-full">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
          <div className="line-one"></div>
        </div>
        <div></div>
         <div class=" pl-0.375">
          <div class="relative">
          <img
  src={tvimage}
  class="h-auto max-w-full w-full"
  alt="tv-image" />
           <div class="bg-video" className="video-container">
   <video class="bg-video__content" autoPlay muted loop style={{display:"inline-block", verticalAlign:"baseline"}}>
      <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4"/>
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

export default CardFirst;
