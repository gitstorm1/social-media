import './Post.css';

interface PostProps {
    username: string;
    content: string;
    avatarUrl: string;
}

function Post({username, content, avatarUrl}: PostProps) {
    return (
        <>
            <div className={"post"}>
                <div className={"post-header"}>
                    <img
                        src={avatarUrl}
                        alt={`${username}'s avatar`}
                        className="avatar"
                    />
                    <p>{username}</p>
                </div>
                <div className="post-content">
                    <p>{content}</p>
                </div>
            </div>
        </>
    )
}

export default Post;