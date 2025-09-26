// File: packages/nextjs/app/student/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CertificatesGrid } from "./components/CertificatesGrid";
import { ContractStatusCard } from "./components/ContractStatusCard";
import { NoCertificatesState } from "./components/NoCertificatesState";
import { StudentHeader } from "./components/StudentHeader";
import { WalletConnectionState } from "./components/WalletConnectionState";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import { useAccount, useDisconnect, useReadContract } from "wagmi";
import { Button } from "~~/components/ui/Button";
import { MagneticButton } from "~~/components/ui/SophisticatedComponents";
import deployedContracts from "~~/contracts/deployedContracts";

// File: packages/nextjs/app/student/page.tsx

// File: packages/nextjs/app/student/page.tsx

// File: packages/nextjs/app/student/page.tsx

// File: packages/nextjs/app/student/page.tsx

// File: packages/nextjs/app/student/page.tsx

// File: packages/nextjs/app/student/page.tsx

// File: packages/nextjs/app/student/page.tsx

// File: packages/nextjs/app/student/page.tsx

// File: packages/nextjs/app/student/page.tsx

// File: packages/nextjs/app/student/page.tsx

// File: packages/nextjs/app/student/page.tsx

// File: packages/nextjs/app/student/page.tsx

// File: packages/nextjs/app/student/page.tsx

// File: packages/nextjs/app/student/page.tsx

// File: packages/nextjs/app/student/page.tsx

// File: packages/nextjs/app/student/page.tsx

// File: packages/nextjs/app/student/page.tsx

// File: packages/nextjs/app/student/page.tsx

// File: packages/nextjs/app/student/page.tsx

// File: packages/nextjs/app/student/page.tsx

// File: packages/nextjs/app/student/page.tsx

// File: packages/nextjs/app/student/page.tsx

// File: packages/nextjs/app/student/page.tsx

// File: packages/nextjs/app/student/page.tsx

// File: packages/nextjs/app/student/page.tsx

// File: packages/nextjs/app/student/page.tsx

// File: packages/nextjs/app/student/page.tsx

// File: packages/nextjs/app/student/page.tsx

// File: packages/nextjs/app/student/page.tsx

// File: packages/nextjs/app/student/page.tsx

// Contract configuration
const CHAIN_ID = 31337;
const CONTRACT_ADDRESS = deployedContracts[CHAIN_ID]?.EduCred?.address;
const CONTRACT_ABI = deployedContracts[CHAIN_ID]?.EduCred?.abi;

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

