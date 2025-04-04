import footerImg from '@/assets/images/footer.png';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={footerImg} alt="Footer" />
        </footer>
    );
};

export default Footer;
