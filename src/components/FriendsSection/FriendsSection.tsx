import styles from "./FriendsSection.module.css";

import { type FriendsSectionData } from "../../types.d.tsx";

import FriendCard from "./FriendCard.tsx";

function FriendsSection({ friendsList }: FriendsSectionData) {
    return (
        <>
            <div className={styles.friendsSection}>
                {friendsList.map((friendCard) => {
                    return (
                        <FriendCard
                            key={friendCard.user.id}
                            {...friendCard}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default FriendsSection;