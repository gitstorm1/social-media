import styles from "./PeopleSuggestionCard.module.css";

import AddFriendBtn from "../AddFriendBtn/AddFriendBtn.tsx";

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
                <AddFriendBtn />
            </div>
        </>
    )
}

export default PeopleSuggestionCard;