import { type CommentsSectionData } from "../types.d.tsx";

import './CommentsSection.css';

import Comment from "./Comment.tsx";
import CommentInput from "./CommentInput.tsx";

function CommentsSection({ comments }: CommentsSectionData) {
    return (
        <>
            <div className="comments-section">
                <CommentInput />
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