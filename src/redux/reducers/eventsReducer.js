// starting state values
const initialState = {
  isModalAddUserOpen: false,
  updateUser: null
};

// redux reducer for window events
export const eventsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_MODAL_ADD":
      // toggle add modal visibility
      return { ...state, isModalAddUserOpen: !state.isModalAddUserOpen };
    case "SELECT_UPDATE_USER":
      // set data for the user selected for update
      return { ...state, updateUser: action.payload };
    default:
      return state; // return old state
  }
};
