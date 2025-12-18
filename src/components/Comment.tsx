import './Comment.css';

import { type CommentData } from '../types.d.tsx';

function Comment({ username, content, avatarUrl }: CommentData) {
    return (
        <>
            <div className="comment">
                <div className={"comment-header"}>
                    <img
                        src={avatarUrl}
                        alt={`${username}'s avatar`}
                        className="avatar"
                    />
                    <p>{username}</p>
                </div>
                <div className="comment-content">
                    <p>{content}</p>
                </div>
                <div className="comment-footer">
                    
                </div>
            </div>
        </>
    )
}

export default Comment