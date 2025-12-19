import Post from './Post/Post.tsx';

import styles from "./PostsSection.module.css";

import { type PostsSectionData } from '../../types.d.tsx';

function PostsSection({ posts }: PostsSectionData) {
    return (
        <>
            <div className={styles.postsSection}>
                {posts.map((postData, index) => (
                    <Post
                        key={index}
                        {...postData}
                    />
                ))}
            </div>
        </>
    )
}

export default PostsSection;