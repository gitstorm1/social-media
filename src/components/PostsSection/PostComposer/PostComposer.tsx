import styles from "./PostComposer.module.css";

function PostComposer() {
    return (
        <div className={styles.composer}>
            <img 
                src="https://i.pravatar.cc/150?u=me" 
                alt="My Avatar" 
                className={styles.avatar} 
            />
            <input 
                type="text" 
                placeholder="What's on your mind?" 
                className={styles.input}
            />
        </div>
    );
}

export default PostComposer;