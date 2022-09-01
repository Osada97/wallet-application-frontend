import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/css/editpage.css";

function EditExpenses() {
  const params = useParams();
  const navigate = useNavigate();
  const experience = useSelector((state) => state.userExpenses);

  //filter and get current details
  const post = Object.values(experience).find((data) => params.id === data._id);

  const [title, settitle] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");
  const [date, setdate] = useState("");
  const [amount, setamount] = useState("");

  useEffect(() => {
    if (post) {
      settitle(post.title);
      setcategory(post.category);
      setdescription(post.description);
      setdate(post.date);
      setamount(post.amount_spent.toString());
    }
  }, [post]);

  const submit = (e) => {
    e.preventDefault();

    if (title.trim().length === 0) return alert("Please Enter title");
    if (category.trim().length === 0) return alert("Please Enter category");
    if (description.trim().length === 0)
      return alert("Please Enter description");
    if (!date) return alert("Please Enter date");
    if (amount.trim().length === 0) return alert("Please Enter amount");

    //submit the form
    axios
      .put(`${process.env.REACT_APP_MAIN_URL}/update/${params.id}`, {
        title,
        category,
        description,
        date,
        amountSpent: amount,
      })
      .then((res) => {
        navigate(-1);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="model-ed-from">
      <h1>Edit Expense</h1>
      <form action="#">
        <div className="form-fr-row">
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => settitle(e.target.value)}
            value={title}
          />
          <select
            name="category"
            id="category"
            onChange={(e) => setcategory(e.target.value)}
            value={category}
          >
            <option value="">Please Select category</option>
            <option value="food">Food</option>
            <option value="household">Household</option>
            <option value="social life">Social Life</option>
            <option value="transportation">Transportation</option>
            <option value="health">Health</option>
            <option value="miscellaneous">Miscellaneous</option>
          </select>
        </div>
        <textarea
          name="Description"
          placeholder="Description"
          onChange={(e) => setdescription(e.target.value)}
          value={description}
        ></textarea>
        <div className="form-sc-row">
          <input
            type="date"
            onChange={(e) => setdate(e.target.value)}
            value={date}
          />
          <input
            type="text"
            placeholder="Amount Spent"
            onChange={(e) => setamount(e.target.value)}
            value={amount}
          />
        </div>
        <div className="submit-rw">
          <button onClick={submit}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default EditExpenses;
