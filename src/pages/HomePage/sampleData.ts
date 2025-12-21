import { type PostData, type FriendCardData, type PeopleSuggestionCardData } from '../../types.d.tsx';

const postsData: PostData[] = [
    {
        user: {
            id: "u-001",
            username: "John",
            avatarUrl: "https://i.pravatar.cc/150?u=john",
        },
        content: "Hello, this is my first post!",
        comments: [
            {
                id: "c-101",
                user: {
                    id: "u-002",
                    username: "Abdullah",
                    avatarUrl: "https://i.pravatar.cc/150?u=abdullah",
                },
                content: "My first comment.",
            },
            {
                id: "c-102",
                user: {
                    id: "u-003",
                    username: "Ali",
                    avatarUrl: "https://i.pravatar.cc/150?u=ali",
                },
                content: "My second comment.",
            },
        ],
    },
    {
        user: {
            id: "u-004",
            username: "Usman",
            avatarUrl: "https://i.pravatar.cc/150?u=usman",
        },
        content: "Working on a new Dashboard using React and CSS Modules!",
        comments: [],
    },
    {
        user: {
            id: "u-005",
            username: "Sarah",
            avatarUrl: "https://i.pravatar.cc/150?u=sarah",
        },
        content: "Sunrise at the Grand Canyon.",
        comments: [],
    },
    {
        user: {
            id: "u-006",
            username: "Nat",
            avatarUrl: "https://i.pravatar.cc/150?u=nat",
        },
        content: "Sometimes the best debugging happens during a walk.",
        comments: [],
    },
    {
        user: {
            id: "u-007",
            username: "Fariha",
            avatarUrl: "https://i.pravatar.cc/150?u=fariha",
        },
        content: "Attempted to make homemade sourdough today.",
        comments: [],
    }
];

const suggestionsList: PeopleSuggestionCardData[] = [
    {
        user: {
            id: "s-001",
            username: "Barry Allen",
            avatarUrl: "https://i.pravatar.cc/150?u=barry",
        }
    },
    {
        user: {
            id: "s-002",
            username: "Arthur Curry",
            avatarUrl: "https://i.pravatar.cc/150?u=arthur",
        }
    },
    {
        user: {
            id: "s-003",
            username: "Victor Stone",
            avatarUrl: "https://i.pravatar.cc/150?u=victor",
        }
    },
    {
        user: {
            id: "s-004",
            username: "Hal Jordan",
            avatarUrl: "https://i.pravatar.cc/150?u=hal",
        }
    },
    {
        user: {
            id: "s-005",
            username: "Oliver Queen",
            avatarUrl: "https://i.pravatar.cc/150?u=oliver",
        }
    },
    {
        user: {
            id: "s-006",
            username: "Shiera Sanders",
            avatarUrl: "https://i.pravatar.cc/150?u=shiera",
        }
    },
    {
        user: {
            id: "s-007",
            username: "Dinah Lance",
            avatarUrl: "https://i.pravatar.cc/150?u=dinah",
        }
    },
    {
        user: {
            id: "s-008",
            username: "J'onn J'onzz",
            avatarUrl: "https://i.pravatar.cc/150?u=jonn",
        }
    }
];

const friendsList: FriendCardData[] = [
    {
        user: {
            id: "f-001",
            username: "Ali Muhammad",
            avatarUrl: "https://i.pravatar.cc/150?u=ali",
        }
    },
    {
        user: {
            id: "f-002",
            username: "Sarah Connor",
            avatarUrl: "https://i.pravatar.cc/150?u=sarah_c",
        }
    },
    {
        user: {
            id: "f-003",
            username: "Mike Ross",
            avatarUrl: "https://i.pravatar.cc/150?u=mike",
        }
    },
    {
        user: {
            id: "f-004",
            username: "Emma Watson",
            avatarUrl: "https://i.pravatar.cc/150?u=emma",
        }
    },
    {
        user: {
            id: "f-005",
            username: "Bruce Wayne",
            avatarUrl: "https://i.pravatar.cc/150?u=bruce",
        }
    },
    {
        user: {
            id: "f-006",
            username: "Diana Prince",
            avatarUrl: "https://i.pravatar.cc/150?u=diana",
        }
    },
    {
        user: {
            id: "f-007",
            username: "Peter Parker",
            avatarUrl: "https://i.pravatar.cc/150?u=peter",
        }
    },
    {
        user: {
            id: "f-008",
            username: "Tony Stark",
            avatarUrl: "https://i.pravatar.cc/150?u=tony",
        }
    },
    {
        user: {
            id: "f-009",
            username: "Natasha Romanoff",
            avatarUrl: "https://i.pravatar.cc/150?u=natasha",
        }
    },
    {
        user: {
            id: "f-010",
            username: "Clark Kent",
            avatarUrl: "https://i.pravatar.cc/150?u=clark",
        }
    },
    {
        user: {
            id: "f-011",
            username: "Wanda Maximoff",
            avatarUrl: "https://i.pravatar.cc/150?u=wanda",
        }
    },
    {
        user: {
            id: "f-012",
            username: "Steve Rogers",
            avatarUrl: "https://i.pravatar.cc/150?u=steve",
        }
    }
];

export { suggestionsList, postsData, friendsList };