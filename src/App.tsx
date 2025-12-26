import HeaderLogo from "./components/HeaderLogo/HeaderLogo.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.tsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.tsx";

import styles from "./App.module.css";

function App() {
    return (
        <div className={styles.app}>
            {/*<header className={styles.header}>
                <HeaderLogo />

                <div className={styles.profileSection}>
                    <img 
                        src="https://i.pravatar.cc/150?u=me" 
                        alt="My Profile" 
                        className={styles.profilePic} 
                    />
                    <span className={styles.arrow}>▼</span>
                </div>
            </header>*/}
            <main>
                <RegisterPage />
            </main>
        </div>
    )
}

export default App;
