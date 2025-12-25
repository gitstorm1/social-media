import styles from "./TopSection.module.css";

import MessageBtn from "../../../../components/MessageBtn/MessageBtn.tsx";
import AddFriendBtn from "../../../../components/AddFriendBtn/AddFriendBtn";

function TopSection() {
    return (
        <section className={styles.topSection}>
            <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"
                alt="Cover"
                className={styles.coverPhoto}
            />
            
            <div className={styles.basicInfo}>
                <div className={styles.profileNameAvatar}>
                    <img
                        src="https://i.pravatar.cc/150?u=me"
                        alt="Profile"
                        className={styles.profilePicture}
                    />
                    <h2>Abdul Hadi</h2>
                </div>

                <div className={styles.actionButtons}>
                    <AddFriendBtn additionalClassNames={styles.modifyActionBtnSize} />
                    <MessageBtn additionalClassNames={styles.modifyActionBtnSize} />
                </div>
            </div>
        </section>
    );
}

export default TopSection;