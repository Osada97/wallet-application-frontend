import Home from "./pages/Home";
import "./assets/css/global.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadExpensesDetails } from "./actions/getExpensesAction";
import EditExpenses from "./pages/EditExpenses";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadExpensesDetails());
  }, [dispatch]);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="edit/:id" element={<EditExpenses />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
