import React from 'react';
import Logo from "../Logo";
import styles from "./header.module.css";

const Header = ({ title }) => {
  return (
    <div className={styles.header}>
      <Logo />
      <h1 className={styles.pagetitle}>{title}</h1> {/* Render the title here */}
    </div>
  );
};

export default Header;
