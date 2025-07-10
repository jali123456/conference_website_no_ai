//Subthemes_Data.ts
//Need update on route later when clicking ReadMe
export interface Subtheme {
    id: number;
    title: string;
    description: string;
}

export const data_subthemes: Subtheme[] = [
    {
        id: 1,
        title: 'Enforcement & Law',
        description: `
        • Modernization of law enforcement and legal systems<br>
        • Technology's impact on justice and cross-border cooperation<br>
        • Best practices and policy reforms for effective enforcement`
    },
    {
        id: 2,
        title: 'Integrity & Leadership',
        description: `
        • Integrity and ethical leadership in institutions<br>
        • Anti-corruption, transparency, and accountability<br>
        • Building public trust and positive change`
    },
    {
        id: 3,
        title: 'Disaster Science & Climate',
        description:`
        • Disaster risk reduction and climate resilience<br>
        • Preparedness, response, and adaptation strategies<br>
        • Technology and collaboration for resilient communities`
    },
];