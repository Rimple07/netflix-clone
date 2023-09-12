import React from "react";
import "./SignUp.scss"
import SignupCards from "./SignupCards";

function SignUpBody() {
  return (
    <div class="absolute text-center item-center mb-0">
      <h1 class="mb-4 text-2xl font-black leading-none tracking-tight text-white text-5xl dark:text-white">
        Laughter.Tears.Thrills.Find it all on Netflix.
      </h1>
      <p class="mb-6  font-normal text-white text-2xl  dark:text-gray-400">
        Endless entertainment starts at just ₹ 149. Cancel anytime.
      </p>

      <div class="text-center item-center">
        <label
          for="input-group-1"
          class="block mb-4 text-xl font-large text-white dark:text-white"
        >
          Ready to watch? Enter your email to create or restart your membership.
        </label>
        <div class=" w-full flex justify-center relative mb-6 gap-2">
          <div class="flex w-full absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none "></div>

          <input
            type="text"
            id="input-group-1"
            class="opacity-50 border border-white text-white text-sm rounded-sm focus:ring-white focus:border-white block pl-4 p-2.5  placeholder-white "
            placeholder="Email address"
          />
          <a
            href="#"
            class="flex px-5 py-3 text-2xl font-bold text-center text-white bg-red-600 rounded-sm hover:bg-red-700 focus:ring-4 focus:ring-grey-300 dark:focus:ring-grey-900"
          >
            Get Started
          </a>
        </div>
      
      </div>
      <div className="divider-first" class="w-full"> </div>
  
      </div>
  );
}

export default SignUpBody;
