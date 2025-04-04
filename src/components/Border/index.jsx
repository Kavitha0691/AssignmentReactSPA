import React from "react";
import styles from "./border.module.css";
import borderImg from "../../assets/border.png"; 

const Border = () => {
  return (
    <div className={styles.container}>
      <img 
        src={borderImg} 
        alt="Border" 
        className={styles.borderImage} 
      />
    </div>
  );
};

export default Border;
