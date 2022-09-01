import React from "react";

function CategorySelector() {
  return (
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
  );
}

export default CategorySelector;
