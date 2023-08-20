import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll/modules";
import { motion } from "framer-motion";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "About",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "Experience",
    },
    {
      id: 5,
      link: "Contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-neutral-200 shadow-sm fixed z-[9999]">
      <div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ rotate: 360, x: [-50, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.1 }}
          className="text-5xl text-rose-700 font-signature ml-2 cursor-pointer"
        >
          Horla
        </motion.h1>
      </div>
      <motion.ul
        initial={{ y: -250 }}
        animate={{ y: -5 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 80 }}
        className="hidden md:flex"
      >
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-300 hover:text-rose-700"
          >
            <Link to={link} smooth={true} offset={-150} duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </motion.ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-neutral-200 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                offset={150}
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
