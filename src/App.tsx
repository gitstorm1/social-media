import { useAuth } from "./context/AuthContext";
import HeaderLogo from "./components/Header/components/HeaderLogo/HeaderLogo.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.tsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.tsx";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";

import styles from "./App.module.css";

function App() {
    const { user, isLoading } = useAuth();

    if (isLoading) return <div>Loading...</div>;

    const isAuthPage = !user;

    return (
        <div 
            className={styles.app} 
            style={{ backgroundColor: isAuthPage ? "white" : "" }}
        >
            {/* Show header only if user is logged in */}
            {user && (
                <header className={styles.header}>
                    <HeaderLogo />
                    <div className={styles.profileSection}>
                        <img src="https://i.pravatar.cc/150" alt="Profile" className={styles.profilePic} />
                    </div>
                </header>
            )}

            <main>
                {/* Routing to the correct page here */}
                {!user ? (
                    <RegisterPage /> // Or <LoginPage />
                ) : (
                    <HomePage />
                )}
            </main>
        </div>
    );
}

export default App;
