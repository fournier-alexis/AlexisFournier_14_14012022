import React, { useState } from "react";
import styles from "./select.module.css";

type Props = {
  id: string;
  label: string;
  options: string[];
  onChange?: any;
};

export const Select: React.FunctionComponent<Props> = ({
  id,
  label,
  options,
  onChange
}) => {
  const [option, setOption] = useState(undefined);

  const onselect = (e: any) => {
    setOption(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div className={`${styles.select} ${option ? styles.filled : ""}`}>
      <select
        name={id}
        id={id}
        onChange={(e: any) => {
          onselect(e);
        }}
      >
        {options.map((option, key) => {
          return (
            <option key={key} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
