import styles from "./ProfilePage.module.css";

import TopSection from "./components/TopSection/TopSection";
import BottomSection from "./components/BottomSection/BottomSection";

function ProfilePage() {
    return (
        <div className={styles.mainContent}>
            <TopSection />
            <BottomSection />
        </div>
    )
}

export default ProfilePage;