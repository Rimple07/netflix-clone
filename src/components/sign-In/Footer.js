import React from "react";
import "./signIn.scss";
import Dropdown from "../commonwallpaper/Dropdown";

function Footer() {
  return (
    <footer class="bg-white dark:bg-gray-900" className="footer-container">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <h2
          class="mb-6 text-sm font-semibold text-grey-900 uppercase text-white"
          className="main-heading-footer"
        >
          Questions? Call 000-800-919-1694
        </h2>
        <div class="md:flex md:justify-between">
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
            <div>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a
                    href="https://flowbite.com/"
                    class="hover:underline"
                    className="heading-footer"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com/"
                    class="hover:underline"
                    className="heading-footer"
                  >
                    Cookie Preferences
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    class="hover:underline "
                    className="heading-footer"
                  >
                    Help Centre
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.gg/4eeurUVvTy"
                    class="hover:underline"
                    className="heading-footer"
                  >
                    Corporate Information
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a
                    href="#"
                    class="hover:underline"
                    className="heading-footer"
                  >
                    Terms of Use
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    class="hover:underline"
                    className="heading-footer"
                  ></a>
                </li>
              </ul>
            </div>

            <div>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a
                    href="https://github.com/themesberg/flowbite"
                    class="hover:underline "
                    className="heading-footer"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

          <div className="dropdown-btn">
            <Dropdown />
          </div>
      </div>
    </footer>
  );
}

export default Footer;
