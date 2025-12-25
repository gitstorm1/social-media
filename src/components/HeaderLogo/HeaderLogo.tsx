import styles from "./HeaderLogo.module.css";

function HeaderLogo() {
    return (
        <div className={styles.logoSection}>
            <div className={styles.logoIcon}>C</div>
            <h1 className={styles.appName}>Coldbook</h1>
        </div>
    );
}

export default HeaderLogo;