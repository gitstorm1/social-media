import { useState } from 'react';
import styles from './Post.module.css';

import { type PostData } from '../../../types.d.tsx';

import CommentsSection from './CommentsSection/CommentsSection.tsx';

function Post({username, content, avatarUrl, comments}: PostData) {
    const [likes, setLikes] = useState(0);

    const [isLiked, setIsLiked] = useState(false);

    const handleLikeClick = () => {
        if (isLiked) {
            setLikes(likes - 1);
            setIsLiked(false);
            return;
        }

        setLikes(likes + 1);
        setIsLiked(true);
    }

    return (
        <>
            <div className={styles.post}>
                <div className={styles.header}>
                    <img
                        src={avatarUrl}
                        alt={`${username}'s avatar`}
                        className={styles.avatar}
                    />
                    <p className={styles.username}>{username}</p>
                </div>
                <div className={styles.content}>
                    <p>{content}</p>
                </div>
                <div className={styles.footer}>
                    <button onClick={handleLikeClick} className={`${styles.likeButton} ${isLiked ? styles.active : ''}`}>Like</button>
                    <span className={styles.likeCount}>{likes} {likes === 1 ? 'like' : 'likes'}</span>
                </div>
                <CommentsSection
                    comments={comments}
                />
            </div>
        </>
    )
}

export default Post;