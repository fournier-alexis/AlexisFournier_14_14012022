import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./style/global.css";
import { CreateEmployee } from "./components/views/create-employee/create-employee";
import { NotFound } from "./components/views/not-found/not-found";
import store from "./store";
import { Employees } from "./components/views/employees/employees";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employee-list" element={<Employees />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
