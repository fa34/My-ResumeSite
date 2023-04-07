import Image from "next/image";
import React from "react";

const Portolio = () => {
  return (
    <div
      className=" flex items-center max-w-7xl mx-auto leading-8 mb-10"
      id="Portfolio"
    >
      <div className="text-gray-500 px-10 mt-32 mx-auto">
        <h1 className="text-center text-4xl text-white mb-10">Portfolio</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-24 mx-auto w-full  ">
          {/* card 1 */}
          <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div >
              <img alt="portfolio image"
                src={"/images/portfolio/6.avif"}
                className="pl-10 w-60 h-40 rounded-t-md"
              />
            </div>
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://google.com" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}

          {/* card 2 */}
          <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div>
              <img alt="portfolio image"
                src={"/images/portfolio/1.jpeg"}
                className="pl-10 w-60 h-40 rounded-t-md "
              />
            </div>
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://pricing-ui-using-chakra-ui.vercel.app/" target={"_blank"}>
                  Demo
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://github.com/fa34/Chakra-UI-Portfolio-Pricing-UI" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}

          {/* card 3 */}
          <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div>
              <img alt="portfolio image"
                src={"/images/portfolio/2.jpeg"}
                className="pl-10 w-60 h-40 rounded-t-md"
              />
            </div>
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="#" target={"_blank"}>
                  Next.js CRUD APP
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://github.com/fa34/Todo-List-App-in-Next.js-with-CRUD-operations" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}

          {/* card 4 */}
          <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div>
              <img alt="portfolio image"
                src={"/images/portfolio/3.webp"}
                className="pl-10  w-60 h-40 rounded-t-md"
              />
            </div>
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="#" target={"_blank"}>
                  ATM-TypeScript
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://github.com/fa34/ATM-CLI-with-TypeScript" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}

          {/* card 5 */}
          <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div>
              <img alt="portfolio image"
                src={"/images/portfolio/4.jpeg"}
                className="pl-10 w-60 h-40 rounded-t-md"
              />
            </div>
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="#" target={"_blank"}>
                  Logic Building JavaScript
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://github.com/fa34/LogicBuilding/tree/master/public" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}
          {/* card 6 */}
          <div className="shadow-md shadow-gray-600 h-60 hover:scale-105 duration-75 ">
            <div>
              <img alt="portfolio image"
                src={"/images/portfolio/5.jpeg"}
                className="pl-10 w-60 h-40 rounded-t-md"
              />
            </div>
            <div className="flex justify-between px-5 text-white">
              <button className="p-4 hover:scale-105 duration-200">
                <a href="#" target={"_blank"}>
                  Github Profile
                </a>
              </button>
              <button className="p-4 hover:scale-105 duration-200">
                <a href="https://github.com/fa34?tab=repositories" target={"_blank"}>
                  Code
                </a>
              </button>
            </div>
          </div>
          {/* card end */}
        </div>
      </div>
    </div>
  );
};
export default Portolio;
