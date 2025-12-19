import styles from "./FriendsSection.module.css";

import { type FriendsSectionData } from "../../types.d.tsx";

import FriendCard from "./FriendCard.tsx";

function FriendsSection({ friendsList }: FriendsSectionData) {
    return (
        <>
            <div className={styles.friendsSection}>
                <h3 className={styles.title}>Friends</h3>

                <div className={styles.listContainer}>
                    {friendsList.map((friend) => (
                        <FriendCard
                            key={friend.user.id}
                            {...friend}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default FriendsSection;