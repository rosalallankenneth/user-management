import { combineReducers } from "redux";

// reducers
import { usersReducer } from "./usersReducer";
import { eventsReducer } from "./eventsReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  events: eventsReducer
});

export default rootReducer;
