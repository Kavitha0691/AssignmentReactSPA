import React from "react";
import styles from "./border.module.css";
import borderImage from "../../assets/border.png"; // Import the border image

const Border = () => {
  return (
    <div className={styles.container}>
      <img src={borderImage} alt="Border" className={styles.borderImage} />
    </div>
  );
};

export default Border;
