// toggle modal visible state
export const toggleAddModal = () => ({
  type: "TOGGLE_MODAL_ADD"
});

// select data of user to be updated
export const selectUpdateUser = user => ({
  type: "SELECT_UPDATE_USER",
  payload: user
});
