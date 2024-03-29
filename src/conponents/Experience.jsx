import React from "react";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImage from "../assets/react.png";
import Github from "../assets/github.png";
import bootstrap from "../assets/bootstrap.png";
import Tailwind from "../assets/tailwind.png";
import versionControl from "../assets/versionControl.png";
import VueJs from "../assets/VueJs.png";
import { Helmet } from "react-helmet";
import { motion, Variants } from "framer-motion";

const experienceVariants: Variants = {
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
      duration: 1,
      stiffness: 20,
      ease: "easeInOut",
    },
  },
};

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: Html,
      title: "HTML",
      style: "shadow-orange-300",
    },
    {
      id: 2,
      src: Css,
      title: "CSS",
      style: "shadow-blue-300",
    },
    {
      id: 3,
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-300",
    },
    {
      id: 4,
      src: ReactImage,
      title: "React",
      style: "shadow-blue-400",
    },
    {
      id: 5,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-pink-300",
    },
    {
      id: 7,
      src: versionControl,
      title: "Version Control",
      style: "shadow-stone-500",
    },
    {
      id: 8,
      src: Github,
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: VueJs,
      title: "VueJs",
      style: "shadow-green-400",
    },
  ];

  return (
    <div name="Experience" className="bg-neutral-100 w-full h-full">
      <Helmet>
        <title> Faruq Adelodun | Experience </title>
        <meta name="description" content="Faruq Adelodun's experience" />
      </Helmet>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.5 }}
        className="max-with-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-black lg:py-20"
      >
        <motion.div variants={experienceVariants} className="text-center">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline text-center">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with.</p>
        </motion.div>

        <motion.div
          variants={experienceVariants}
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-10 sm:px-40"
        >
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Experience;
