import HomePage from "./pages/HomePage/HomePage.tsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.tsx";

import styles from "./App.module.css";

function App() {
    return (
        <div className={styles.app}>
            <header className={styles.header}>
                <div className={styles.logoSection}>
                    <div className={styles.logoIcon}>C</div>
                    <h1 className={styles.appName}>Coldbook</h1>
                </div>

                <div className={styles.profileSection}>
                    <img 
                        src="https://i.pravatar.cc/150?u=me" 
                        alt="My Profile" 
                        className={styles.profilePic} 
                    />
                    <span className={styles.arrow}>▼</span>
                </div>
            </header>
            <main>
                <HomePage />
            </main>
        </div>
    )
}

export default App;
