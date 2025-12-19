import PeoplesSection from "./components/PeoplesSection/PeoplesSection.tsx";
import PostsSection from "./components/PostsSection/PostsSection.tsx";
import FriendsSection from "./components/FriendsSection/FriendsSection.tsx";

import styles from "./App.module.css";

import { type PostData } from './types.d.tsx';

function App() {
    const postsData: PostData[] = [
        {
            user: {
                id: "u-001",
                username: "john_doe",
                avatarUrl: "https://i.pravatar.cc/150?u=john",
            },
            content: "Hello, this is my first post!",
            comments: [
                {
                    id: "c-101",
                    user: {
                        id: "u-002",
                        username: "nathan",
                        avatarUrl: "https://i.pravatar.cc/150?u=nathan",
                    },
                    content: "My first comment.",
                },
                {
                    id: "c-102",
                    user: {
                        id: "u-003",
                        username: "jason",
                        avatarUrl: "https://i.pravatar.cc/150?u=j",
                    },
                    content: "My second comment.",
                },
            ],
        },
        {
            user: {
                id: "u-004",
                username: "alex_tech",
                avatarUrl: "https://i.pravatar.cc/150?u=alex",
            },
            content: "Working on a new Dashboard using React and CSS Modules!",
            comments: [],
        },
        {
            user: {
                id: "u-005",
                username: "sarah_travels",
                avatarUrl: "https://i.pravatar.cc/150?u=sarah",
            },
            content: "Sunrise at the Grand Canyon was absolutely breathtaking. ☀️⛰️",
            comments: [],
        },
        {
            user: {
                id: "u-006",
                username: "dev_mindset",
                avatarUrl: "https://i.pravatar.cc/150?u=dev",
            },
            content: "Reminder: It's okay to step away from the screen when you're stuck. Sometimes the best debugging happens during a walk.",
            comments: [],
        },
        {
            user: {
                id: "u-007",
                username: "foodie_gram",
                avatarUrl: "https://i.pravatar.cc/150?u=foodie",
            },
            content: "Attempted to make homemade sourdough today. It didn't rise much, but the taste is incredible! 🥖😋",
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
