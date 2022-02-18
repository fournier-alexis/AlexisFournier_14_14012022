import { FunctionComponent } from "react";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateEmployee } from "./components/views/create-employee/create-employee";
import { Employees } from "./components/views/employees/employees";
import { NotFound } from "./components/views/not-found/not-found";
import { setEmployees } from "./features/employees/employeesSlice";
export const App: FunctionComponent = () => {
  const dispatch = useDispatch();
  const storage = localStorage.getItem("employees");
  const employees = storage ? JSON.parse(storage) : [];

  dispatch(
    setEmployees({
      employees: employees,
    })
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employee-list" element={<Employees />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
