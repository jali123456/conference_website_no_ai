//Submission_Guidelines_Data.ts

export interface SubmissionGuidelinesData {
    id: number;
    title: string;
    description: string;
}

export const data_submission_guidelines: SubmissionGuidelinesData[] = [
  {
    id: 1,
    title: 'Originality',
    description: `Submissions must be original works and should not have been published or submitted elsewhere. All papers will be screened for plagiarism.`
  },
  {
    id: 2,
    title: 'Formatting',
    description: `All submissions must use the official conference template, which is available for download on the website.`
  },
  {
    id: 3,
    title: 'Language',
    description: `Manuscripts may be written in either English or Malay. Authors must ensure clarity and correct grammar.`
  },
  {
    id: 4,
    title: 'Paper Types',
    description: `The conference accepts full papers, short papers, and poster abstracts. Authors should select the appropriate category during submission.`
  },
  {
    id: 5,
    title: 'Length Requirements',
    description: `All submissions must comply with the length limits as defined in the submission template. Overlength papers may be rejected.`
  },
  {
    id: 6,
    title: 'References',
    description: `Citations and references must follow academic standards. Please include complete bibliographic information for all cited works.`
  }
];
