import styles from "./HeaderLogo.module.css";

import logoImage from "../../../../assets/logo.png";

function HeaderLogo() {
    return (
        <div className={styles.logoSection}>
            <img
                className={styles.logoIcon}
                src={logoImage}
            />
            <h1 className={styles.appName}>Coldbook</h1>
        </div>
    );
}

export default HeaderLogo;