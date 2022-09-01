import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../assets/css/home.css";
import CategorySelector from "../components/CategorySelector";
import CreateExpensesModel from "../components/CreateExpensesModel";
import ExpensesCard from "../components/ExpensesCard";

function Home() {
  const [isModel, setisModel] = useState(false);
  const experience = useSelector((state) => state.userExpenses);
  return (
    // creating model
    <>
      {isModel ? (
        <CreateExpensesModel setisModel={setisModel} isModel={isModel} />
      ) : (
        ""
      )}
      <div className="home-pg">
        <div className="top-row">
          <CategorySelector />
          <div className="create-ex-sec">
            <button onClick={() => setisModel(true)}>Create Expense</button>
          </div>
        </div>
        <div className="mid-row">
          {Object.values(experience).length !== 0
            ? Object.values(experience).map((data) => (
                <ExpensesCard data={data} key={data._id} />
              ))
            : ""}
        </div>
      </div>
    </>
  );
}

export default Home;
