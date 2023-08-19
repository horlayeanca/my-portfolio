import React from "react";
import phonie from "../assets/portfolio/phonie.png";
import bootstrap from "../assets/portfolio/bootstrap.jpeg";
import formTwo from "../assets/portfolio/formTwo.jpeg";
import calculator from "../assets/portfolio/calculator.png";
import form from "../assets/portfolio/form.jpeg";
import activeStates from "../assets/portfolio/activeStates.jpg";
import todoApp from "../assets/portfolio/todoApp.png";
import scissor from "../assets/portfolio/scissor.png";
import quiz from "../assets/portfolio/quiz.png";
import { Helmet } from "react-helmet";
import { motion, Variants } from "framer-motion";

const portfolioVariants: Variants = {
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

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: phonie,
      href: "https://spectacular-mooncake-a3ddc8.netlify.app/",
    },
    {
      id: 2,
      src: bootstrap,
      href: "https://vocal-moxie-dffd08.netlify.app/",
    },
    {
      id: 3,
      src: scissor,
      href: "https://scissor-af7b6.web.app/",
    },
    {
      id: 4,
      src: formTwo,
      href: "https://beamish-basbousa-3bf6cb.netlify.app/",
    },
    {
      id: 5,
      src: calculator,
      href: "https://github.com/horlayeanca/calculator",
    },
    {
      id: 6,
      src: form,
      href: "https://benevolent-lily-be3ea5.netlify.app/",
    },
    {
      id: 6,
      src: todoApp,
      href: "https://my-daily-task-app.netlify.app/",
    },
    {
      id: 6,
      src: quiz,
      href: "https://cool-hummingbird-616118.netlify.app/",
    },
    {
      id: 6,
      src: activeStates,
      href: "https://fascinating-sfogliatella-709a4b.netlify.app",
    },
  ];

  return (
    <div name="Portfolio" className="bg-neutral-100 w-full text-black h-full">
      <Helmet>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio" />
      </Helmet>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          className="pb-8 text-center"
        >
          <p className="text-4xl text-center font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here.</p>
        </motion.div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"
        >
          {portfolios.map(({ id, src, href }) => (
            <motion.div
              variants={portfolioVariants}
              key={id}
              className="shadow-md shadow-gray-300 rounded-lg"
            >
              <motion.img
                variants={portfolioVariants}
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <motion.div
                variants={portfolioVariants}
                className="flex items-center justify-center"
              >
                <motion.a
                  variants={portfolioVariants}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 text-center px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  View Project
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
