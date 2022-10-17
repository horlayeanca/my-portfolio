import React from "react";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImage from "../assets/react.png";
import Github from "../assets/github.png";
import bootstrap from "../assets/bootstrap.png";
import Tailwind from "../assets/tailwind.png";
import versionControl from "../assets/versionControl.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: Html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: Css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: ReactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: Tailwind,
      title: "Tailwind",
      style: "shadow-sky-600",
    },
    {
      id: 6,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-pink-400",
    },
    {
      id: 7,
      src: versionControl,
      title: "Version Control",
      style: "shadow-stone-800",
    },
    {
      id: 8,
      src: Github,
      title: "Github",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div
      name="Experience"
      className="bg-gradient-to-b from-violet-300 to-sky-400 w-full h-screen"
    >
      <div className="max-with-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white lg:px-20">
        <div className="">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;