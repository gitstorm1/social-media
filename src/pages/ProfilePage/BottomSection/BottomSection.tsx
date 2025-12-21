import styles from "./BottomSection.module.css";

import LeftSection from "./LeftSection/LeftSection.tsx";

import PostsSection from "../../../components/PostsSection/PostsSection.tsx";

function BottomSection() {
    return (
        <section className={styles.bottomSection}>
            <LeftSection />
            <section className={styles.rightSection}>
                {/*<PostsSection />*/}
            </section>
        </section>
    )
}

export default BottomSection;