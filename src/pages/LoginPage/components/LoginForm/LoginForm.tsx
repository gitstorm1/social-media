import { useState } from "react";
import { useAuth } from "../../../../context/AuthContext.tsx";
import styles from "./LoginForm.module.css";

const LOGIN_URL = 'http://localhost:5000/api/v1/auth/login'

function LoginForm() {
    const { login } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    function formInputChanged(element: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setFormData(prev => ({ ...prev, [element.target.name]: element.target.value }));
    };

    function validateFormData(): boolean {
        return true;
    }

    async function sendLoginRequest() {
        try {
            const response = await fetch(LOGIN_URL, {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Success:', data);
                login(data); 
            } else {
                console.error('Backend Error:', data.message);
            }
        } catch (err) {
            console.error('Network error:', err);
        }
    }

    const [ debounce, setDebounce ] = useState(false);

    async function loginClicked() {
        if (debounce) return;

        const isFormDataValid = validateFormData();

        if (!isFormDataValid) {
            console.log("Form data ain't valid");
            return;
        }

        setDebounce(true);

        await sendLoginRequest();

        setDebounce(false);
    }

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

            <button
                type="button"
                onClick={loginClicked}
                className={styles.submitBtn}
            >
                {debounce ? 'Signing in...' : 'Sign in'}
            </button>
        </form>
    )
}

export default LoginForm;