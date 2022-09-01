import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loadExpensesDetails } from "../actions/getExpensesAction";
import pen from "../assets/img/pen.svg";
import trash from "../assets/img/trash.svg";

function ExpensesCard({ data }) {
  const dispatch = useDispatch();
  const deleteExpense = () => {
    let confirm = window.confirm("Do You want to remove expense?");
    if (confirm) {
      axios
        .delete(`${process.env.REACT_APP_MAIN_URL}/delete/${data._id}/`)
        .then(() => dispatch(loadExpensesDetails()))
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="card">
      <div className="card-row">
        <h1>{data.title}</h1>
        <p>{data.date}</p>
      </div>
      <p className="description">{data.description}</p>
      <h3>{data.category}</h3>
      <h4>{data.amount_spent} LKR</h4>
      <div className="option-row">
        <button>
          <Link to={`/edit/${data._id}`}>
            <img src={pen} alt="pen" />
          </Link>
        </button>
        <button onClick={deleteExpense}>
          <img src={trash} alt="trash" />
        </button>
      </div>
    </div>
  );
}

export default ExpensesCard;
