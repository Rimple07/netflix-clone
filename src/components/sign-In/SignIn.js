import React from "react";
import CommonWallpaper from "../commonwallpaper/Common";
import "./signIn.scss";
import Footer from "./Footer";

function SignIn() {
  return (
    <div>
      <div className="component-containers">
        <CommonWallpaper />
      </div>

      <div className="form-main-container">
        {" "}
        <div class=" absolute pt-40 ps-35 " id="form-sub-container">
          <div class=" flex flex-col" className="form-container">
            <form
              class="bg-black bg-opacity-75 shadow-md rounded px-8 pt-6 pb-8 mb-4"
              style={{ height: "75vh", width: "55vh" }}
              id="form-toogle"
            >
              <label
                class="block text-white text-lg font-bold mb-5"
                for="username"
                className="signIn-label"
              >
                Sign In
              </label>

              <div className="input-container">
                <input
                  class=" appearance-none  rounded text-#8c8c8c leading-tight focus:outline-none"
                  type="text"
                  placeholder="Email or phone number"
                  className="form-input"
                />
                <p class="text-orange-500 text-xs italic">
                  Please enter a valid email address or phone number.
                </p>
              </div>
              <div className="input-container">
                <input
                  class="appearance-none  rounded  leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Password"
                  className="form-input"
                />
                <p class="text-orange-500 text-xs italic">
                  Your password must contain between 4 and 60 characters.
                </p>
              </div>
              <div>
                <button
                  class="text-white font-bold  rounded w-full py-4 px-2 text-white-700 mb-5 rounded focus:outline-none focus:shadow-outline"
                  id="sign-in-btn"
                >
                  Sign In
                </button>
              </div>

              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-6 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 "
                      required=""
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="remember"
                      class="text-gray-500"
                      className="font-color"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  className="font-color"
                >
                  Need Help?
                </a>
              </div>

              <div>
                <div class="flex text-align: end " className="new-signIn">
                  {" "}
                  <p
                    class="text-center text-gray-500 text-xs"
                    className="new-netflix-container"
                  >
                    New to Netflix?{" "}
                  </p>
                  <p
                    class="text-center text-grey-500 text-lg"
                    className="sign-up-btn"
                  >
                    {" "}
                    Sign up now
                  </p>{" "}
                </div>
                <div className="paragraph-container">
                  {" "}
                  <p class=" text-gray-500">
                    {" "}
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot.
                    <span style={{ color: "#0071eb" }}> Learn more </span>
                  </p>{" "}
                </div>
              </div>
            </form>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default SignIn;
