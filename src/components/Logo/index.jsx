import styles from '../Header/header.module.css'; 

const Logo = () => {
  return (
    <img 
      src="./assets/logo2.png" 
      alt="park logo" 
      className={styles.logo} 
    />
  );
};

export default Logo;
