import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleAddModal } from "../redux/actions/eventsActions";

const ModalAddUser = () => {
  const isOpen = useSelector(state => state.events.isModalAddUserOpen);
  const dispatch = useDispatch();
  const handleToggleModal = () => dispatch(toggleAddModal());

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState({
    streetBrgy: "",
    city: "",
    zipcode: ""
  });
  const [mobile, setMobile] = useState("");

  return (
    <div
      className="justify-center items-start bg-black/70 fixed top-0 left-0 w-full h-full px-5 py-8 z-50"
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <div className="flex flex-col justify-start items-center space-y-5 p-5 bg-theme-light max-w-3xl rounded-lg">
        <div className="flex justify-between items-center">
          <h4 className="text-white font-bold">Add a new User</h4>
          <button
            className="flex justify-center items-center space-x-2 bg-red-700 px-3 py-1 rounded-md text-white shadow"
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
            <small>Cancel</small>
          </button>
        </div>

        <div className="flex justify-center items-center space-x-5">
          <div classname="flex flex-col justify-start items-center space-y-3">
            <div className="flex flex-col"></div>
          </div>
          <div classname="flex flex-col justify-start items-center space-y-3">
            Address
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalAddUser;
