import { useDispatch, useSelector } from "react-redux";
import { Input } from "../../elements/input/input";
import { Select } from "../../elements/select/select";
import { Employee } from "../../../types/Employee";
import { setEmployees } from "../../../features/employees/employeesSlice";
import { states } from "../../../assets/datas/states";
import styles from "./create-employee.module.css";
import { Link } from "react-router-dom";
import { Button } from "../../elements/button/button";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

export const CreateEmployee: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const employees: Employee[] = useSelector(
    (state: any) => state.employees.employees
  );
  const [startDate, setStartDate] = useState(new Date());
  const saveEmployee = () => {
    const employeesList = [...employees];

    employeesList.push({
      firstName: "Clyde",
      lastName: "Vanilla",
      dateOfBirth: "1990-09-11",
      startDate: "2022-01-14",
      department: "Savoie",
      street: "437 avenue de bassens",
      city: "Paris",
      state: "AL",
      zipCode: 93000,
    });

    employeesList.push({
      firstName: "Bruce",
      lastName: "Willis",
      dateOfBirth: "1955-03-19",
      startDate: "2022-01-14",
      department: "Idar",
      street: "22 avenue de will",
      city: "Idar-Oberstein",
      state: "AL",
      zipCode: 45100,
    });

    employeesList.push({
      firstName: "Daniel",
      lastName: "Radcliffe",
      dateOfBirth: "1989-07-23",
      startDate: "2022-01-14",
      department: "Londres",
      street: "357 street",
      city: "Londres",
      state: "AL",
      zipCode: 173000,
    });

    employeesList.push({
      firstName: "Emma",
      lastName: "Watson",
      dateOfBirth: "1990-04-15",
      startDate: "2022-01-14",
      department: "Ile de france",
      street: "67 rue des watt",
      city: "Paris",
      state: "AL",
      zipCode: 93000,
    });

    employeesList.push({
      firstName: "Rupert",
      lastName: "Grint",
      dateOfBirth: "1988-08-24",
      startDate: "2022-01-14",
      department: "Essex",
      street: "018 avenue des grint",
      city: "Harlow",
      state: "AL",
      zipCode: 918000,
    });

    employeesList.push({
      firstName: "Alan",
      lastName: "Rickman",
      dateOfBirth: "1946-21-02",
      startDate: "2022-01-14",
      department: "Londres",
      street: "718 rue de rick",
      city: "Londres",
      state: "AL",
      zipCode: 173000,
    });

    dispatch(
      setEmployees({
        employees: employeesList,
      })
    );

    console.log(employeesList);
    //TODO : Open confirmation modal
  };

  return (
    <main>
      <div className={styles.title}>
        <h1>HRnet</h1>
      </div>
      <div className={styles.container}>
        <Link to="employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <Input id="first-name" type="text" label="First Name"></Input>
          <Input id="last-name" type="text" label="Last Name"></Input>
          <DatePicker
            selected={startDate}
            onChange={(date: any) => setStartDate(date)}
          ></DatePicker>
          <Input id="start-date" type="text" label="Start Date"></Input>
          <fieldset className={styles.address}>
            <legend>Address</legend>

            <Input id="street" type="text" label="Street"></Input>
            <Input id="city" type="text" label="City"></Input>
            <Select
              id="state"
              label="State"
              options={states.map((state) => state.name)}
            ></Select>
            <Input id="zip-code" type="number" label="Zip Code"></Input>
          </fieldset>

          <Select
            id="department"
            label="Department"
            options={[
              "",
              "Sales",
              "Marketing",
              "Engineering",
              "Human Resources",
              "Legal",
            ]}
          ></Select>
        </form>

        <Button label="save" onClick={() => saveEmployee()}></Button>
      </div>
    </main>
  );
};
