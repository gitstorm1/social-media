import { useState } from "react";
import styles from "./RegisterPage.module.css";
import LargeLogo from "../../components/LargeLogo/LargeLogo";
import RegisterForm from "./components/RegisterForm/RegisterForm";

function RegisterPage() {
    return (
        <div className={styles.mainContent}>
            <LargeLogo />
            <h2>Create account</h2>
            <RegisterForm />
        </div>
    );
}

export default RegisterPage;