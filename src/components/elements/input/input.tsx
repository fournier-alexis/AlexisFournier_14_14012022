import React from "react";
import styles from "./input.module.css";

type Props = {
  id: string;
  type: string;
  label: string;
  value?: string;
  onChange?: any;
};

export const Input: React.FunctionComponent<Props> = ({
  id,
  type,
  label,
  value,
  onChange,
}) => {
  return (
    <div className={`${styles.input}`}>
      <input
        type={type}
        id={id}
        placeholder=" "
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
