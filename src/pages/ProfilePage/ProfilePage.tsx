import styles from "./ProfilePage.module.css";

import TopSection from "./TopSection/TopSection";

function ProfilePage() {
    return (
        <div className={styles.mainContent}>
            <TopSection />
        </div>
    )
}

export default ProfilePage;