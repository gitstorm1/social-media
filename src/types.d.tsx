export interface PostData {
    username: string;
    content: string;
    avatarUrl: string;
    comments: CommentData[];
}

export interface CommentData {
    id: string,
    username: string;
    content: string;
    avatarUrl: string;
}

export interface CommentsSectionData {
    comments: CommentData[]
}