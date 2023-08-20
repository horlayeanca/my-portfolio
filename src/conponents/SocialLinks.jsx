import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill, BsTwitter } from "react-icons/bs";
import { motion } from "framer-motion";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com",
      style: "rounded-tr-md hover:bg-blue-500 duration-400",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/horlayeanca",
      style: "hover:bg-slate-700 duration-400",
    },
    {
      id: 2,
      child: (
        <>
          Twitter <BsTwitter size={30} />
        </>
      ),
      href: "https://twitter.com/Horlayeanca02",
      style: "hover:bg-blue-500 duration-400",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:adelodunfaruq@gmail.com",
      style:
        "hover:bg-gradient-to-b from-purple-500 to-indigo-400 duration-400",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/resume.pdf",
      style:
        "rounded-br-md hover:bg-gradient-to-b from-green-400 to-sky-400 duration-400",
      download: false,
    },
  ];

  return (
    <motion.div
      initial={{ x: "-100vw", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 1,
        type: "spring",
        stiffness: 15,
        ease: "easeInOut",
        delay: 0.5,
      }}
      className="hidden lg:flex flex-col top-[35%] left-0 fixed"
    >
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default SocialLinks;
