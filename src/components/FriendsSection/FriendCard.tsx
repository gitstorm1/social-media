import styles from "./FriendCard.module.css";

import MessageBtn from "../MessageBtn/MessageBtn.tsx";

import { type FriendCardData } from "../../types.d.tsx";

function FriendCard({ user }: FriendCardData) {
    return (
        <>
            <div className={styles.friendCard}>
                <div className={styles.userInfo}>
                    <img
                        src={user.avatarUrl}
                        alt={`${user.username}'s avatar`}
                        className={styles.avatar}
                    />
                    <p>{user.username}</p>
                </div>
                <MessageBtn />
            </div>
        </>
    )
}

export default FriendCard;