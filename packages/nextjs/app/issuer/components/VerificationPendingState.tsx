// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AlertCircle, Building, CheckCircle, FileText, Globe, Hash, Loader2, Mail, MapPin, Upload } from "lucide-react";
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { Button } from "~~/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/ui/Card";
import { MagneticButton } from "~~/components/ui/SophisticatedComponents";
import deployedContracts from "~~/contracts/deployedContracts";

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// File: packages/nextjs/app/issuer/components/VerificationPendingState.tsx

// Contract configuration
const CHAIN_ID = 31337;
const CONTRACT_ADDRESS = deployedContracts[CHAIN_ID]?.EduCred?.address;
const CONTRACT_ABI = deployedContracts[CHAIN_ID]?.EduCred?.abi;

interface VerificationPendingStateProps {
  onVerificationComplete?: () => void;
}

export function VerificationPendingState({ onVerificationComplete }: VerificationPendingStateProps) {
  const { address } = useAccount();
  const { writeContract, data: hash, error: contractError, isPending } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  const [formData, setFormData] = useState({
    institutionName: "",
    registrationNumber: "",
    address: "",
    website: "",
    contactEmail: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!CONTRACT_ADDRESS || !CONTRACT_ABI || !address) {
      console.error("Missing contract information or wallet address");
      return;
    }

    try {
      console.log("About to call verifyUniversity...");
      console.log("Contract address:", CONTRACT_ADDRESS);
      console.log("Wallet address:", address);
      console.log("Institution name:", formData.institutionName);

      await writeContract({
        address: CONTRACT_ADDRESS as `0x${string}`,
        abi: CONTRACT_ABI,
        functionName: "verifyUniversity",
        args: [address, formData.institutionName],
      });

      console.log("writeContract called successfully");
    } catch (error) {
      console.error("Verification failed:", error);
    }
  };

  // Handle successful transaction confirmation
  if (isConfirmed && !showSuccess) {
    setShowSuccess(true);

    // Call the success handler after a short delay
    setTimeout(() => {
      if (onVerificationComplete) {
        onVerificationComplete();
      }
    }, 2000);
  }

  // Show success state
  if (showSuccess || isConfirmed) {
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

        <motion.div
          className="text-center relative z-10 max-w-md mx-auto px-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>

          <h1 className="text-3xl font-bold text-white mb-4">Verification Successful!</h1>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Your institution is now verified. You can start issuing certificates.
          </p>

          <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-left mb-6">
            <p className="text-green-200 text-sm font-medium mb-2">Transaction Details:</p>
            <p className="text-green-300 text-xs font-mono break-all mb-2">Wallet: {address}</p>
            {hash && <p className="text-green-300 text-xs font-mono break-all">Transaction hash: {hash}</p>}
          </div>

          <div className="text-gray-400 text-sm">Redirecting to dashboard...</div>
        </motion.div>
      </div>
    );
  }

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

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Building className="w-8 h-8 text-purple-400" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-4">University Verification Application</h1>
            <p className="text-gray-400 leading-relaxed">
              Register your educational institution to start issuing blockchain-verified certificates.
            </p>
          </div>

          {/* Main Form Card */}
          <Card className="bg-white/[0.02] border-white/[0.1] backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-3">
                <FileText className="w-5 h-5 text-purple-400" />
                Institution Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Institution Name */}
                <div>
                  <label className="flex text-white font-medium mb-2  items-center gap-2">
                    <Building className="w-4 h-4 text-purple-400" />
                    Institution Name
                  </label>
                  <input
                    type="text"
                    name="institutionName"
                    value={formData.institutionName}
                    onChange={handleInputChange}
                    className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="University of Nairobi"
                    required
                  />
                </div>

                {/* Registration Number */}
                <div>
                  <label className="flex text-white font-medium mb-2 items-center gap-2">
                    <Hash className="w-4 h-4 text-purple-400" />
                    Registration Number
                  </label>
                  <input
                    type="text"
                    name="registrationNumber"
                    value={formData.registrationNumber}
                    onChange={handleInputChange}
                    className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="UNIV-KE-001"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="text-white font-medium mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    Physical Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="University Way, Nairobi, Kenya"
                  />
                </div>

                {/* Website */}
                <div>
                  <label className="flex text-white font-medium mb-2  items-center gap-2">
                    <Globe className="w-4 h-4 text-purple-400" />
                    Official Website
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="https://www.uonbi.ac.ke"
                  />
                </div>

                {/* Contact Email */}
                <div>
                  <label className=" text-white font-medium mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-purple-400" />
                    Contact Email
                  </label>
                  <input
                    type="email"
                    name="contactEmail"
                    value={formData.contactEmail}
                    onChange={handleInputChange}
                    className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                    placeholder="registrar@uonbi.ac.ke"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <MagneticButton className="w-full">
                    <Button
                      type="submit"
                      disabled={isPending || isConfirming || !formData.institutionName}
                      className="w-full"
                    >
                      {isPending || isConfirming ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          {isPending ? "Submitting..." : "Confirming..."}
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Submit Verification
                        </>
                      )}
                    </Button>
                  </MagneticButton>
                </div>

                {/* Error Display */}
                {contractError && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-4 h-4 text-red-400" />
                      <span className="text-red-200 font-medium">Verification Failed</span>
                    </div>
                    <p className="text-red-300 text-sm">
                      {contractError.message || "An error occurred during verification."}
                    </p>
                  </div>
                )}

                {/* Blockchain Info */}
                <div className="p-4 bg-purple-500/5 border border-purple-500/20 rounded-xl">
                  <h4 className="text-purple-200 font-medium mb-2">Blockchain Transaction</h4>
                  <p className="text-purple-300 text-sm mb-3">
                    This will create a permanent, tamper-proof record on the blockchain. Your institution will be
                    verified and can start issuing certificates.
                  </p>
                  <div className="space-y-1">
                    <p className="text-purple-400 text-xs">
                      Contract: {CONTRACT_ADDRESS ? `${CONTRACT_ADDRESS.slice(0, 10)}...` : "Not found"}
                    </p>
                    <p className="text-purple-400 text-xs">
                      Your Wallet: {address ? `${address.slice(0, 10)}...` : "Not connected"}
                    </p>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
