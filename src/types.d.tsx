export interface PostData {
    username: string;
    content: string;
    avatarUrl: string;
    comments: PostComments[];
}

export interface PostComments {
    username: string;
    content: string;
    avatarUrl: string;
}

export interface CommentsSectionData {
    comments: PostComments[]
}