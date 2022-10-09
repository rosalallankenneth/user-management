import React, { useReducer } from "react";
import { useSelector, useDispatch } from "react-redux";

import { toggleAddModal } from "../redux/actions/eventsActions";
import { addUser } from "../redux/actions/usersActions";
import FormInputGroup from "./FormInputGroup";

const initialState = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  mobile: "",
  streetBrgy: "",
  city: "",
  zipcode: ""
};

const reducer = (state, action) => {
  if (action.type === "RESET") return initialState;

  const result = { ...state };
  result[action.type] = action.value;
  return result;
};

const ModalAddUser = () => {
  const isOpen = useSelector(state => state.events.isModalAddUserOpen);
  const users = useSelector(state => state.users);

  const dispatch = useDispatch();
  const [state, dispatchLocal] = useReducer(reducer, initialState);
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
    dispatch(toggleAddModal());
    dispatchLocal({ type: "RESET" });
  };

  const handleAddUserSubmit = () => {
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

    dispatch(addUser({ ...state, id: Math.random() }));
    dispatchLocal({ type: "RESET" });
    handleToggleModal();
  };

  const findDuplicates = (username, email) => {
    let usernameDup = false;
    let emailDup = false;

    users.data.forEach(user => {
      if (user.username === username) usernameDup = true;
      if (user.email === email) emailDup = true;
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
          <h4 className="text-white font-bold">Add a new User</h4>
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
          className="flex justify-center items-center space-x-3 bg-color hover:bg-blue-500 p-2 rounded-lg w-full"
          onClick={handleAddUserSubmit}
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
          <span className="text-white">Add User</span>
        </button>
      </div>
    </div>
  );
};

const gradientBg = {
  background:
    "rgb(41,41,50) linear-gradient(120deg, rgba(41,41,50,1) 0%, rgba(28,28,36,1) 50%, rgba(19,19,26,1) 100%)"
};

export default ModalAddUser;
