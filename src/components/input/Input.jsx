import styles from "./Input.module.css";

const Input = ({ label, value, onChange, placeholder }) => {
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
