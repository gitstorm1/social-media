import { useState, useEffect } from "react";
import styles from "./RegisterForm.module.css";

const DAYS_IN_MONTH: { [key: string]: number } = {
    Jan: 31, Feb: 28, Mar: 31, Apr: 30, May: 31, Jun: 30,
    Jul: 31, Aug: 31, Sep: 30, Oct: 31, Nov: 30, Dec: 31,
};

function RegisterForm() {
    const [formData, setFormData] = useState({
        firstName: "", lastName: "", gender: "",
        day: "", month: "", year: "",
        location: "", email: "", password: "", confirmPassword: ""
    });


    function getDaysInMonth(month: string, yearStr: string) {
        if (!month) return 31;
        if (month !== "Feb") return DAYS_IN_MONTH[month] || 31;

        const year = parseInt(yearStr);
        if (!year) return 28;
        
        const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        return isLeapYear ? 29 : 28;
    }

    // Monitor month/year changes to ensure 'day' remains valid
    useEffect(() => {
        const maxDays = getDaysInMonth(formData.month, formData.year);
        if (formData.day && parseInt(formData.day) > maxDays) {
            setFormData(prev => ({ ...prev, day: maxDays.toString() }));
        }
    }, [formData.month, formData.year]);

    const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = (element) => {
        setFormData(prev => ({ ...prev, [element.target.name]: element.target.value }));
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
                        {[...Array(getDaysInMonth(formData.month, formData.year))].map((_, i) => (
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

            <button type="submit" className={styles.submitBtn}>Sign up</button>
        </form>
    )
}

export default RegisterForm;