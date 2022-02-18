import { useDispatch, useSelector } from "react-redux";
import { Input } from "../../elements/input/input";
import { Select } from "../../elements/select/select";
import { Employee } from "../../../types/Employee";
import { setEmployees } from "../../../features/employees/employeesSlice";
import { states } from "../../../assets/datas/states";
import styles from "./create-employee.module.css";
import { Link } from "react-router-dom";
import { Button } from "../../elements/button/button";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { DateComponent } from "../../elements/date/dateComponent";
import { Modal } from "afournier-oc-modal"

export const CreateEmployee: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const employees: Employee[] = useSelector(
    (state: any) => state.employees.employees
  );

  const [isSuccessModalOpen, toggleSuccessModal] = useState<boolean>(false);
  const [isMissingFieldModalOpen, toggleMissingFieldModal] = useState<boolean>(false);

  const [firstName, setFirstName] = useState<string | undefined>(undefined);
  const [lastName, setLastName] = useState<string | undefined>(undefined);
  const [dateOfBirth, setDateOfBirth] = useState<Date>(new Date());
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [street, setStreet] = useState<string | undefined>(undefined);
  const [city, setCity] = useState<string | undefined>(undefined);
  const [state, setState] = useState<string | undefined>(undefined);
  const [zipCode, setZipCode] = useState<number | undefined>(undefined);
  const [department, setDepartment] = useState<string | undefined>(undefined);

  const saveEmployee = () => {
    const employeesList = [...employees];

    if(firstName && lastName && street && city && state && zipCode && department){
      employeesList.push({
        firstName,
        lastName,
        dateOfBirth: dateOfBirth.toDateString(),
        startDate: startDate.toDateString(),
        street,
        city,
        state,
        zipCode,
        department
      });
      toggleSuccessModal(true);

      //Used to persist datas
      localStorage.setItem("employees", JSON.stringify(employeesList));

      dispatch(
        setEmployees({
          employees: employeesList,
        })
      );
    }
    else {
      toggleMissingFieldModal(true);
    }
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
          <Input id="first-name" type="text" label="First Name" onChange={(value:string)=>setFirstName(value)}></Input>
          <Input id="last-name" type="text" label="Last Name" onChange={(value:string)=>setLastName(value)}></Input>
          <DateComponent id="date-of-birth" label="Date of Birth" date={dateOfBirth} setDate={setDateOfBirth}></DateComponent>
          <DateComponent id="start-date" label="Start Date" date={startDate} setDate={setStartDate}></DateComponent>
          <fieldset className={styles.address}>
            <legend>Address</legend>

            <Input id="street" type="text" label="Street" onChange={(value:string)=>setStreet(value)}></Input>
            <Input id="city" type="text" label="City" onChange={(value:string)=>setCity(value)}></Input>
            <Select
              id="state"
              label="State"
              options={states.map((state) => state.name)}
              onChange={(value:string)=>setState(value)}
            ></Select>
            <Input id="zip-code" type="number" label="Zip Code" onChange={(value:number)=>setZipCode(value)}></Input>
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
            onChange={(value:string)=>setDepartment(value)}
          ></Select>
        </form>

        <Button label="save" onClick={() => saveEmployee()}></Button>
      </div>
      
      <Modal isOpen={isSuccessModalOpen} handleClose={() => toggleSuccessModal(false)}>
        <h1>Employee created !</h1>
      </Modal>

      <Modal isOpen={isMissingFieldModalOpen} handleClose={() => toggleMissingFieldModal(false)} closeColor="red">
        <h1 style={{color: "red"}}>Some fields are empty</h1>
      </Modal>
    </main>
  );
};
