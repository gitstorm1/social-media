import styles from "./PeoplesSection.module.css";

function PeoplesSection() {
    return (
        <>
            <div className={styles.peoplesSection}>
                <h3 className={styles.title}>People you may know</h3>

                <div className={styles.listContainer}>
                    {/*friendsList.map((friend) => (
                        <FriendCard
                            key={friend.user.id}
                            {...friend}
                        />
                    ))*/}
                </div>
            </div>
        </>
    )
}

export default PeoplesSection;