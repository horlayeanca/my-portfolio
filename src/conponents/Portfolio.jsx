import React from "react";
import phonie from "../assets/portfolio/phonie.png";
import bootstrap from "../assets/portfolio/bootstrap.jpeg";
import toggleButton from "../assets/portfolio/toggleButton.jpeg";
import formTwo from "../assets/portfolio/formTwo.jpeg";
import calculator from "../assets/portfolio/calculator.png";
import form from "../assets/portfolio/form.jpeg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: phonie,
      href: "https://github.com/horlayeanca/Phonie_app",
    },
    {
      id: 2,
      src: bootstrap,
      href: "https://github.com/horlayeanca/my-repo",
    },
    {
      id: 3,
      src: toggleButton,
      href: "https://github.com/horlayeanca/toggle_button",
    },
    {
      id: 4,
      src: formTwo,
      href: "https://github.com/horlayeanca/sign-in-form_flip",
    },
    {
      id: 5,
      src: calculator,
      href: "https://github.com/horlayeanca/calculator",
    },
    {
      id: 6,
      src: form,
      href: "https://github.com/horlayeanca/my-form",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-sky-400 to-violet-300 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
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
                  Code
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
