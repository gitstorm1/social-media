import { type PostData } from '../../../types.d.tsx';

export const profilePostsData: PostData[] = [
    {
        user: {
            id: "me-001",
            username: "Abdul Hadi",
            avatarUrl: "https://i.pravatar.cc/150?u=me",
        },
        content: "Just finished the profile header layout! The overlapping avatar was tricky but worth it. 🚀",
        comments: [
            {
                id: "c-201",
                user: {
                    id: "u-002",
                    username: "Abdullah",
                    avatarUrl: "https://i.pravatar.cc/150?u=abdullah",
                },
                content: "Looks great! Are you using CSS Grid or Flexbox for the bottom section?",
            },
        ],
    },
    {
        user: {
            id: "me-001",
            username: "Abdul Hadi",
            avatarUrl: "https://i.pravatar.cc/150?u=me",
        },
        content: "Does anyone else prefer CSS Modules over Tailwind? The local scoping feels much cleaner for large projects.",
        comments: [],
    },
    {
        user: {
            id: "me-001",
            username: "Abdul Hadi",
            avatarUrl: "https://i.pravatar.cc/150?u=me",
        },
        content: "Finally hit 1,200 friends on Coldbook! Thanks for the support everyone.",
        comments: [
            {
                id: "c-202",
                user: {
                    id: "u-005",
                    username: "Sarah",
                    avatarUrl: "https://i.pravatar.cc/150?u=sarah",
                },
                content: "Congrats Hadi! Well deserved.",
            },
        ],
    },
];