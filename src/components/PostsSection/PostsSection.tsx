import { useState } from 'react';

import Post from './Post/Post.tsx';
import PostComposer from './PostComposer/PostComposer.tsx';

import styles from "./PostsSection.module.css";

import { type PostsSectionData, type PostData } from '../../types.d.tsx';

function PostsSection(postsSectionData: PostsSectionData) {

    const [ posts, setPosts ] = useState(postsSectionData.posts);

    function addPost(postData: PostData) {
        setPosts([postData, ...posts]);
    }

    return (
        <>
            <div className={styles.postsSection}>
                <PostComposer addPost={addPost} />
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