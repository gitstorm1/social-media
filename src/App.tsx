import Post from './components/Post.tsx';
import './App.css';

import reactLogo from "./assets/react.svg";

function App() {
    const postsData = [
        {
            username: "john_doe",
            content: "Hello, this is my first post!",
            avatarUrl: reactLogo
        },
        {
            username: "alex_tech",
            content: "Just finished building a new dashboard with Tailwind CSS. The utility-first approach is a game changer! 🚀",
            avatarUrl: "https://i.pravatar.cc/150?u=alex"
        },
        {
            username: "sarah_travels",
            content: "Sunrise at the Grand Canyon was absolutely breathtaking. Highly recommend visiting at least once in your life. ☀️⛰️",
            avatarUrl: "https://i.pravatar.cc/150?u=sarah"
        },
        {
            username: "dev_mindset",
            content: "Reminder: It's okay to step away from the screen when you're stuck. Sometimes the best debugging happens during a walk.",
            avatarUrl: "https://i.pravatar.cc/150?u=dev"
        },
        {
            username: "foodie_gram",
            content: "Attempted to make homemade sourdough today. It didn't rise much, but the taste is incredible! 🥖😋",
            avatarUrl: "https://i.pravatar.cc/150?u=foodie"
        }
    ];

    return (
        <>
            <div className="app">
                {postsData.map((postData, index) => (
                    <Post
                        key={index}
                        {...postData}
                    />
                ))}
            </div>
        </>
    )
}

export default App;
