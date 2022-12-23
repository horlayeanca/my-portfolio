import React from "react";
import phonie from "../assets/portfolio/phonie.png";
import bootstrap from "../assets/portfolio/bootstrap.jpeg";
import toggleButton from "../assets/portfolio/toggleButton.jpeg";
import formTwo from "../assets/portfolio/formTwo.jpeg";
import calculator from "../assets/portfolio/calculator.png";
import form from "../assets/portfolio/form.jpeg";
import activeStates from "../assets/portfolio/activeStates.jpg";

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
      src: toggleButton,
      href: "https://sunny-piroshki-d47332.netlify.app/",
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
      src: activeStates,
      href: "https://fascinating-sfogliatella-709a4b.netlify.app",
    },
    {
      id: 6,
      src: activeStates,
      href: "https://fascinating-sfogliatella-709a4b.netlify.app",
    },
    {
      id: 6,
      src: activeStates,
      href: "https://fascinating-sfogliatella-709a4b.netlify.app",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-neutral-100 w-full text-black md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 text-center">
          <p className="text-4xl text-center font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-300 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-1/2 text-center px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
