import React, { useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  toggleUpdateModal,
  selectUpdateUser
} from "../redux/actions/eventsActions";
import { updateUser } from "../redux/actions/usersActions";
import FormInputGroup from "./FormInputGroup";

const reducer = (state, action) => {
  const result = { ...state };
  result[action.type] = action.value;
  return result;
};

const ModalUpdateUser = () => {
  const isOpen = useSelector(state => state.events.isModalUpdateUserOpen);
  const users = useSelector(state => state.users);
  const updateUserId = useSelector(state => state.events.updateUserId);
  const updateUserData = users.data.filter(user => user.id === updateUserId);

  const dispatch = useDispatch();
  const [state, dispatchLocal] = useReducer(reducer, updateUserData[0]);
  const {
    firstName,
    lastName,
    username,
    email,
    mobile,
    streetBrgy,
    city,
    zipcode
  } = state;

  const handleFormInputChange = e => {
    const { name, value } = e.target;
    dispatchLocal({ type: name, value });
  };

  const handleToggleModal = () => {
    dispatch(selectUpdateUser(null));
    dispatch(toggleUpdateModal());
  };

  const handleUpdateUserSubmit = () => {
    // check for empty fields
    const emptyFields = Object.values(state).filter(value => value === "");
    if (emptyFields.length > 0) {
      alert("Please make sure to fill out all the fields.");
      return;
    }

    // find duplicate entries for username and email
    const duplicates = findDuplicates(username, email);
    if (duplicates.usernameDup) {
      alert("The username provided is already taken.");
      return;
    }
    if (duplicates.emailDup) {
      alert("The email provided already exists.");
      return;
    }

    // check mobile number format
    if (mobile.length !== 10) {
      alert("Please follow the 10 digit format for the mobile number.");
      return;
    }

    dispatch(updateUser({ ...state }));
    handleToggleModal();
  };

  const findDuplicates = (username, email) => {
    let usernameDup = false;
    let emailDup = false;

    users.data.forEach(user => {
      if (user.username === username && username !== updateUserData[0].username)
        usernameDup = true;
      if (user.email === email && email !== updateUserData[0].email)
        emailDup = true;
    });

    return { usernameDup, emailDup };
  };

  return (
    <div
      className="justify-center items-start bg-black/70 fixed top-0 left-0 w-full h-full max-h-full px-5 py-8 z-50"
      style={{ display: isOpen ? "flex" : "none" }}
    >
      <div
        className="flex flex-col justify-start items-center space-y-5 p-5 bg-theme-secondary rounded-lg max-w-3xl w-full max-h-full overflow-y-scroll sm:overflow-hidden"
        style={gradientBg}
      >
        <div className="flex justify-between items-center w-full">
          <h4 className="text-white font-bold">Update a User</h4>
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
            <small>Cancel</small>
          </button>
        </div>

        <div className="flex sm:flex-row flex-col justify-center items-center sm:space-x-5 sm:space-y-0 space-x-0 space-y-3 w-full">
          <div className="flex flex-col justify-start items-start space-y-3 w-full">
            <FormInputGroup
              label="First Name"
              name="firstName"
              value={firstName}
              type="text"
              handleChange={handleFormInputChange}
            />
            <FormInputGroup
              label="Last Name"
              name="lastName"
              value={lastName}
              type="text"
              handleChange={handleFormInputChange}
            />
            <FormInputGroup
              label="Username"
              name="username"
              value={username}
              type="text"
              handleChange={handleFormInputChange}
            />
            <FormInputGroup
              label="Email"
              name="email"
              value={email}
              type="email"
              handleChange={handleFormInputChange}
            />
          </div>
          <div className="flex flex-col justify-start items-start space-y-3 w-full">
            <FormInputGroup
              label="Mobile Number (+63)"
              name="mobile"
              value={mobile}
              type="number"
              handleChange={handleFormInputChange}
            />
            <FormInputGroup
              label="Street / Barangay"
              name="streetBrgy"
              value={streetBrgy}
              type="text"
              handleChange={handleFormInputChange}
            />
            <FormInputGroup
              label="City"
              name="city"
              value={city}
              type="text"
              handleChange={handleFormInputChange}
            />
            <FormInputGroup
              label="Zipcode"
              name="zipcode"
              value={zipcode}
              type="number"
              handleChange={handleFormInputChange}
            />
          </div>
        </div>

        <button
          className="flex justify-center items-center space-x-3 bg-blue-700 hover:bg-blue-600 p-2 rounded-lg w-full"
          onClick={handleUpdateUserSubmit}
        >
          <svg
            className="h-4 w-4 text-white"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {" "}
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />{" "}
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
          <span className="text-white">Update User</span>
        </button>
      </div>
    </div>
  );
};

const gradientBg = {
  background:
    "rgb(41,41,50) linear-gradient(120deg, rgba(41,41,50,1) 0%, rgba(28,28,36,1) 50%, rgba(19,19,26,1) 100%)"
};

export default ModalUpdateUser;
