import styles from "./BottomSection.module.css";

import PostsSection from "../../../components/PostsSection/PostsSection.tsx";

function BottomSection() {
    return (
        <section className={styles.bottomSection}>
            <section className={styles.leftSection}>
                <div className={styles.introCard}>
                    <h3>Intro</h3>
                    <div className={styles.introItem}>
                        <h4>Bio</h4>
                        <p>Full-stack developer and coffee enthusiast.</p>
                    </div>
                    <div className={styles.introItem}>
                        <h4>Location</h4>
                        <p>Karachi, Pakistan</p>
                    </div>
                </div>
                <div className={styles.friendsCard}>
                    <div className={styles.friendsCardHeader}>
                        <h3>Friends</h3>
                        <span>43 friends</span>
                    </div>
                    <div className={styles.friendsGrid}>
                        {/* You would map your friends here */}
                        {/* Use a slice(0, 9) or similar for your 5-row logic */}
                    </div>
                    <button className={styles.seeMoreBtn}>See all friends</button>
                </div>

            </section>
            <section className={styles.rightSection}>
                {/*<PostsSection />*/}
            </section>
        </section>
    )
}

export default BottomSection;