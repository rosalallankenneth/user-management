// starting state values
const initialState = {
  isModalAddUserOpen: false,
  isModalViewUserOpen: false,
  updateUserId: null,
  viewUserId: null,
  deleteUserId: null,
  searchResults: null
};

// redux reducer for window events
export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_MODAL_ADD":
      // toggle add modal visibility
      return { ...state, isModalAddUserOpen: !state.isModalAddUserOpen };
    case "TOGGLE_MODAL_VIEW":
      // toggle view modal visibility
      return { ...state, isModalViewUserOpen: !state.isModalViewUserOpen };
    case "SELECT_VIEW_USER":
      // set id for the viewed user
      return { ...state, viewUserId: action.payload };
    case "SELECT_UPDATE_USER":
      // set id for the user selected for update
      return { ...state, updateUserId: action.payload };
    case "SELECT_DELETE_USER":
      // set id for the user to be deleted
      return { ...state, deleteUserId: action.payload };
    case "SET_SEARCH_RESULTS":
      // set user search results
      return { ...state, searchResults: action.payload };
    default:
      return state; // return old state
  }
};
