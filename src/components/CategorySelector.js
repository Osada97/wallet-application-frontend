import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  loadExpensesDetails,
  loadExpensesFilterDetails,
} from "../actions/getExpensesAction";

function CategorySelector() {
  const [value, setvalue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (value) {
      console.log(value);
      if (value === "") {
        dispatch(loadExpensesDetails());
      } else {
        dispatch(loadExpensesFilterDetails(value));
      }
    }
  }, [value, dispatch]);

  return (
    <div className="category-sec">
      <select
        name="category"
        id="category"
        onChange={(e) => setvalue(e.target.value)}
        value={value}
      >
        <option value="">Select Value</option>
        <option value="food">Food</option>
        <option value="household">Household</option>
        <option value="social life">Social Life</option>
        <option value="transportation">Transportation</option>
        <option value="health">Health</option>
        <option value="miscellaneous">Miscellaneous</option>
      </select>
    </div>
  );
}

export default CategorySelector;
