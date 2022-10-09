import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setSearchResults } from "../redux/actions/eventsActions";

const Searchbar = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  const handleSearch = e => {
    const searchItem = e.target.value;

    if (searchItem === "") {
      dispatch(setSearchResults(null));
      return;
    }

    const found = users.data.filter(user => {
      const match = Object.entries(user).filter(entry => {
        const [key, value] = entry;
        if (key === "id") return false;
        if (value.indexOf(searchItem) < 0) return false;
        return true;
      });

      if (match.length < 1) return false;
      return true;
    });

    dispatch(setSearchResults(found));
  };

  return (
    <div
      className="flex justify-between items-center sm:flex-row sm:space-y-0 flex-col space-y-3 container mx-auto mt-10 rounded-t-lg p-3"
      style={gradientBg}
    >
      <h2 className="text-white font-bold">User Management</h2>
      <div className="flex justify-end items-stretch sm:w-auto w-full">
        <input
          className="text-white text-sm px-2 rounded-l-lg bg-theme-light outline-none focus:bg-gray-700 sm:w-auto w-full"
          placeholder="Search..."
          onChange={handleSearch}
        />
        <label className="bg-theme-light p-2 rounded-r-lg">
          <svg
            className="h-4 w-4 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <circle cx="11" cy="11" r="8" />{" "}
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </label>
      </div>
    </div>
  );
};

const gradientBg = {
  background:
    "rgb(41,41,50) linear-gradient(120deg, rgba(41,41,50,1) 0%, rgba(28,28,36,1) 50%, rgba(19,19,26,1) 100%)"
};

export default Searchbar;
