import Axios from "axios";

//action creator
export const loadExpensesDetails = () => async (dispatch) => {
  const setExpenses = await Axios.get(
    `${process.env.REACT_APP_MAIN_URL}/getdetails/`
  );
  dispatch({
    type: "FETCH_EXPENSES",
    payload: setExpenses.data,
  });
};

export const loadExpensesFilterDetails = (filterValue) => async (dispatch) => {
  const setExpenses = await Axios.get(
    `${process.env.REACT_APP_MAIN_URL}/filter?category=${filterValue}`
  );
  dispatch({
    type: "FETCH_FILTER_EXPENSES",
    payload: setExpenses.data,
  });
};
