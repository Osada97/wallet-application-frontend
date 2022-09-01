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
