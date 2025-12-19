import styles from "./FriendsSection.module.css";

import FriendsCard from "./FriendCard.tsx";

function FriendsSection() {
    return (
        <>
            <div className={styles.friendsSection}>
                <FriendsCard />
                <FriendsCard />
                <FriendsCard />
                <FriendsCard />
            </div>
        </>
    )
}

export default FriendsSection;