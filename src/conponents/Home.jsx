import React from "react";
import HeroImage from "../assets/profile.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll/modules";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-sky-400 to-violet-300"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full
       px-4 md:flex-row text-white"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Junior Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              offset={-150}
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-tr from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-2xl mx-auto w-2/4 md:full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
