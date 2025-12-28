import styles from "./Header.module.css";

import HeaderLogo from "./components/HeaderLogo/HeaderLogo";

export default function Header() {
    return (
        <header className={styles.header}>
            <HeaderLogo />
            <div className={styles.profileSection}>
                <img src="https://i.pravatar.cc/150?u=me" alt="My Profile" className={styles.profilePic} />
                <span className={styles.arrow}>▼</span>
            </div>
        </header>
    );
}