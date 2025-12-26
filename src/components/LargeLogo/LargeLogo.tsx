import styles from "./LargeLogo.module.css";

import logoImage from "../../assets/logo.png";

function LargeLogo() {
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

export default LargeLogo;