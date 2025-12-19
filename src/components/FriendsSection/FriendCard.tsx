import styles from "./FriendCard.module.css";

import { type FriendCardData } from "../../types.d.tsx";

function FriendCard({ user }: FriendCardData) {
    return (
        <>
            <div className={styles.friendsCard}>
                <div className={styles.userInfo}>
                    <img
                        src={user.avatarUrl}
                        alt={`${user.username}'s avatar`}
                        className={styles.avatar}
                    />
                    <p>{user.username}</p>
                </div>
                <button className={styles.messageBtn}>Message</button>
            </div>
        </>
    )
}

export default FriendCard;