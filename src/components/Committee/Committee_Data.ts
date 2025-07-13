// Committee_Data.ts

export interface CommitteeMember {
  name: string;
  title?: string; // Optional title
}

export interface CommitteeGroup {
  committeeName: string;
  members: CommitteeMember[];
}

export const committees: CommitteeGroup[] = [
  {
    committeeName: 'Advisory Board',
    members: [
      {
        name: 'Prof. Azad',
        title: 'Chairman',
      },
      {
        name: 'Dr. Lim Cheng Huat',
      },
      {
        name: 'Assoc. Prof. Noraini Binti Ahmad',
        title: 'Member',
      },
    ],
  },
  {
    committeeName: 'Scientific Committee',
    members: [
      {
        name: 'Dr. John Doe',
        title: 'Head Reviewer',
      },
      {
        name: 'Dr. Siti Aishah',
      },
      {
        name: 'Prof. Ravi Chandran',
        title: 'Senior Advisor',
      },
    ],
  },
];
