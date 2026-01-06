import { useState } from "react";

import type { PostData } from "../../../types.d";

import styles from "./PostComposer.module.css";

import { useAuth } from "../../../context/AuthContext";

interface PostComposerProps {
  addPost: (postData: PostData) => void;
}

function PostComposer({ addPost }: PostComposerProps) {
    const { user } = useAuth();
    
    const [content, setContent] = useState("");

    function onInputChanged(event: React.ChangeEvent<HTMLInputElement>) {
        setContent(event.target.value);
    }

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
        if (!content) return;
        
        if (event.key == 'Enter') {
            addPost(
                {
                    user: {
                        id: user.id,
                        username: `${user.firstName} ${user.lastName}`,
                        avatarUrl: user.avatarUrl,
                    },
                    content: content,
                    comments: [],
                }
            );
        }
    }

    return (
        <div className={styles.composer}>
            <img 
                src="https://i.pravatar.cc/150?u=me" 
                alt="My Avatar" 
                className={styles.avatar}
            />
            <input 
                type="text" 
                placeholder="What's on your mind?" 
                className={styles.input}
                onChange={onInputChanged}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}

export default PostComposer;