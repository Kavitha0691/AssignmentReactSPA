import React from "react";
import styles from "./border.module.css";

const Border = () => {
  return (
    <div className={styles.container}>
      <img 
        src="./assets/border.png" 
        alt="Border" 
        className={styles.borderImage} 
      />
    </div>
  );
};

export default Border;
