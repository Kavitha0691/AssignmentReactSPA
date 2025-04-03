import React from 'react';
import logo from '../../assets/logo2.png'; 
import styles from '../Header/header.module.css'; 

const Logo = () => {
  return (
    <img 
      src={logo}
      alt="park logo" 
      className={styles.logo} 
    />
  );
};

export default Logo;
