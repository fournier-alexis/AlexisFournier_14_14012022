import styles from "./button.module.css";

type Props = {
  label: string;
  onClick: any;
};

export const Button: React.FunctionComponent<Props> = ({ label, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {label}
    </button>
  );
};
