import PeoplesSection from "./components/PeoplesSection/PeoplesSection.tsx";
import PostsSection from "./components/PostsSection/PostsSection.tsx";
import FriendsSection from "./components/FriendsSection/FriendsSection.tsx";

import styles from "./App.module.css";

import { type PostData, type FriendCardData } from './types.d.tsx';

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

    const friendsList: FriendCardData[] = [
        {
            user: {
                id: "f-001",
                username: "Ali Muhammad",
                avatarUrl: "https://i.pravatar.cc/150?u=ali",
            }
        },
        {
            user: {
                id: "f-002",
                username: "Sarah Connor",
                avatarUrl: "https://i.pravatar.cc/150?u=sarah_c",
            }
        },
        {
            user: {
                id: "f-003",
                username: "Mike Ross",
                avatarUrl: "https://i.pravatar.cc/150?u=mike",
            }
        },
        {
            user: {
                id: "f-004",
                username: "Emma Watson",
                avatarUrl: "https://i.pravatar.cc/150?u=emma",
            }
        },
        {
            user: {
                id: "f-005",
                username: "Bruce Wayne",
                avatarUrl: "https://i.pravatar.cc/150?u=bruce",
            }
        },
        {
            user: {
                id: "f-006",
                username: "Diana Prince",
                avatarUrl: "https://i.pravatar.cc/150?u=diana",
            }
        },
        {
            user: {
                id: "f-007",
                username: "Peter Parker",
                avatarUrl: "https://i.pravatar.cc/150?u=peter",
            }
        },
        {
            user: {
                id: "f-008",
                username: "Tony Stark",
                avatarUrl: "https://i.pravatar.cc/150?u=tony",
            }
        },
        {
            user: {
                id: "f-009",
                username: "Natasha Romanoff",
                avatarUrl: "https://i.pravatar.cc/150?u=natasha",
            }
        },
        {
            user: {
                id: "f-010",
                username: "Clark Kent",
                avatarUrl: "https://i.pravatar.cc/150?u=clark",
            }
        },
        {
            user: {
                id: "f-011",
                username: "Wanda Maximoff",
                avatarUrl: "https://i.pravatar.cc/150?u=wanda",
            }
        },
        {
            user: {
                id: "f-012",
                username: "Steve Rogers",
                avatarUrl: "https://i.pravatar.cc/150?u=steve",
            }
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
                    friendsList={friendsList}
                />
            </div>
        </>
    )
}

export default App;
