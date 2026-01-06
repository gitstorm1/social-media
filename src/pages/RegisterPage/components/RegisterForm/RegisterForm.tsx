import { useState, useEffect } from "react";
import styles from "./RegisterForm.module.css";
import { useAuth } from "../../../../context/AuthContext.tsx";

const DAYS_IN_MONTH: { [key: string]: number } = {
    Jan: 31, Feb: 28, Mar: 31, Apr: 30, May: 31, Jun: 30,
    Jul: 31, Aug: 31, Sep: 30, Oct: 31, Nov: 30, Dec: 31,
};

const MONTHS_MAP: { [key: string]: string } = {
    Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
    Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'
};

const REGISTER_URL = 'http://localhost:5000/api/v1/auth/register'

function RegisterForm() {
    const { login } = useAuth();

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

    function formInputChanged(element: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        setFormData(prev => ({ ...prev, [element.target.name]: element.target.value }));
    };

    function convertFormDataToPayload() {
        const { day, month, year, ...rest } = formData;

        // Format the date into YYYY-MM-DD format
        const formattedDay = day.padStart(2, '0');
        const formattedMonth = MONTHS_MAP[month];

        const payload = {
            ...rest,
            dateOfBirth: `${year}-${formattedMonth}-${formattedDay}`,
        };

        console.log(payload);

        return payload;
    }

    function validatePayload(payload: ReturnType<typeof convertFormDataToPayload>): boolean {
        return true;
    }

    async function sendRegisterRequest(payload: ReturnType<typeof convertFormDataToPayload>) {
        try {
            const response = await fetch(REGISTER_URL, {
                method: 'POST',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
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

    const [debounce, setDebounce] = useState(false);

    async function registerClicked() {
        if (debounce) return;

        const payload = convertFormDataToPayload();

        const isPayloadValid = validatePayload(payload);

        if (!isPayloadValid) {
            console.log("Payload ain't valid");
            return;
        }

        setDebounce(true);

        await sendRegisterRequest(payload);

        setDebounce(false);
    }

    return (
        <form className={styles.form}>
            {/* First and Last Name */}
            <div className={styles.row}>
                <div className={styles.fieldGroup}>
                    <label htmlFor="firstName">First name:</label>
                    <input type="text" id="firstName" name="firstName" onChange={formInputChanged} />
                </div>
                <div className={styles.fieldGroup}>
                    <label htmlFor="lastName">Last name:</label>
                    <input type="text" id="lastName" name="lastName" onChange={formInputChanged} />
                </div>
            </div>

            {/* Gender */}
            <div className={styles.fieldGroup}>
                <label htmlFor="gender">Gender:</label>
                <input type="text" id="gender" name="gender" onChange={formInputChanged} />
            </div>

            {/* Date of Birth - Later add feature to adjust number of days based on month selected */}
            <div className={styles.fieldGroup}>
                <label>Date of birth:</label>
                <div className={styles.dobRow}>
                    <select name="day" onChange={formInputChanged}>
                        <option value="">Day</option>
                        {[...Array(getDaysInMonth(formData.month, formData.year))].map((_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1}</option>
                        ))}
                    </select>
                    <select name="month" onChange={formInputChanged}>
                        <option value="">Month</option>
                        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m, i) => (
                            <option key={i} value={m}>{m}</option>
                        ))}
                    </select>
                    <select name="year" onChange={formInputChanged}>
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
                <input type="text" id="location" name="location" onChange={formInputChanged} />
            </div>

            {/* Email */}
            <div className={styles.fieldGroup}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" onChange={formInputChanged} />
            </div>

            {/* Passwords */}
            <div className={styles.fieldGroup}>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" onChange={formInputChanged} />
            </div>
            <div className={styles.fieldGroup}>
                <label htmlFor="confirmPassword">Confirm password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" onChange={formInputChanged} />
            </div>

            <button
                type="button"
                onClick={registerClicked}
                className={styles.submitBtn}
            >
                {debounce ? 'Creating account...' : 'Sign up'}
            </button>
        </form>
    )
}

export default RegisterForm;