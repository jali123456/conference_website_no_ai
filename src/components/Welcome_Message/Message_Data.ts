// Message_Data.ts
export interface WelcomeMessage {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

export const welcomeMessages: WelcomeMessage[] = [
  {
    id: 1,
    name: "Assoc. Prof. Dr. Pakhriazad Bin Hassan Zakil",
    role: "Chairperson, ICELIN 2026",
    description: `Dear International Colleagues,

It is an honor to welcome you to ICELIN 2026. As we gather to explore the evolving landscape of law enforcement and integrity, I encourage you to take this opportunity to collaborate, engage, and inspire each other.

Looking forward to an impactful conference together.`,
    image: "https://placehold.co/500x400",
  },
  {
    id: 2,
    name: "Prof. Rahim Abdullah",
    role: "Head of Scientific Committee",
    description: `Distinguished Guests,

Welcome to a platform where academic excellence meets practical impact. Let’s drive innovation, policy change, and research in our fields. Your contributions are vital to this shared mission.`,
    image: "https://placehold.co/500x400",
  },
  {
    id: 3,
    name: "Dr. Susan Lee",
    role: "Conference Director",
    description: `Esteemed Delegates,

Thank you for joining us. Together, we will explore key challenges and solutions in law enforcement and governance. I hope you find this experience meaningful and empowering.`,
    image: "https://placehold.co/500x400",
  },
];
