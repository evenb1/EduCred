# EduCred - Blockchain Certificate Verification System

A decentralized Web3 application for issuing, managing, and verifying academic certificates on the blockchain. Built to combat diploma fraud and provide instant, tamper-proof credential verification.

<img width="1437" height="715" alt="Screenshot 2025-09-26 at 07 42 34" src="https://github.com/user-attachments/assets/31464ecd-69d0-454c-ae02-623b68194cf4" />


## Problem Statement

<img width="1439" height="664" alt="Screenshot 2025-09-26 at 07 43 11" src="https://github.com/user-attachments/assets/d545ffcc-c2d8-4a4d-97fb-86552fe1d9ce" />

Traditional paper-based academic certificates are vulnerable to forgery and difficult to verify, creating challenges for:
- **Employers** struggling to authenticate candidate credentials
- **Students** losing certificates or facing verification delays
- **Institutions** dealing with fraudulent claims and verification requests

EduCred solves this by leveraging blockchain technology to create permanent, verifiable, and instantly accessible digital certificates.

## Features

### For Universities
- **Secure Registration**: Self-verification system for educational institutions
- **Certificate Issuance**: Issue tamper-proof certificates directly to student wallets
- **Batch Processing**: Support for bulk certificate generation
- **Institution Dashboard**: Comprehensive management interface

### For Students
- **Wallet Integration**: Connect crypto wallets to access certificates
- **Certificate Portfolio**: View all earned credentials in one place
- **QR Code Generation**: Create scannable codes for instant verification
- **Social Sharing**: Share certificates via WhatsApp, email, and other platforms
- **IPFS Storage**: Permanent, decentralized storage of certificate documents

### For Employers
- **Instant Verification**: Scan QR codes or enter certificate IDs for immediate validation
- **Blockchain Verification**: Cryptographically verify certificate authenticity
- **No Registration Required**: Verify certificates without creating accounts

## Technology Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Blockchain**: Solidity smart contracts, Hardhat development environment
- **Web3 Integration**: Wagmi, Viem, RainbowKit
- **Storage**: IPFS for certificate documents
- **UI Components**: Custom components with Framer Motion animations
- **Wallet Support**: MetaMask, WalletConnect, and other popular wallets

## Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Universities  │    │   Blockchain     │    │    Students     │
│                 │    │                  │    │                 │
│ • Register      │───▶│ • Smart Contract │◀───│ • Connect Wallet│
│ • Issue Certs   │    │ • Certificate    │    │ • View Certs    │
│ • Manage Portal │    │   Storage        │    │ • Generate QR   │
└─────────────────┘    │ • Verification   │    └─────────────────┘
                       └──────────────────┘              │
                                │                        │
                       ┌──────────────────┐              │
                       │      IPFS        │              │
                       │                  │              │
                       │ • PDF Storage    │              │
                       │ • Decentralized  │              │
                       │ • Permanent      │              │
                       └──────────────────┘              │
                                                         │
                       ┌──────────────────┐              │
                       │    Employers     │◀─────────────┘
                       │                  │
                       │ • Scan QR Codes  │
                       │ • Verify Certs   │
                       │ • No Registration│
                       └──────────────────┘
```

## Getting Started

### Prerequisites

- Node.js 18+ and Yarn
- Git
- MetaMask browser extension

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/EduCred.git
   cd EduCred
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start local blockchain**
   ```bash
   cd packages/hardhat
   yarn chain
   ```

4. **Deploy smart contracts** (in a new terminal)
   ```bash
   cd packages/hardhat
   yarn deploy --network localhost
   ```

5. **Start the frontend** (in a new terminal)
   ```bash
   cd packages/nextjs
   yarn dev
   ```

6. **Configure MetaMask**
   - Add Hardhat Local network: RPC URL `http://127.0.0.1:8545`, Chain ID `31337`
   - Import test accounts using private keys from Hardhat output

### Usage

1. **University Registration** (`/issuer`)
   - Connect university wallet
   - Complete institution verification form
   - Access certificate issuance dashboard

2. **Issue Certificates**
   - Enter student wallet address
   - Fill certificate details (name, course, date)
   - Upload PDF certificate document
   - Submit blockchain transaction

3. **Student Access** (`/student`)
   - Connect student wallet
   - View issued certificates
   - Generate QR codes for verification
   - Download PDF certificates from IPFS

4. **Verification** (`/verify`)
   - Scan QR codes or enter certificate ID
   - View verification results instantly
   - Access certificate details and validation status

## Smart Contract

The EduCred smart contract provides:
- University verification and management
- Certificate issuance and storage
- Student certificate retrieval
- Public verification functions

### Key Functions

```solidity
function verifyUniversity(address university, string name)
function issueCertificate(address student, string studentName, string course, string ipfsHash)
function getStudentCertificates(address student) returns (uint256[])
function getCertificate(uint256 certificateId) returns (CertificateData)
```

## Deployment

### Local Development
- Hardhat local network for testing
- Mock IPFS integration
- Development-optimized builds

### Production Deployment
- Deploy contracts to Polygon mainnet/testnet
- Configure production IPFS gateway
- Set up environment variables for live deployment

## Acknowledgments

- Built with Scaffold-ETH 2 framework
- Inspired by the need for transparent, verifiable educational credentials
- Community feedback and contributions welcome

---

**EduCred** - Empowering education through blockchain technology
