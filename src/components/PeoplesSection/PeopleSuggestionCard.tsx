import styles from "./PeopleSuggestionCard.module.css";

import { type PeopleSuggestionCardData } from "../../types.d.tsx";

function PeopleSuggestionCard({ user }: PeopleSuggestionCardData) {
    return (
        <>
            <div className={styles.peopleSuggestionCard}>
                <div className={styles.userInfo}>
                    <img
                        src={user.avatarUrl}
                        alt={`${user.username}'s avatar`}
                        className={styles.avatar}
                    />
                    <p>{user.username}</p>
                </div>
                <button className={styles.addFriendBtn}>Add friend</button>
            </div>
        </>
    )
}

export default PeopleSuggestionCard;