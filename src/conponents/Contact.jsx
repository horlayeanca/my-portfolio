import React from "react";
import { BiMailSend } from "react-icons/bi";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-screen bg-neutral-100 p-4 text-black pt-24 sm:pt-44"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full pt-20 sm:pt-48">
        <div className="pb-8 text-center pt-20 sm:pt-44">
          <p className="text-4xl text-center font-bold inline border-b-4 border-gray-500 ">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me.</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/9043444a-25dd-4d96-a0f0-e4642cdc94fd"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none my-4"
            />
            <textarea
              name="message"
              rows="10"
              placeholder="Type your message here.."
              className="p-2 bg-transparent border-2 rounded-md text-black focus:outline-none"
            ></textarea>
            <button className="text-white px-6 py-3 my-8 mx-auto flex items-center bg-gradient-to-tr from-cyan-500 to-blue-500 rounded-md hover:scale-110 duration-300">
              Submit
              <span className="text-white">
                <BiMailSend size={20} className="ml-2" />
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
