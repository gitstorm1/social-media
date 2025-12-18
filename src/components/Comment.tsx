import './Comment.css';

import { type CommentData } from '../types.d.tsx';

function Comment({ username, content, avatarUrl }: CommentData) {
    return (
        <>
            <div className="comment">
                <p>{username} {content} {avatarUrl}</p>
            </div>
        </>
    )
}

export default Comment