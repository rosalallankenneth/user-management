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
      id: Math.random(),
      firstName: "Allan Kenneth",
      lastName: "Rosal",
      username: "aklrosal",
      email: "aklrosal@gmail.com",
      mobile: "9272759241",
      streetBrgy: "P-8, San Antonio",
      city: "Ozamiz",
      zipcode: "7200"
    },
    {
      id: Math.random(),
      firstName: "Leanne",
      lastName: "Graham",
      username: "bret",
      email: "Sincere@april.biz",
      mobile: "9187318282",
      streetBrgy: "Kulas Light",
      city: "Gwenborough",
      zipcode: "6300"
    },
    {
      id: Math.random(),
      firstName: "Ervin",
      lastName: "Howell",
      username: "howel467",
      email: "Shanna@melissa.tv",
      mobile: "9094415278",
      streetBrgy: "Victor Plains",
      city: "Wisokyburgh",
      zipcode: "7400"
    },
    {
      id: Math.random(),
      firstName: "Clementine",
      lastName: "Bauch",
      username: "clemen_x",
      email: "clemenbauch@@gmail.com",
      mobile: "9361558469",
      streetBrgy: "Douglas Extension",
      city: "McKenziehaven",
      zipcode: "4100"
    },
    {
      id: Math.random(),
      firstName: "Patricia",
      lastName: "Lebsack",
      username: "pat_leb",
      email: "patpat@kory.tv",
      mobile: "9997845522",
      streetBrgy: "Hoeger Mall",
      city: "South Elvis",
      zipcode: "5500"
    }
  ]
};
