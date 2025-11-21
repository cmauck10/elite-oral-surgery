/**
 * Patient Forms Data
 * 
 * Add or remove forms and categories here to automatically update the patient forms page.
 * Each section can have an optional zipFile for a "Download All" button.
 */

export type Form = {
  name: string;
  description: string;
  file: string;
};

export type FormSection = {
  category: string;
  forms: Form[];
  zipFile?: string; // Optional: if provided, shows "Download All" button
};

export const formSections: FormSection[] = [
  {
    category: "New Patient Forms",
    zipFile: "/forms/new-patient-forms-package.zip",
    forms: [
      {
        name: "Medical History",
        description: "Medical background, medications, and allergies",
        file: "/forms/medical-history.pdf",
      },
      {
        name: "New Patient Intake",
        description: "Registration and insurance information",
        file: "/forms/new-patient-intake.pdf",
      },
      {
        name: "HIPAA Authorization",
        description: "Privacy and information sharing consent",
        file: "/forms/hipaa-form.pdf",
      },
      {
        name: "Notice of Privacy Practices",
        description: "How we protect your health information",
        file: "/forms/notice-of-privacy-practices.pdf",
      },
    ],
  },
  {
    category: "Surgical",
    forms: [
      {
        name: "Post-Operative Instructions",
        description: "Recovery guidelines and care instructions",
        file: "/forms/post-operative-instructions.pdf",
      },
    ],
  },
];

