import './Comment.css';

import { type CommentData } from '../types.d.tsx';

function Comment({ username, content, avatarUrl }: CommentData) {
    return (
        <>
            <div className="comment">
                <div className="comment-left">
                    <img
                        src={avatarUrl}
                        alt={`${username}'s avatar`}
                        className="avatar"
                    />
                </div>
                <div className="comment-right">
                    <p className='username'>{username}</p>
                    <p className='content'>{content}</p>
                </div>
                <div className="comment-footer">
                    
                </div>
            </div>
        </>
    )
}

export default Comment