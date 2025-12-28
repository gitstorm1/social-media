import { useState } from "react";
import styles from "./LoginForm.module.css";

function LoginForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    function formInputChanged(element: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setFormData(prev => ({ ...prev, [element.target.name]: element.target.value }));
    };

    return (
        <form className={styles.form}>
            {/* Email */}
            <div className={styles.fieldGroup}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" onChange={formInputChanged} />
            </div>

            {/* Password */}
            <div className={styles.fieldGroup}>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={formInputChanged} />
            </div>

            <button type="button" onClick={() => {console.log("Clicked")}} className={styles.submitBtn}>Sign in</button>
        </form>
    )
}

export default LoginForm;