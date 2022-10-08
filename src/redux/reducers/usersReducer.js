export const usersReducer = (state = users, action) => {
  switch (action.type) {
    case "GET_ALL_USERS":
      return { ...state };
    case "GET_ONE_USER":
      return {
        ...state,
        data: state.data.filter(data => data.id === action.payload)
      };
    case "ADD_USER":
      return { ...state, data: [...state.data, action.payload] };
    case "UPDATE_USER":
      return {
        ...state,
        data: state.data.map(data =>
          data.id === action.payload.id ? { ...action.payload } : data
        )
      };
    case "DELETE_USER":
      return {
        ...state,
        data: state.data.filter(data => data.id !== action.payload)
      };
    default:
      return state;
  }
};

// initial state
const users = {
  data: [
    {
      id: 1,
      firstName: "Allan Kenneth",
      lastName: "Rosal",
      username: "aklrosal",
      email: "allankennethrosal@gmail.com",
      address: {
        streetBrgy: "P-8, San Antonio",
        city: "Ozamiz",
        zipcode: "7200"
      },
      mobile: "9272759241"
    }
  ]
};
