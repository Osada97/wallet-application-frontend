const initialState = [];

const userExpenses = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_EXPENSES":
      state = [];
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
export default userExpenses;
