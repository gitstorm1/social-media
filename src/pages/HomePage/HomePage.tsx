import PeoplesSection from "../../components/PeoplesSection/PeoplesSection.tsx";
import PostsSection from "../../components/PostsSection/PostsSection.tsx";
import FriendsSection from "../../components/FriendsSection/FriendsSection.tsx";

import styles from "./HomePage.module.css";

import { postsData, suggestionsList, friendsList } from "./sampleData.ts";

function HomePage() {
    return (
        <div className={styles.mainContent}>
            <PeoplesSection suggestionsList={suggestionsList} />
            <PostsSection posts={postsData} />
            <FriendsSection friendsList={friendsList} />
        </div>
    );
}

export default HomePage;