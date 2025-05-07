import styles from './LogIn.module.css';
import ImageContainer from "../../components/imagecontainer/imagecontainer";

function Login() {
  return (
    <main>
      <ImageContainer imgPath="/path/to/your/image.jpg" />
      {/* Aquí va tu formulario de login */}
    </main>
  );
}

export default Login;


/*<>
<h1 className={styles.title}>My Events</h1> 
<div style={{ display: "flex", gap: "1rem" }}>
  <IconContainer variation="google" />
  <IconContainer variation="facebook" />
  <IconContainer variation="apple" />
</div>
  <ProductCard />
</>
*/
