import { useAuth } from "./context/AuthContext";
import Header from "./components/Header/Header.tsx";
import HomePage from "./pages/HomePage/HomePage.tsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.tsx";
import RegisterPage from "./pages/RegisterPage/RegisterPage.tsx";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";

import styles from "./App.module.css";

function App() {
    const { user, isLoading } = useAuth();

    if (isLoading) return <div>Loading...</div>;

    const isAuthPage = !user;

    console.log(user);

    return (
        <div 
            className={styles.app} 
            style={{ backgroundColor: isAuthPage ? "white" : "" }}
        >
            {/* Show header only if user is logged in */}
            {user && (
                <Header />
            )}

            <main>
                {/* Routing to the correct page here */}
                {!user ? (
                    <LoginPage /> // Or <LoginPage />
                ) : (
                    <HomePage />
                )}
            </main>
        </div>
    );
}

export default App;
