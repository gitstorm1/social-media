import styles from "./BottomSection.module.css";

import LeftSection from "./LeftSection/LeftSection.tsx";
import PostsSection from "../../../components/PostsSection/PostsSection.tsx";

import { profilePostsData } from "./samplePostData.ts";

function BottomSection() {
    return (
        <section className={styles.bottomSection}>
            <LeftSection />
            <section className={styles.rightSection}>
                <PostsSection
                    posts={profilePostsData}
                />
            </section>
        </section>
    )
}

export default BottomSection;