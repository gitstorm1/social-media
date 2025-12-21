import styles from "./ProfilePage.module.css";

function ProfilePage() {
    return (
        <div className={styles.mainContent}>
            <section className={styles.topSection}>
                <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop"
                    alt="Cover photo."
                    className={styles.coverPhoto}
                />
                <div className={styles.basicInfo}>
                    <div className={styles.profileNameAvatar}>
                        <img
                            src="https://i.pravatar.cc/150?u=me"
                            alt="Profile picture."
                            className={styles.profilePicture}
                        />
                        <h2>Abdul Hadi</h2>
                    </div>
                    <span>Add friend / Message</span>
                </div>
            </section>
        </div>
    )
}

export default ProfilePage;