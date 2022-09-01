import { combineReducers } from "redux";
import expensesReducer from "./getDetailsReducer";

const rootReducer = combineReducers({
  userExpenses: expensesReducer,
});

export default rootReducer;
