import React from "react";

function Dropdown() {
  return (
    <div>
      {" "}
      <button
        class="flex rounded  text-xs  uppercase leading-normal text-white "
        type="button"
        id="dropdownMenuButton1s"
        aria-expanded="true"
        className="dropdown-option"
      >
        English
        <span class="mr-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 20"
            fill="currentColor"
            class="h-5 w-5"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </span>
      </button>
      <ul
        class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
        aria-labelledby="dropdownMenuButton1s"
        data-te-dropdown-menu-ref
      >
        <li>
          <a
            class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
            href="#"
            data-te-dropdown-item-ref
            className="dropdown-option"
          >
            Action
          </a>
        </li>
        <li>
          <a
            class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
            href="#"
            data-te-dropdown-item-ref
            className="dropdown-option"
          >
            Another action
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;
