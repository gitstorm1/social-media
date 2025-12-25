import { type PostData } from '../../../../types.d.tsx';

export const profilePostsData: PostData[] = [
    {
        user: {
            id: "me-001",
            username: "Abdul Hadi",
            avatarUrl: "https://i.pravatar.cc/150?u=me",
        },
        content: "Just finished the layout.",
        comments: [
            {
                id: "c-201",
                user: {
                    id: "u-002",
                    username: "Abdullah",
                    avatarUrl: "https://i.pravatar.cc/150?u=abdullah",
                },
                content: "Looks great! Did you use CSS Grid or Flexbox?",
            },
        ],
    },
    {
        user: {
            id: "me-001",
            username: "Abdul Hadi",
            avatarUrl: "https://i.pravatar.cc/150?u=me",
        },
        content: "When is React more suitable than Angular? I would love to hear a professional's take.",
        comments: [],
    },
    {
        user: {
            id: "me-001",
            username: "Abdul Hadi",
            avatarUrl: "https://i.pravatar.cc/150?u=me",
        },
        content: "Are 43 friends a lot? I don't know.",
        comments: [
            {
                id: "c-202",
                user: {
                    id: "u-005",
                    username: "Sarah",
                    avatarUrl: "https://i.pravatar.cc/150?u=sarah",
                },
                content: "Meh, it depends.",
            },
        ],
    },
];