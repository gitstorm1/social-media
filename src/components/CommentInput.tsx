import { useState } from 'react';
import './CommentInput.css';

function CommentInput() {
    const [text, setText] = useState("");

    const handleSubmit = () => {
        if (text.trim()) {
            console.log("Submitting:", text);
            // We will eventually add the logic to update the list here
            setText(""); // Clear the box after sending
        }
    };

    return (
        <div className="comment-input-container">
            <input 
                type="text" 
                placeholder="Write a comment..." 
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="comment-field"
            />
            <button 
                onClick={handleSubmit} 
                className="comment-submit-btn"
                disabled={!text.trim()} // Disable button if empty
            >
                Comment
            </button>
        </div>
    );
}

export default CommentInput;