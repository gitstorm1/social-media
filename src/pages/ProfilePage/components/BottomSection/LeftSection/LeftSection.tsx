import styles from "./LeftSection.module.css";

import { useAuth } from "../../../../../context/AuthContext";

function LeftSection() {
    const context = useAuth();

    const user = context.user;

    return (
        <section className={styles.leftSection}>
            <div className={styles.introCard}>
                <h3>Intro</h3>
                <div className={styles.introItem}>
                    <h4>Bio</h4>
                    <p>{user.bio ?? "No bio."}</p>
                </div>
                <div className={styles.introItem}>
                    <h4>Location</h4>
                    <p>{user.location}</p>
                </div>
            </div>
            <div className={styles.friendsCard}>
                <div className={styles.friendsCardHeader}>
                    <h3>Friends</h3>
                    <span>43 friends</span>
                </div>
                <div className={styles.friendsGrid}>
                    <img className={styles.friendPhoto} src="https://i.pravatar.cc/150?img=17" alt="(Username)" />
                    <img className={styles.friendPhoto} src="https://i.pravatar.cc/150?img=17" alt="(Username)" />
                    <img className={styles.friendPhoto} src="https://i.pravatar.cc/150?img=17" alt="(Username)" />
                    <img className={styles.friendPhoto} src="https://i.pravatar.cc/150?img=17" alt="(Username)" />
                    <img className={styles.friendPhoto} src="https://i.pravatar.cc/150?img=17" alt="(Username)" />
                    <img className={styles.friendPhoto} src="https://i.pravatar.cc/150?img=17" alt="(Username)" />
                    <img className={styles.friendPhoto} src="https://i.pravatar.cc/150?img=17" alt="(Username)" />
                    <img className={styles.friendPhoto} src="https://i.pravatar.cc/150?img=17" alt="(Username)" />
                    <img className={styles.friendPhoto} src="https://i.pravatar.cc/150?img=17" alt="(Username)" />
                    {/* You would map your friends here */}
                    {/* Use a slice(0, 9) or similar for your 5-row logic */}
                </div>
                <button className={styles.seeMoreBtn}>See all friends</button>
            </div>

        </section>
    )
}

export default LeftSection;