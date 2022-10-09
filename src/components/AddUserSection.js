import React from "react";
import { useDispatch } from "react-redux";
import { toggleAddModal } from "../redux/actions/eventsActions";

const AddUserSection = () => {
  const dispatch = useDispatch();
  const handleToggleModal = () => dispatch(toggleAddModal());
  const dateTodayPh = getCurrentDate();

  return (
    <div className="flex justify-between items-center sm:flex-row sm:space-y-0 flex-col space-y-5 container mx-auto">
      <div className="flex flex-col justify-center items-start space-y-2">
        <h6 className="text-white font-bold text-xl">Welcome, John Doe!</h6>
        <small className="text-gray-400">{dateTodayPh}</small>
      </div>
      <button
        className="flex justify-center items-center space-x-3 bg-color py-2 px-5 rounded-lg shadow-none hover:bg-blue-500 shadow-md shadow-blue-700"
        onClick={handleToggleModal}
      >
        <svg
          className="h-5 w-5 text-white"
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
          <circle cx="9" cy="7" r="4" />{" "}
          <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />{" "}
          <path d="M16 11h6m-3 -3v6" />
        </svg>
        <span className="text-white text-sm">Add New User</span>
      </button>
    </div>
  );
};

export const getCurrentDate = () => {
  return new Date().toLocaleDateString(
    {},
    {
      timeZone: "Asia/Manila",
      month: "long",
      day: "2-digit",
      year: "numeric",
      weekday: "long"
    }
  );
};

export default AddUserSection;
