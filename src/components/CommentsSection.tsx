import { type CommentsSectionData } from "../types.d.tsx";

import './CommentsSection.css';

function CommentsSection({ comments }: CommentsSectionData) {
    return (
        <>
            <div className="comments-section">
                {comments.map((comment, index) => (
                    <div key={index} className="comment">
                        {comment.content}
                    </div>
                ))}
            </div>
        </>
    )
}

export default CommentsSection;