export default function StudentPage() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const router = useRouter();
  const [showWalletConflict, setShowWalletConflict] = useState(false);
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [isLoadingCertificates, setIsLoadingCertificates] = useState(false);

  // Read certificate IDs for connected student
  const {
    data: certificateIds,
    isLoading: isLoadingIds,
    error: certificateError,
    refetch: refetchCertificates,
  } = useReadContract({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: CONTRACT_ABI,
    functionName: "getStudentCertificates",
    args: [address as `0x${string}`],
    query: {
      enabled: !!address && !!CONTRACT_ADDRESS && isConnected,
    },
  });

  // Check for wallet conflicts when switching from issuer page
  useEffect(() => {
    const lastPage = sessionStorage.getItem("eduCredLastPage");
    const lastWallet = sessionStorage.getItem("eduCredLastWallet");

    if (lastPage === "issuer" && lastWallet && lastWallet !== address && isConnected) {
      setShowWalletConflict(true);
      return;
    }

    // Update tracking
    if (isConnected && address) {
      sessionStorage.setItem("eduCredLastPage", "student");
      sessionStorage.setItem("eduCredLastWallet", address);
    }
  }, [address, isConnected]);

  // Fetch full certificate details when IDs are available
  useEffect(() => {
    const fetchCertificateDetails = async () => {
      if (!certificateIds || certificateIds.length === 0) {
        setCertificates([]);
        return;
      }

      setIsLoadingCertificates(true);
      try {
        const certificatePromises = (certificateIds as bigint[]).map(async id => {
          try {
            // This would normally use another useReadContract hook or batch call
            // For now, we'll make individual contract calls
            const response = await fetch("/api/getCertificate", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                contractAddress: CONTRACT_ADDRESS,
                certificateId: id.toString(),
                chainId: CHAIN_ID,
              }),
            });

            if (!response.ok) {
              throw new Error(`Failed to fetch certificate ${id}`);
            }

            const certificateData = await response.json();

            return {
              id: id.toString(),
              studentName: certificateData.studentName || "Unknown Student",
              degree: certificateData.course || "Unknown Course",
              institution: certificateData.universityName || "Unknown Institution",
              graduationDate: new Date().toLocaleDateString(), // Could be derived from contract
              issueDate: new Date(parseInt(certificateData.issueDate) * 1000).toLocaleDateString(),
              ipfsHash: certificateData.ipfsHash || "",
              transactionHash: `0x${Math.random().toString(16).slice(2, 18)}`, // Would come from events
              qrCode: "",
              isVerified: certificateData.isValid || false,
              universityAddress: certificateData.university || "",
            } as Certificate;
          } catch (error) {
            console.error(`Error fetching certificate ${id}:`, error);
            return null;
          }
        });

        const results = await Promise.all(certificatePromises);
        const validCertificates = results.filter((cert): cert is Certificate => cert !== null);
        setCertificates(validCertificates);
      } catch (error) {
        console.error("Error fetching certificate details:", error);
        setCertificates([]);
      } finally {
        setIsLoadingCertificates(false);
      }
    };

    fetchCertificateDetails();
  }, [certificateIds]);

  // Handle wallet conflict resolution
  const handleDisconnectAndContinue = () => {
    disconnect();
    setShowWalletConflict(false);
    sessionStorage.removeItem("eduCredLastWallet");
    sessionStorage.removeItem("eduCredLastPage");
  };

  // Show wallet conflict screen
  if (showWalletConflict) {
    return (
      <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="text-center relative z-10 max-w-md mx-auto px-6">
          <div className="w-16 h-16 bg-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-8 h-8 text-orange-400" />
          </div>

          <h1 className="text-2xl font-bold text-white mb-4">Different Wallet Detected</h1>
          <p className="text-gray-400 mb-6 leading-relaxed">
            You&apos;re switching from university to student access. Please disconnect your current wallet and connect
            your student wallet.
          </p>

          <div className="space-y-3">
            <MagneticButton>
              <Button onClick={handleDisconnectAndContinue} className="w-full bg-orange-500 hover:bg-orange-600">
                Disconnect & Continue
              </Button>
            </MagneticButton>

            <MagneticButton>
              <Button variant="outline" onClick={() => router.push("/issuer")} className="w-full">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to University
              </Button>
            </MagneticButton>
          </div>

          <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl text-left">
            <p className="text-blue-200 text-sm font-medium mb-2">Wallet Separation</p>
            <p className="text-blue-300 text-xs">
              Universities and students should use different wallet addresses for security and clarity.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Show contract error if there's an issue
  if (!CONTRACT_ADDRESS) {
    return (
      <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center relative overflow-hidden">
        <div className="text-center relative z-10 max-w-md mx-auto px-6">
          <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-8 h-8 text-red-400" />
          </div>

          <h1 className="text-2xl font-bold text-white mb-4">Contract Error</h1>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Unable to connect to the EduCred smart contract. Please ensure the contract is deployed.
          </p>

          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-left">
            <p className="text-red-200 text-sm font-medium mb-2">Debug Info:</p>
            <p className="text-red-300 text-xs font-mono break-all">
              Contract Address: {CONTRACT_ADDRESS || "Not found"}
            </p>
          </div>

          <MagneticButton className="mt-6">
            <Button onClick={() => router.push("/")} variant="outline" className="w-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </MagneticButton>
        </div>
      </div>
    );
  }

  // Not connected - show wallet connection
  if (!isConnected) {
    return <WalletConnectionState />;
  }

  const isLoading = isLoadingIds || isLoadingCertificates;
  const hasCertificates = certificates.length > 0;

  return (
    <div className="min-h-screen bg-[#0A0A0F] pt-20 pb-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <StudentHeader address={address} onRefresh={() => refetchCertificates()} isLoading={isLoading} />

        {/* Contract Status Warning */}
        <ContractStatusCard contractAddress={CONTRACT_ADDRESS} certificateError={certificateError} />

        {/* Main Content */}
        {isLoading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-center py-16"
          >
            <div className="text-center">
              <div className="w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-400">Loading your certificates from blockchain...</p>
              <p className="text-gray-500 text-sm mt-2">
                Found {Array.isArray(certificateIds) ? certificateIds.length : 0} certificate(s)
              </p>
            </div>
          </motion.div>
        ) : hasCertificates ? (
          <CertificatesGrid certificates={certificates} onCertificateUpdate={setCertificates} />
        ) : (
          <NoCertificatesState
            address={address}
            onRefresh={() => refetchCertificates()}
            certificateIds={certificateIds as bigint[] | undefined}
          />
        )}
      </div>
    </div>
  );
}
