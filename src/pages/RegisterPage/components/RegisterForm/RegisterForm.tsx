import { useState } from "react";
import styles from "./RegisterForm.module.css";

function RegisterForm() {
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", gender: "",
        day: "", month: "", year: "",
        location: "", email: "", password: "", confirmPassword: ""
    });

    const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (element) => {
        setFormData({ ...formData, [element.target.name]: element.target.value });
    };

    return (
        <form className={styles.form}>
            {/* First and Last Name */}
            <div className={styles.row}>
                <div className={styles.fieldGroup}>
                    <label htmlFor="firstName">First name:</label>
                    <input type="text" id="firstName" name="firstName" onChange={handleChange} />
                </div>
                <div className={styles.fieldGroup}>
                    <label htmlFor="lastName">Last name:</label>
                    <input type="text" id="lastName" name="lastName" onChange={handleChange} />
                </div>
            </div>

            {/* Gender */}
            <div className={styles.fieldGroup}>
                <label htmlFor="gender">Gender:</label>
                <input type="text" id="gender" name="gender" onChange={handleChange} />
            </div>

            {/* Date of Birth - Later add feature to adjust number of days based on month selected */}
            <div className={styles.fieldGroup}>
                <label>Date of birth:</label>
                <div className={styles.dobRow}>
                    <select name="day" onChange={handleChange}>
                        <option value="">Day</option>
                        {[...Array(31)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                    </select>
                    <select name="month" onChange={handleChange}>
                        <option value="">Month</option>
                        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m, i) => (
                            <option key={i} value={m}>{m}</option>
                        ))}
                    </select>
                    <select name="year" onChange={handleChange}>
                        <option value="">Year</option>
                        {[...Array(100)].map((_, i) => (
                            <option key={i} value={2026 - i}>{2026 - i}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Location */}
            <div className={styles.fieldGroup}>
                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" onChange={handleChange} />
            </div>

            {/* Email */}
            <div className={styles.fieldGroup}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" onChange={handleChange} />
            </div>

            {/* Passwords */}
            <div className={styles.fieldGroup}>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={handleChange} />
            </div>
            <div className={styles.fieldGroup}>
                <label htmlFor="confirmPassword">Confirm password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" onChange={handleChange} />
            </div>

            <button type="submit" className={styles.submitBtn}>Sign Up</button>
        </form>
    )
}

export default RegisterForm;