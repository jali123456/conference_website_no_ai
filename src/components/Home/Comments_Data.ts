export interface Comment {
  id: number;
  name: string;
  comment: string;
  date: string;
}

export const data_comments: Comment[] = [
    {
        id: 1,
        name: "John Doe",
        comment: "This conference was an eye-opener! The discussions on remote sensing were enlightening.",
        date: "2023-10-01",
    },
    {
        id: 2,
        name: "Jane Smith",
        comment: "I learned so much about the latest technologies in remote sensing. Highly recommend!",
        date: "2023-10-02",
    },
    {
        id: 3,
        name: "Alice Johnson",
        comment: "The keynote speakers were fantastic! Their insights into the future of remote sensing were inspiring.",
        date: "2023-10-03",
    },
];