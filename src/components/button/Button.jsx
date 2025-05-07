import styles from './Button.module.css';


const handleLogin = () => {
  
  console.log('Login button clicked!');
};

function Button({ text = "Login", variation = "login", onClick }) {
  return (
    <button onClick={onClick} className={styles[variation]}>
      {text}
    </button>
  );
}

export default Button;
