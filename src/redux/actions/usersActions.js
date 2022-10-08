// get all users data from redux state
export const getAllUsers = () => ({
  type: "GET_ALL_USERS"
});

// get one specific user data from redux state
export const getOneUser = id => ({
  type: "GET_ONE_USER",
  payload: id // user id
});

// add a user data to redux state
export const addUser = newUser => ({
  type: "ADD_USER",
  payload: newUser // user object
});

// update a user data from redux state
export const updateUser = updatedUser => ({
  type: "UPDATE_USER",
  payload: updatedUser // user object
});

// delete a user data from redux state
export const deleteUser = id => ({
  type: "DELETE_USER",
  payload: id // user id
});
