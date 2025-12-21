import styles from "./ProfilePage.module.css";

import TopSection from "./TopSection/TopSection";
import BottomSection from "./BottomSection/BottomSection";

function ProfilePage() {
    return (
        <div className={styles.mainContent}>
            <TopSection />
            <BottomSection />
        </div>
    )
}

export default ProfilePage;