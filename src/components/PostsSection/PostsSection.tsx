import Post from './Post/Post.tsx';
import PostComposer from './PostComposer/PostComposer.tsx';

import styles from "./PostsSection.module.css";

import { type PostsSectionData } from '../../types.d.tsx';

function PostsSection({ posts }: PostsSectionData) {
    return (
        <>
            <div className={styles.postsSection}>
                <PostComposer />
                {posts.map((postData) => (
                    <Post
                        key={postData.user.id}
                        {...postData}
                    />
                ))}
            </div>
        </>
    )
}

export default PostsSection;