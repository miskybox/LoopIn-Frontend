import ImageContainer from "../../components/imagecontainer/ImageContainer";
import styles from "./Login.module.css";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";
import IconContainer from "../../components/iconContainer/IconContainer";

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <ImageContainer imgPath={"https://viajarporescocia.com/contenido/uploads/HIGHLANDS_principal-1.jpg"} />
            <h2 className={styles.welcome}>¡Bienvenide!</h2>
            <form className={styles.form}>
                <div className={styles.inputWrapper}>
                    <Input variation="login" placeHolder="Email" type="email" />
                </div>
                <div className={styles.passwordWrapper}>
                    <Input variation="login" placeHolder="Contraseña" type="password" />
                </div>
                <p className={styles.forgot}>¿Olvidaste la contraseña?</p>
                <button type="submit" className={styles.buttonlogin}>Login</button>
                <p className={styles.register}>
                    ¿No estás registrado? <span className={styles.reglink}>Regístrate ahora</span>
                </p>
            </form>
            <div className={styles.socialLogin}>
                <hr />
                <p>O continuar con</p>
                <div className={styles.icons}>
                    <IconContainer variation="google" />
                    <IconContainer variation="apple" />
                    <IconContainer variation="facebook" />
                </div>
            </div>
        </div>
    );
};

export default Login;
