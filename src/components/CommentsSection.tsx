import { type CommentsSectionData } from "../types.d.tsx";

import './CommentsSection.css';

import Comment from "./Comment.tsx";

function CommentsSection({ comments }: CommentsSectionData) {
    return (
        <>
            <div className="comments-section">
                {comments.map((comment) => (
                    <Comment
                        key={comment.id}
                        {...comment}
                    />
                ))}
            </div>
        </>
    )
}

export default CommentsSection;