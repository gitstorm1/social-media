import styles from "./LoginPage.module.css";

import LargeLogo from "../../components/LargeLogo/LargeLogo";
import LoginForm from "./components/LoginForm/LoginForm";

function LoginPage() {
    return (
        <div className={styles.mainContent}>
            <LargeLogo />
            <h2>Sign in</h2>
            <LoginForm />
        </div>
    );
}

export default LoginPage;