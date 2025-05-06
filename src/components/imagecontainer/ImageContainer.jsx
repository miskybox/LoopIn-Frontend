import styles from "../imagecontainer/ImageContainer.module.css"; 

function ImageContainer({ imgPath }) {
  return (
    <section className={styles.container}>
      <img src={imgPath} alt="imagen" style={{ height: "100%", width: "100%" }} />
    </section>
  );
}

export default ImageContainer;
