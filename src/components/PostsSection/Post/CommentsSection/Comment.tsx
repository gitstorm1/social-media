import styles from './Comment.module.css';

import { type CommentData } from '../../../../types.d.tsx';

function Comment({ username, content, avatarUrl }: CommentData) {
    return (
        <>
            <div className={styles.comment}>
                <div className={styles.commentLeft}>
                    <img
                        src={avatarUrl}
                        alt={`${username}'s avatar`}
                        className={styles.avatar}
                    />
                </div>
                <div className={styles.commentRight}>
                    <p className={styles.username}>{username}</p>
                    <p className={styles.content}>{content}</p>
                </div>
                <div className={styles.commentFooter}>
                    
                </div>
            </div>
        </>
    )
}

export default Comment