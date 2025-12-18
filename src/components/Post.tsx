import { useState } from 'react';
import './Post.css';

import { type PostData } from '../types.d.tsx';

import CommentsSection from './CommentsSection';

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
            <div className={"post"}>
                <div className={"post-header"}>
                    <img
                        src={avatarUrl}
                        alt={`${username}'s avatar`}
                        className="avatar"
                    />
                    <p className='username'>{username}</p>
                </div>
                <div className="post-content">
                    <p>{content}</p>
                </div>
                <div className="post-footer">
                    <button onClick={handleLikeClick} className={`like-button ${isLiked ? 'active' : ''}`}>Like</button>
                    <span>{likes} {likes === 1 ? 'like' : 'likes'}</span>
                </div>
                <CommentsSection
                    comments={comments}
                />
            </div>
        </>
    )
}

export default Post;