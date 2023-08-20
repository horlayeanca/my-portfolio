import React from "react";
import HeroImage from "../assets/profile.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll/modules";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Faruq Adelodun | Home</title>
        <meta
          name="description"
          content="Faruq Adelodun is a junior developer based in Lagos, Nigeria. He is a process engineer and a software engineer."
        />
      </Helmet>

      <div
        name="Home"
        className="h-full md:h-screen w-full bg-neutral-100 pt-14"
      >
        <div
          className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full
       px-4 md:flex-row text-white pt-10"
        >
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 20,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="flex flex-col justify-center h-full"
          >
            <motion.h2
              initial={{ hidden: true, opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="text-4xl sm:text-7xl font-bold text-gray-600 sm:pt-4"
            >
              I'm a Junior Developer
            </motion.h2>
            <p className="text-black py-4 max-w-md text-justify">
              My name is Faruq Adelodun, and I attend AltSchool Africa to study
              software engineering. I live in Lagos. I work as a process
              engineer in one of the well-known power plant in West Africa and
              Nigeria. April 2022 marked the beginning of my software
              engineering career. &nbsp;
              <Link
                to="About"
                smooth
                offset={100}
                duration={500}
                className="text-neutral-400 tracking-widest cursor-pointer hover:text-blue-500"
              >
                load more...
              </Link>
            </p>
            <div>
              <Link
                to="Portfolio"
                smooth
                offset={-250}
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-tr from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, rotate: 360, opacity: 1 }}
            transition={{ duration: 1, stiffness: 20 }}
          >
            <img
              src={HeroImage}
              alt="profile"
              className="rounded-full mx-auto w-2/3 md:hover:scale-90 duration-300"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Home;
