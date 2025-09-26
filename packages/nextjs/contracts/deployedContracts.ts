// File: packages/nextjs/contracts/deployedContracts.ts

const deployedContracts = {
  31337: {
    EduCred: {
      address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512", // Update with your current deployed address
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "certificateId",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "university",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "student",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "ipfsHash",
              type: "string",
            },
          ],
          name: "CertificateIssued",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "uint256",
              name: "certificateId",
              type: "uint256",
            },
          ],
          name: "CertificateRevoked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "university",
              type: "address",
            },
          ],
          name: "UniversityRevoked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "university",
              type: "address",
            },
            {
              indexed: false,
              internalType: "string",
              name: "name",
              type: "string",
            },
          ],
          name: "UniversityVerified",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "certificates",
          outputs: [
            {
              internalType: "address",
              name: "university",
              type: "address",
            },
            {
              internalType: "address",
              name: "student",
              type: "address",
            },
            {
              internalType: "string",
              name: "studentName",
              type: "string",
            },
            {
              internalType: "string",
              name: "course",
              type: "string",
            },
            {
              internalType: "string",
              name: "ipfsHash",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "issueDate",
              type: "uint256",
            },
            {
              internalType: "bool",
              name: "isValid",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "certificateId",
              type: "uint256",
            },
          ],
          name: "getCertificate",
          outputs: [
            {
              components: [
                {
                  internalType: "address",
                  name: "university",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "student",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "studentName",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "course",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "ipfsHash",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "issueDate",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "isValid",
                  type: "bool",
                },
              ],
              internalType: "struct EduCred.CertificateData",
              name: "",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "student",
              type: "address",
            },
          ],
          name: "getStudentCertificates",
          outputs: [
            {
              internalType: "uint256[]",
              name: "",
              type: "uint256[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getTotalCertificates",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "university",
              type: "address",
            },
          ],
          name: "getUniversityName",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "student",
              type: "address",
            },
            {
              internalType: "string",
              name: "studentName",
              type: "string",
            },
            {
              internalType: "string",
              name: "course",
              type: "string",
            },
            {
              internalType: "string",
              name: "ipfsHash",
              type: "string",
            },
          ],
          name: "issueCertificate",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "university",
              type: "address",
            },
          ],
          name: "isVerifiedUniversity",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "certificateId",
              type: "uint256",
            },
          ],
          name: "revokeCertificate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "revokedCertificates",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          name: "studentCertificates",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "universityNames",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "certificateId",
              type: "uint256",
            },
          ],
          name: "verifyCertificate",
          outputs: [
            {
              internalType: "bool",
              name: "isValid",
              type: "bool",
            },
            {
              components: [
                {
                  internalType: "address",
                  name: "university",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "student",
                  type: "address",
                },
                {
                  internalType: "string",
                  name: "studentName",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "course",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "ipfsHash",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "issueDate",
                  type: "uint256",
                },
                {
                  internalType: "bool",
                  name: "isValid",
                  type: "bool",
                },
              ],
              internalType: "struct EduCred.CertificateData",
              name: "cert",
              type: "tuple",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "university",
              type: "address",
            },
          ],
          name: "verifiedUniversities",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "university",
              type: "address",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
          ],
          name: "verifyUniversity",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    },
  },
} as const;

export default deployedContracts;
