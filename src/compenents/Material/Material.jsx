import { Title } from "../Title/Title";
import styles from "./Material.module.css";
import leather from "../../assets/leather_baseColor.jpg";
import fabric from "../../assets/fabric_baseColor.jpg";
import denim from "../../assets/denim_baseColor.jpg";

export const Material = ({ setTexturePath, texturePath }) => {
  return (
    <div className={styles.container}>
      <Title title="Material" />
      <div className={styles.wrap}>
        <button
          onClick={() => setTexturePath(leather)}
          className={`${styles.button} ${
            texturePath === leather && styles.active
          }`}
        >
          Leather
        </button>
        <button
          onClick={() => setTexturePath(fabric)}
          className={styles.button}
        >
          Fabric
        </button>
        <button onClick={() => setTexturePath(denim)} className={styles.button}>
          Denim
        </button>
      </div>
    </div>
  );
};
