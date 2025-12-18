import { useState } from 'react';
import styles from './CommentInput.module.css';

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
        <div className={styles.commentInputContainer}>
            <input 
                type="text" 
                placeholder="Write a comment..." 
                value={text}
                onChange={(e) => setText(e.target.value)}
                className={styles.commentField}
            />
            <button 
                onClick={handleSubmit} 
                className={styles.commentSubmitBtn}
                disabled={!text.trim()} // Disable button if empty
            >
                Comment
            </button>
        </div>
    );
}

export default CommentInput;