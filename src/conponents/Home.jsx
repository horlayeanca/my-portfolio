import React from "react";
import HeroImage from "../assets/profile.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll/modules";

const Home = () => {
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-sky-400 to-violet-300 pt-10"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full
       px-4 md:flex-row text-white pt-10"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white sm:pt-4">
            I'm a Junior Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            My name is Faruq Adelodun, and I attend AltSchool Africa to study
            software engineering. I live in Lagos. I work as a process engineer
            in one of the well-known power plant in West Africa and Nigeria.
            April 2022 marked the beginning of my software engineering career.
            &nbsp;
            <Link
              to="About"
              smooth
              offset={100}
              duration={500}
              className="text-neutral-400 cursor-pointer hover:text-white"
            >
              load more..
            </Link>
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