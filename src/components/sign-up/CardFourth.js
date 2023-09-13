import React from "react";
import childrenpik from "../../assets/children pik.png"
import "./SignUp.scss";

function CardFourth() {
  return (
    <div class="w-full flex justify-betweenbg-black text-white  pt-12  px-12 pb-12 bg-black " >
      <div class="flex flex-row-reverse items-center  w-full bg-black  px-12 pb-10"  >
        <div
          class="text-left bg-black " className="first-block-container1"
        >
          <h2 class="text-5xl font-black font-white">
            {" "}
            Create profiles for kids
          </h2>
          <p class="font-normal text-base font-normal text-2xl w-full">
          Send children on adventures with their favourite characters in a space made just for them—free with your membership.
          </p>
          <div className="line-one"></div>
        </div>
        <div></div>
        <div class=" pl-0.375">
          <div class="relative">
            <img
              src={childrenpik}
              class="h-auto max-w-full w-full"
              alt="tv-image"
            />
       
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardFourth;
