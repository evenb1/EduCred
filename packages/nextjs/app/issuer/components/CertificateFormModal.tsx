// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  Calendar,
  CheckCircle,
  FileText,
  GraduationCap,
  Loader2,
  Shield,
  Upload,
  User,
  Wallet,
  X,
} from "lucide-react";
import { useAccount, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { Button } from "~~/components/ui/Button";
import { Card, CardContent } from "~~/components/ui/Card";
import { MagneticButton } from "~~/components/ui/SophisticatedComponents";
import deployedContracts from "~~/contracts/deployedContracts";

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

// File: packages/nextjs/app/issuer/components/CertificateFormModal.tsx

interface CertificateFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Contract configuration
const CHAIN_ID = 31337; // Local hardhat chain
const CONTRACT_ADDRESS = deployedContracts[CHAIN_ID]?.EduCred?.address;
const CONTRACT_ABI = deployedContracts[CHAIN_ID]?.EduCred?.abi;

export function CertificateFormModal({ isOpen, onClose }: CertificateFormModalProps) {
  const { address } = useAccount();
  const [formData, setFormData] = useState({
    studentName: "",
    studentAddress: "",
    course: "",
    graduationDate: "",
    certificateFile: null as File | null,
  });

  // Smart contract interaction
  const { writeContract, data: hash, isPending: isWritePending, error: writeError } = useWriteContract();

  const {
    isLoading: isConfirming,
    isSuccess: isConfirmed,
    error: receiptError,
  } = useWaitForTransactionReceipt({
    hash,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({ ...prev, certificateFile: e.target.files![0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted!", formData);

    if (!CONTRACT_ADDRESS || !CONTRACT_ABI) {
      alert("Smart contract not deployed. Please deploy the EduCred contract first.");
      return;
    }

    try {
      // For now, use placeholder IPFS hash until IPFS integration is ready
      const placeholderIpfsHash = "QmPlaceholder" + Date.now();

      console.log("About to call writeContract...");

      // Call the smart contract
      writeContract({
        address: CONTRACT_ADDRESS as `0x${string}`,
        abi: CONTRACT_ABI,
        functionName: "issueCertificate",
        args: [formData.studentAddress as `0x${string}`, formData.studentName, formData.course, placeholderIpfsHash],
      });

      console.log("writeContract called successfully");
    } catch (error) {
      console.error("Transaction failed:", error);
    }
  };

  const resetForm = () => {
    setFormData({
      studentName: "",
      studentAddress: "",
      course: "",
      graduationDate: "",
      certificateFile: null,
    });
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  // Transaction states
  const isLoading = isWritePending || isConfirming;
  const hasError = writeError || receiptError;
  const isSuccess = isConfirmed;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="w-full max-w-2xl max-h-[90vh] overflow-y-auto"
      >
        <Card variant="glass" className="bg-[#0A0A0F]/95 border-white/[0.1]">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Issue New Certificate</h2>
              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-full bg-white/[0.1] hover:bg-white/[0.2] flex items-center justify-center transition-colors"
              >
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            {/* Contract Status Warning */}
            {!CONTRACT_ADDRESS && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-red-400" />
                  <div>
                    <h3 className="text-red-200 font-medium">Smart Contract Not Deployed</h3>
                    <p className="text-red-300 text-sm">
                      Please deploy the EduCred contract first using: yarn deploy --network localhost
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Success State */}
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <div>
                    <h3 className="text-green-200 font-medium">Certificate Issued Successfully!</h3>
                    <p className="text-green-300 text-sm">Transaction hash: {hash}</p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Error State */}
            {hasError && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-red-400" />
                  <div>
                    <h3 className="text-red-200 font-medium">Transaction Failed</h3>
                    <p className="text-red-300 text-sm">
                      {writeError?.message || receiptError?.message || "Unknown error occurred"}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Student Information */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <User className="w-5 h-5 text-purple-400" />
                  Student Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Student Name</label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Student Wallet Address</label>
                    <input
                      type="text"
                      name="studentAddress"
                      value={formData.studentAddress}
                      onChange={handleInputChange}
                      className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors font-mono text-sm"
                      placeholder="0x..."
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Certificate Details */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-blue-400" />
                  Certificate Details
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Course/Degree</label>
                    <input
                      type="text"
                      name="course"
                      value={formData.course}
                      onChange={handleInputChange}
                      className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-colors"
                      placeholder="Bachelor of Computer Science"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Graduation Date</label>
                    <input
                      type="date"
                      name="graduationDate"
                      value={formData.graduationDate}
                      onChange={handleInputChange}
                      className="w-full bg-white/[0.05] border border-white/[0.1] rounded-xl px-4 py-3 text-white focus:border-purple-400 focus:outline-none transition-colors"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* File Upload */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Upload className="w-5 h-5 text-green-400" />
                  Certificate PDF
                </h3>
                <div className="border-2 border-dashed border-white/[0.2] rounded-xl p-6 text-center hover:border-white/[0.3] transition-colors">
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="hidden"
                    id="certificate-upload"
                  />
                  <label htmlFor="certificate-upload" className="cursor-pointer">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Upload className="w-6 h-6 text-green-400" />
                    </div>
                    <p className="text-white font-medium mb-2">
                      {formData.certificateFile ? formData.certificateFile.name : "Upload Certificate PDF"}
                    </p>
                    <p className="text-gray-400 text-sm">Click to browse or drag and drop</p>
                  </label>
                </div>
              </div>

              {/* Web3 Info Box */}
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Wallet className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <h4 className="text-blue-200 font-medium mb-1">Blockchain Transaction</h4>
                    <p className="text-blue-300 text-sm">
                      This will create a permanent, tamper-proof record on the blockchain. The student will receive the
                      certificate in their wallet at the specified address.
                    </p>
                    {CONTRACT_ADDRESS && (
                      <p className="text-blue-400 text-xs mt-2 font-mono">
                        Contract: {CONTRACT_ADDRESS.slice(0, 10)}...
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <MagneticButton className="flex-1">
                  <Button
                    type="submit"
                    disabled={isLoading || isSuccess || !CONTRACT_ADDRESS}
                    className="w-full flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        {isWritePending ? "Confirming..." : "Processing..."}
                      </>
                    ) : isSuccess ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        Certificate Issued
                      </>
                    ) : (
                      <>
                        <Shield className="w-4 h-4" />
                        Issue Certificate
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </MagneticButton>

                <MagneticButton>
                  <Button type="button" variant="outline" onClick={handleClose} disabled={isLoading} className="px-8">
                    Cancel
                  </Button>
                </MagneticButton>
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
