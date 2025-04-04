import styles from '../Header/header.module.css'; 
import logo from '../../assets/logo2.png';

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
