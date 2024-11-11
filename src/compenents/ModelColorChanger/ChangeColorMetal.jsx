import { Title } from "../Title/Title";
import styles from "./ModelColorChanger.module.css";

export const ChangeColorMetal = ({title, colors, color, setColorBody }) => {
  return (
    <div className={styles.container}>
      <Title title={title} />
      <div className={styles.box}>
        {colors.map((item) => (
          <div key={item.color} onClick={() => setColorBody(item.color)}>
            <div
              className={`${styles.wrap} ${
                item.color === color && styles.active
              }`}
            >
              <div
                style={{background:`url(${item.img})`}}
                className={`${styles.circle}`}
              ></div>
            </div>
            <div className={`${item.color === color && styles.textActive}`}>
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
