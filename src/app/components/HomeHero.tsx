import Image from "next/image";
import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const HomeHero = () => {
  return (
    <section className=" max-w-4xl mx-auto flex md:flex-row flex-col mt-16 ">
      {/* left start here */}

      <div className="p-5 max-w-lg  ">
        <h1>I am a Full Stack developer</h1>
        <p className="text-justify">
        Hi, I'm Rana Farooq Ahmad, a web developer with a passion for creating innovative and dynamic online experiences. With expertise in HTML, CSS, JavaScript, Node.js, TypeScript, React.js, Next.js, Chakra UI, Tailwind CSS, Figma, APIs, and headless CMS, I bring a wealth of technical knowledge to every project.

In addition to my web development skills, I have a deep understanding of e-commerce, no-code tools, graphic design, YouTube, and digital marketing. I'm constantly exploring the latest cutting-edge technologies and seeking out new ways to push the boundaries of what's possible online.

With a strong commitment to excellence and a talent for clear communication, I'm confident in my ability to bring any web development project to life. So if you're looking for a skilled and dedicated web developer, look no further than Rana Farooq Ahmad.
        </p>

        {/* <button className="bg-gradient-to-b to-cyan-500 from-blue-500  py-2 px-4 rounded-lg">
          Profile-u
        </button>
        <button className="bg-gradient-to-b from-cyan-500 to-blue-500  py-2 px-4 rounded-lg">
          Profile-b
        </button> */}
        <button className="group flex  items-center bg-gradient-to-r from-cyan-500 to-blue-500  py-2 px-4 rounded-lg">
          Profile
          <MdOutlineKeyboardArrowRight
            size={20}
            className="group-hover:rotate-90 duration-500"
          />
        </button>
      </div>
      {/* left ends here */}
      {/* right */}
      <div>
        <img alt="my image"
          src="https://resume-template-gamma.vercel.app/images/car3.webp   "
          className="md:w-full w-1/2 mx-auto"
        />
      </div>
      {/* right ends */}
    </section>
  );
};