import styles from './footer.module.css';
import FooterSocialLogo from './FooterSocialLogo';

const Footer = () => {
   
    return (
        <div className={styles.footer}>
            <div className={styles.footerContact}>
                <h2 className={styles.iconTitle}>Stay Connected</h2>
                <FooterSocialLogo />
            </div>
            <div className={styles.footerInformation}>
                <p>We apply enhanced health and safety measures at our Adventure Land to protect our Guests and Cast Members. Read more</p>
                <p>© Adventure • Park © & TM Lucasfilm Ltd. © MARVEL. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
