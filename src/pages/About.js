import React from "react";
import JsImage from "../assets/images/js.png";
import ReactImage from "../assets/images/react.png";
import ReduxImage from "../assets/images/redux.png";
import TailwindImage from "../assets/images/tailwind.png";

const About = () => {
  return (
    <div className="py-10 px-3">
      <div className="container mx-auto p-5 rounded-lg" style={gradientBg}>
        <h2 className="text-white text-xl text-center">About</h2>
        <p className="text-gray-300 text-justify leading-loose p-5">
          This web application is a simple user management system utilizing
          Create, Read, Update, Delete (CRUD) operations. CRUD is the four
          fundamental operations of persistent storage in computer programming.
          The term "CRUD" is also used to refer to user interface patterns that
          make it easier to browse, search for, and modify data using
          computer-based forms and reports.
        </p>
        <div>
          <h6 className="mb-5 text-white text-lg text-center">Technologies</h6>
          <div className="flex justify-center items-center sm:flex-row sm:space-x-5 sm:space-y-0 flex-col space-x-0 space-y-5 text-center mb-5 w-full">
            <div className="flex flex-col justify-center items-center space-y-3">
              <img src={JsImage} alt="javascript" className="w-24" />
              <label className="text-white">Javascript</label>
            </div>
            <div className="flex flex-col justify-center items-center space-y-3">
              <img src={ReactImage} alt="react" className="w-24" />
              <label className="text-white">React</label>
            </div>
            <div className="flex flex-col justify-center items-center space-y-3">
              <img src={ReduxImage} alt="redux" className="w-24" />
              <label className="text-white">Redux</label>
            </div>
            <div className="flex flex-col justify-center items-center space-y-3">
              <img src={TailwindImage} alt="tailwind" className="w-24" />
              <label className="text-white">Tailwind CSS</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const gradientBg = {
  background:
    "rgb(41,41,50) linear-gradient(120deg, rgba(41,41,50,1) 0%, rgba(28,28,36,1) 50%, rgba(19,19,26,1) 100%)"
};

export default About;
