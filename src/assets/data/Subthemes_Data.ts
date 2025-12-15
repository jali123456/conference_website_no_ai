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
      • Legal Reforms and Policy Effectiveness<br>
      • Criminal Justice and Law Enforcement Innovations<br>
      • Technology and AI in Enforcement & Investigation<br>
      • Cybercrime, Digital Forensics, and Legal Challenges<br>
      • Human Rights in Law Enforcement<br>
      • Community Policing and Public Safety<br>
      • Border Security and Transnational Crime<br>
    `
  },
  {
    id: 2,
    title: 'Environmental, Sustainability, Natural Resources & Tourism Enforcement',
    description:`
      • Law and Enforcement of Environmental Crimes<br>
      • Regulatory Frameworks for Sustainable Resource Extraction<br>
      • Enforcement of ESG Standards and Corporate Accountability<br>
      • Combating Illegal Wildlife Trade, Poaching, and Bio-Piracy<br>
      • Indigenous Rights and Community-Led Conservation Enforcement<br>
      • Transboundary Pollution and International Environmental Law<br>
      • Waste Management, Circular Economy, and Pollution Control<br>
      • Technological Solutions for Environmental Monitoring and Compliance
    `
  },
  {
    id: 3,
    title: 'Integrity & Leadership',
    description: `
      • Governance Ethics and Accountability<br>
      • Institutional Integrity and Anti-Corruption Strategies<br>
      • Leadership in Public Institutions and Enforcement Bodies<br>
      • Transparency and Public Trust<br>
      • Integrity in Higher Education and Research<br>
      • Ethical Decision-Making in Crisis and Conflict<br>
      • Building a Culture of Integrity in Organizations<br>
      • Values-Based Leadership for Sustainable Governance
    `
  },
  {
    id: 4,
    title: 'Disaster Science & Climate Resilience',
    description: `
      • Enforcement of Environmental and Climate Regulations<br>
      • Climate Justice and Legal Frameworks<br>
      • Disaster Risk Management and Emergency Response Systems<br>
      • Interagency Coordination during Crises<br>
      • Policy and Leadership in Climate Adaptation<br>
      • Community Resilience and Local Governance<br>
      • Technology in Disaster Preparedness and Monitoring<br>
      • Enforcement Challenges in Climate-Induced Migration
    `
  },
];
