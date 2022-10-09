import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleViewModal } from "../redux/actions/eventsActions";

const ModalViewUser = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector(state => state.events.isModalViewUserOpen);
  const users = useSelector(state => state.users);
  const viewUserId = useSelector(state => state.events.viewUserId);
  const viewingUser = users.data.filter(user => user.id === viewUserId);
  const {
    firstName,
    lastName,
    username,
    email,
    mobile,
    streetBrgy,
    city,
    zipcode
  } = viewingUser[0];

  const handleToggleModal = () => {
    dispatch(toggleViewModal());
  };

  return (
    <div
      className="justify-center items-start bg-black/70 fixed top-0 left-0 w-full h-full max-h-full px-5 py-8 z-50"
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <div
        className="flex flex-col justify-start items-center space-y-5 p-5 pb-10 bg-theme-secondary rounded-lg max-w-3xl w-full max-h-full overflow-y-scroll sm:overflow-hidden"
        style={gradientBg}
      >
        <div className="flex justify-between items-center w-full">
          <h4 className="text-white font-bold">More Info</h4>
          <button
            className="flex justify-center items-center space-x-2 bg-theme-light hover:bg-gray-700 px-3 py-2 rounded-md text-white shadow"
            onClick={handleToggleModal}
          >
            <svg
              className="h-4 w-4 text-white"
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
              <line x1="18" y1="6" x2="6" y2="18" />{" "}
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            <small>Close</small>
          </button>
        </div>

        <div className="flex sm:flex-row flex-col justify-center items-center sm:space-x-5 sm:space-y-0 space-x-0 space-y-3 w-full">
          <div className="flex flex-col justify-start items-start space-y-5 w-full">
            <UserItem label="First Name" value={firstName} />
            <UserItem label="Last Name" value={lastName} />
            <UserItem label="Username" value={username} />
            <UserItem label="Email" value={email} />
          </div>
          <div className="flex flex-col justify-start items-start space-y-5 w-full">
            <UserItem label="Mobile Number (+63)" value={mobile} />
            <UserItem label="Street / Barangay" value={streetBrgy} />
            <UserItem label="City" value={city} />
            <UserItem label="Zipcode" value={zipcode} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const UserItem = ({ label, value }) => (
  <div className="flex flex-col justify-start items-start space-y-1 w-full">
    <label className="text-gray-400 text-sm">{label}</label>
    <p className="text-white text-sm bg-theme-light p-2 border-l-2 border-gray-300 rounded-r-md w-full">
      {value}
    </p>
  </div>
);

const gradientBg = {
  background:
    "rgb(41,41,50) linear-gradient(120deg, rgba(41,41,50,1) 0%, rgba(28,28,36,1) 50%, rgba(19,19,26,1) 100%)"
};

export default ModalViewUser;
