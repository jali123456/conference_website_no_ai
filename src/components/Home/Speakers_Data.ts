// speakers.ts
import Speaker001 from '@/assets/images/Speaker_Images/Speaker-001.png';
import Speaker002 from '@/assets/images/Speaker_Images/Speaker-002.png';
import Speaker003 from '@/assets/images/Speaker_Images/Speaker-003.png';
import Speaker004 from '@/assets/images/Speaker_Images/Speaker-004.png';

export interface Speaker {
    id: number;
    imagePath: string;
    name: string;
    title: string;
}

export const keynoteSpeaker: Speaker = {
    id: 1,
    imagePath: Speaker001,
    name: 'Prof. Datuk Dr. Kassim Noor Mohamed',
    title: 'Vice Chanceller of ELMU University, Malaysia'
};

export const speakers: Speaker[] = [
  {
    id: 2,
    imagePath: Speaker002,
    name: `Dato' Wan Azman Wan Omar`,
    title: 'Registrar of ELMU, Malaysia'
  },
  {
    id: 3,
    imagePath: Speaker003,
    name: 'Prof. Dr. Pakhriazad',
    title: 'Dean of School of Investigative Sciences, ELMU, Malaysia'
  },
  {
    id: 4,
    imagePath: Speaker004,
    name: 'Prof. Madya Dr. Mohamad Maulana Magiman',
    title: 'Dekan Fakulti Kemanusiaan dan Sains Sosial, UPM Malaysia'
  }
];