// toggle add modal visible state
export const toggleAddModal = () => ({
  type: "TOGGLE_MODAL_ADD"
});

// toggle view modal visible state
export const toggleViewModal = () => ({
  type: "TOGGLE_MODAL_VIEW"
});

// toggle update modal visible state
export const toggleUpdateModal = () => ({
  type: "TOGGLE_MODAL_UPDATE"
});

// select data of user to be updated
export const selectUpdateUser = userId => ({
  type: "SELECT_UPDATE_USER",
  payload: userId
});

// select data of user to be viewed
export const selectViewUser = userId => ({
  type: "SELECT_VIEW_USER",
  payload: userId
});

// select data for user search results
export const setSearchResults = results => ({
  type: "SET_SEARCH_RESULTS",
  payload: results
});
