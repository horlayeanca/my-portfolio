import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-violet-300 to-sky-400 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl">
          My name is Faruq Adelodun, and I attend AltSchool Africa to study
          software engineering. I live in Lagos. I work as a process engineer in
          one of the well-known power plant in West Africa and Nigeria. April
          2022 marked the beginning of my software engineering career.
        </p>
        <br />
        <p className="text-xl">
          I want to excel as a frontend engineer worldwide. My favourite thing
          to do has always been to translate designs into code. Since the
          beginning of this adventure, I have built a few projects, and I am
          eager to continue building fantastic products as I make the switch to
          a full-time career in technology. I'm also trying to get an internship
          position. Please let me know in the contact area if you have one for
          me.
        </p>
      </div>
    </div>
  );
};

export default About;
