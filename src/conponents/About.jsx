import React from "react";
import { Helmet } from "react-helmet";
import { motion, Variants } from "framer-motion";

const aboutVariants: Variants = {
  offscreen: {
    x: "-100vw",
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const About = () => {
  return (
    <>
      <Helmet>
        <title>Faruq Adelodun | About</title>
        <meta
          name="description"
          content="Faruq Adelodun is a junior developer based in Lagos, Nigeria. He is a process engineer and a software engineer."
        />
        <meta
          name="keywords"
          content="about, software engineer, process engineer"
        />
      </Helmet>

      <div
        name="About"
        className="w-full h-full md:h-screen bg-neutral-100 text-black"
      >
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full"
        >
          <motion.div
            variants={aboutVariants}
            whileHover={{ scale: 1.1 }}
            className="pb-8 text-center"
          >
            <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-center">
              About
            </p>
          </motion.div>
          <motion.p variants={aboutVariants} className="text-justify">
            My name is Faruq Adelodun, and I attend AltSchool Africa to study
            software engineering. I live in Lagos. I work as a process engineer
            in one of the well-known power plant in West Africa and Nigeria.
            April 2022 marked the beginning of my software engineering career.
          </motion.p>
          <br />
          <motion.p variants={aboutVariants} className="text-justify">
            I want to excel as a frontend engineer worldwide. My favourite thing
            to do has always been to translate designs into code. Since the
            beginning of this adventure, I have built a few projects, and I am
            eager to continue building fantastic products as I make the switch
            to a full-time career in technology. I'm also trying to get an
            internship position. Please let me know in the contact area if you
            have one for me.
          </motion.p>
        </motion.div>
      </div>
    </>
  );
};

export default About;
