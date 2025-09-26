// File: packages/nextjs/app/student/types/certificate.ts

export interface Certificate {
  id: string;
  studentName: string;
  degree: string;
  institution: string;
  graduationDate: string;
  issueDate: string;
  ipfsHash: string;
  transactionHash: string;
  qrCode: string;
  isVerified: boolean;
  universityAddress: string;
}
