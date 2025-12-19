import styles from './Comment.module.css';

import { type CommentData } from '../../../../types.d.tsx';

function Comment({ user, content }: CommentData) {
    return (
        <>
            <div className={styles.comment}>
                <div className={styles.commentLeft}>
                    <img
                        src={user.avatarUrl}
                        alt={`${user.username}'s avatar`}
                        className={styles.avatar}
                    />
                </div>
                <div className={styles.commentRight}>
                    <p className={styles.username}>{user.username}</p>
                    <p className={styles.content}>{content}</p>
                </div>
                <div className={styles.commentFooter}>
                    
                </div>
            </div>
        </>
    )
}

export default Comment