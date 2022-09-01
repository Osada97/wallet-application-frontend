import React from "react";
import "../assets/css/home.css";
import pen from "../assets/img/pen.svg";
import trash from "../assets/img/trash.svg";

function Home() {
  return (
    <div className="home-pg">
      <div className="top-row">
        <div className="category-sec">
          <select name="category" id="category">
            <option value="food">Food</option>
            <option value="household">Household</option>
            <option value="social life">Social Life</option>
            <option value="transportation">Transportation</option>
            <option value="health">Health</option>
            <option value="miscellaneous">Miscellaneous</option>
          </select>
        </div>
        <div className="create-ex-sec">
          <button>Create Expense</button>
        </div>
      </div>
      <div className="mid-row">
        <div className="card">
          <div className="card-row">
            <h1>Spent at keels</h1>
            <p>20/10/2022</p>
          </div>
          <p className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            consequatur ipsa deleniti. Corrupti maxime placeat nam sint
            quibusdam natus{" "}
          </p>
          <h3>HOUSEHOLD</h3>
          <h4>1000 LKR</h4>
          <div className="option-row">
            <button>
              <img src={pen} alt="pen" />
            </button>
            <button>
              <img src={trash} alt="trash" />
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card-row">
            <h1>Spent at keels</h1>
            <p>20/10/2022</p>
          </div>
          <p className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            consequatur ipsa deleniti. Corrupti maxime placeat nam sint
            quibusdam natus{" "}
          </p>
          <h3>HOUSEHOLD</h3>
          <h4>1000 LKR</h4>
          <div className="option-row">
            <button>
              <img src={pen} alt="pen" />
            </button>
            <button>
              <img src={trash} alt="trash" />
            </button>
          </div>
        </div>
        <div className="card">
          <div className="card-row">
            <h1>Spent at keels</h1>
            <p>20/10/2022</p>
          </div>
          <p className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum
            consequatur ipsa deleniti. Corrupti maxime placeat nam sint
            quibusdam natus{" "}
          </p>
          <h3>HOUSEHOLD</h3>
          <h4>1000 LKR</h4>
          <div className="option-row">
            <button>
              <img src={pen} alt="pen" />
            </button>
            <button>
              <img src={trash} alt="trash" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
