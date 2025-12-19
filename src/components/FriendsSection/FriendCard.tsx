import styles from "./FriendCard.module.css";

function FriendsCard() {
    return (
        <>
            <div className={styles.friendsCard}>
                <div className={styles.userInfo}>
                    <img
                        src={"https://i.pravatar.cc/150?u=test"}
                        alt={`Test's avatar`}
                        className={styles.avatar}
                    />
                    <p>Ali Muhammad</p>
                </div>
                <button className={styles.messageBtn}>Message</button>
            </div>
        </>
    )
}

export default FriendsCard;