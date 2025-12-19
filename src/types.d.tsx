export interface User {
    id: string;
    username: string;
    avatarUrl: string;
}

export interface PostsSectionData {
    posts: PostData[];
}

export interface PostData {
    user: User;
    content: string;
    comments: CommentData[];
}

export interface CommentData {
    id: string;
    user: User;
    content: string;
}

export interface CommentsSectionData {
    comments: CommentData[];
}

export interface FriendCardData {
    user: User;
}

export interface FriendsSectionData {
    friendsList: FriendCardData[];
}