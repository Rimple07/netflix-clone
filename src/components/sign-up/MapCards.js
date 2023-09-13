import React from "react";


const items = [
  { title: "What is Netflix" },
  { title: "How much does Netflix cost?" },
  { title: "Where can I watch" },
  { title: "How do I cancel" },
  { title: "What can I watch on Netflix" },
  { title: "Is Netflix good for kids" },
];

function MapCards() {
  return (
    <div class="flex justify-center bg-black w-full">
      <div class="flex justify-center bg-black w-full">
        <div className="List-container">
          <h2 class="text-5xl text-white">Frequently Asked Questions</h2>
          <div>
            <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
         {items.map((item)=> <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
           <span>  {item.title}</span> <span> </span> <FontAwesomeIcon icon="fa-light fa-plus" style={{color: "#f4f5f6"}} />
              </li> )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MapCards;
