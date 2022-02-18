import { parseInt, range } from "lodash";
import { useState } from "react";
import DatePicker from "react-datepicker";
import styles from "./dateComponent.module.css"

type Props = {
  id: string;
  label: string;
  date: Date;
  setDate: any
}

export const DateComponent:React.FunctionComponent<Props> = ({
  id,
  label,
  date,
  setDate
}) => {
  const years = range(1990, new Date().getFullYear() + 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className={styles.datepicker}>
    <DatePicker
      id={id}
      startDate={new Date()}
      maxDate={new Date()}
      selected={date}
      onChange={(date: any) => setDate(date)}
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div className={styles.header}>
          <button className={styles.nav} onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            {"<"}
          </button>
          <select
            className={styles.select}
            value={date.getFullYear()}
            onChange={({ target: { value } }) => changeYear(parseInt(value))}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select className={styles.select}
            value={months[date.getMonth()]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button className={styles.nav} onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
            {">"}
          </button>
        </div>
      )}
    />
    <label htmlFor={id}>{label}</label>
    </div>
  )
}
