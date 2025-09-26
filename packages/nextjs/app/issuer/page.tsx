// File: packages/nextjs/app/issuer/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { DashboardLayout } from "./components/DashboardLayout";
import { VerificationPendingState } from "./components/VerificationPendingState";
import { WalletConnectionState } from "./components/WalletConnectionState";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import { useAccount, useDisconnect, useReadContract } from "wagmi";
import { Button } from "~~/components/ui/Button";
import { MagneticButton } from "~~/components/ui/SophisticatedComponents";
import deployedContracts from "~~/contracts/deployedContracts";

// File: packages/nextjs/app/issuer/page.tsx

// File: packages/nextjs/app/issuer/page.tsx

// File: packages/nextjs/app/issuer/page.tsx

// File: packages/nextjs/app/issuer/page.tsx

// File: packages/nextjs/app/issuer/page.tsx

// File: packages/nextjs/app/issuer/page.tsx

// File: packages/nextjs/app/issuer/page.tsx

// File: packages/nextjs/app/issuer/page.tsx

// File: packages/nextjs/app/issuer/page.tsx

// File: packages/nextjs/app/issuer/page.tsx

// File: packages/nextjs/app/issuer/page.tsx

// File: packages/nextjs/app/issuer/page.tsx

// File: packages/nextjs/app/issuer/page.tsx

// File: packages/nextjs/app/issuer/page.tsx

// File: packages/nextjs/app/issuer/page.tsx

// File: packages/nextjs/app/issuer/page.tsx

// File: packages/nextjs/app/issuer/page.tsx

// File: packages/nextjs/app/issuer/page.tsx

// File: packages/nextjs/app/issuer/page.tsx

// File: packages/nextjs/app/issuer/page.tsx

// File: packages/nextjs/app/issuer/page.tsx

// File: packages/nextjs/app/issuer/page.tsx

// File: packages/nextjs/app/issuer/page.tsx

// File: packages/nextjs/app/issuer/page.tsx

// File: packages/nextjs/app/issuer/page.tsx

// File: packages/nextjs/app/issuer/page.tsx

// File: packages/nextjs/app/issuer/page.tsx

// File: packages/nextjs/app/issuer/page.tsx

// File: packages/nextjs/app/issuer/page.tsx

// File: packages/nextjs/app/issuer/page.tsx

// Contract configuration
const CHAIN_ID = 31337; // Local hardhat chain
const CONTRACT_ADDRESS = deployedContracts[CHAIN_ID]?.EduCred?.address;
const CONTRACT_ABI = deployedContracts[CHAIN_ID]?.EduCred?.abi;

export default function IssuerPage() {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const router = useRouter();
  const [showWalletConflict, setShowWalletConflict] = useState(false);
  const [manualCheck, setManualCheck] = useState(false);

  // Try to check verification status, but don't block if it fails
  const {
    data: isVerified,
    error: verificationError,
    refetch: recheckVerification,
  } = useReadContract({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: CONTRACT_ABI,
    functionName: "verifiedUniversities",
    args: [address as `0x${string}`],
    query: {
      enabled: !!address && !!CONTRACT_ADDRESS && isConnected && !manualCheck,
      retry: false, // Don't retry on error
    },
  });

  // Check for wallet conflicts when switching from student page
  useEffect(() => {
    const lastPage = sessionStorage.getItem("eduCredLastPage");
    const lastWallet = sessionStorage.getItem("eduCredLastWallet");

    if (lastPage === "student" && lastWallet && lastWallet !== address && isConnected) {
      setShowWalletConflict(true);
      return;
    }

    // Update tracking
    if (isConnected && address) {
      sessionStorage.setItem("eduCredLastPage", "issuer");
      sessionStorage.setItem("eduCredLastWallet", address);
    }
  }, [address, isConnected]);

  console.log("Debug - Address:", address);
  console.log("Debug - Is Connected:", isConnected);
  console.log("Debug - Contract Address:", CONTRACT_ADDRESS);
  console.log("Debug - Is Verified:", isVerified);
  console.log("Debug - Verification Error:", verificationError);

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
            You&apos;re switching from student to university access. Please disconnect your current wallet and connect
            your university wallet.
          </p>

          <div className="space-y-3">
            <MagneticButton>
              <Button onClick={handleDisconnectAndContinue} className="w-full bg-orange-500 hover:bg-orange-600">
                Disconnect & Continue
              </Button>
            </MagneticButton>

            <MagneticButton>
              <Button variant="outline" onClick={() => router.push("/student")} className="w-full">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Student
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

  // If we can't determine verification status yet, show loading
  if (isVerified === undefined) {
    return (
      <div className="min-h-screen bg-[#0A0A0F] flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-purple-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Checking university verification status...</p>
        </div>
      </div>
    );
  }

  // If verification check succeeded and user is not verified, show registration
  if (isVerified === false) {
    return (
      <VerificationPendingState
        onVerificationComplete={() => {
          setManualCheck(true);
          recheckVerification();
        }}
      />
    );
  }

  // If verified or manual check mode, show dashboard
  return <DashboardLayout />;
}
