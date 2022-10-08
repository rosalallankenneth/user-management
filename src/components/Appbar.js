import React from "react";
import { Link, useLocation } from "react-router-dom";

const Appbar = () => {
  const location = useLocation();
  const activeDashboard =
    location.pathname === "/" ? "bg-theme-light text-white" : "text-gray-400";
  const activeAbout =
    location.pathname === "/about"
      ? "bg-theme-light text-white"
      : "text-gray-400";

  return (
    <header className="p-3 bg-theme-secondary w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-5">
          <h1 className="text-white font-bold">CRUD App</h1>
        </div>
        <nav className="flex justify-center items-center">
          <Link
            to="/"
            className={`flex justify-center items-center space-x-2 px-3 py-2 rounded-md ${activeDashboard}`}
          >
            <svg
              className={`h-5 w-5 ${activeDashboard}`}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <circle cx="12" cy="13" r="2" />{" "}
              <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />{" "}
              <path d="M6.4 20a9 9 0 1 1 11.2 0Z" />
            </svg>

            <span className="text-sm sm:block hidden">Dashboard</span>
          </Link>
          <Link
            to="/about"
            className={`flex justify-center items-center space-x-2 px-3 py-2 rounded-md ${activeAbout}`}
          >
            <svg
              className={`h-5 w-5 ${activeAbout}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-sm sm:block hidden">About</span>
          </Link>
        </nav>
        <button className="text-white text-sm">Night mode</button>
      </div>
    </header>
  );
};

export default Appbar;
