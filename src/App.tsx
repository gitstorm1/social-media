import PeoplesSection from "./components/PeoplesSection/PeoplesSection.tsx";
import PostsSection from "./components/PostsSection/PostsSection.tsx";
import FriendsSection from "./components/FriendsSection/FriendsSection.tsx";

import styles from "./App.module.css";

import { type PostData } from './types.d.tsx';

function App() {
    const postsData: PostData[] = [
        {
            username: "John",
            content: "Hello, this is my first post!",
            avatarUrl: "https://i.pravatar.cc/150?u=john",
            comments: [
                {
                    id: "akdjad",
                    username: "Nathan",
                    content: "My first comment.",
                    avatarUrl: "https://i.pravatar.cc/150?u=nathan",
                },
                {
                    id: "fggddf",
                    username: "Jason",
                    content: "My second comment.",
                    avatarUrl: "https://i.pravatar.cc/150?u=j",
                },
            ],
        },
        {
            username: "Alex",
            content: "Working on a new Dashboard using Tailwind CSS!",
            avatarUrl: "https://i.pravatar.cc/150?u=alex",
            comments: [],
        },
        {
            username: "sarah_travels",
            content: "Sunrise at the Grand Canyon was absolutely breathtaking. Highly recommend visiting at least once in your life. ☀️⛰️",
            avatarUrl: "https://i.pravatar.cc/150?u=sarah",
            comments: [],
        },
        {
            username: "dev_mindset",
            content: "Reminder: It's okay to step away from the screen when you're stuck. Sometimes the best debugging happens during a walk.",
            avatarUrl: "https://i.pravatar.cc/150?u=dev",
            comments: [],
        },
        {
            username: "foodie_gram",
            content: "Attempted to make homemade sourdough today. It didn't rise much, but the taste is incredible! 🥖😋",
            avatarUrl: "https://i.pravatar.cc/150?u=foodie",
            comments: [],
        }
    ];

    return (
        <>
            <div className={styles.app}>
                <PeoplesSection
                
                />
                <PostsSection
                    posts={postsData}
                />
                <FriendsSection
                
                />
            </div>
        </>
    )
}

export default App;
