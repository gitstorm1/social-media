import styles from "./TopSection.module.css";

import MessageBtn from "../../../../components/MessageBtn/MessageBtn.tsx";
import AddFriendBtn from "../../../../components/AddFriendBtn/AddFriendBtn";

import { useAuth } from "../../../../context/AuthContext.tsx";

function TopSection() {
    const context = useAuth();

    const user = context.user;

    return (
        <section className={styles.topSection}>
            <img
                src={user.coverUrl ?? "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"}
                alt="Cover"
                className={styles.coverPhoto}
            />
            
            <div className={styles.basicInfo}>
                <div className={styles.profileNameAvatar}>
                    <img
                        src={user.avatarUrl ?? "https://i.pravatar.cc/150?u=me"}
                        alt="Profile"
                        className={styles.profilePicture}
                    />
                    <h2>{`${user.firstName} ${user.lastName}`}</h2>
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