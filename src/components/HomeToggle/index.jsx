import React from "react";
import styles from "../../Pages/Home/home.module.css";

const HomeToggle = ({ isExpanded, onClick }) => {
  return (
    <button className={styles.homeToggle} onClick={onClick}>
      {isExpanded ? "See Less" : "See More"}
    </button>
  );
};

export default HomeToggle;
