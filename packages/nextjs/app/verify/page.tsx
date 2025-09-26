"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  Building,
  Calendar,
  Camera,
  CheckCircle,
  Clock,
  Copy,
  Download,
  ExternalLink,
  FileText,
  Globe,
  Scan,
  Shield,
  Upload,
  XCircle,
} from "lucide-react";
import { Button } from "~~/components/ui/Button";
import { MagneticButton } from "~~/components/ui/SophisticatedComponents";

interface VerificationResult {
  isValid: boolean;
  certificateData?: {
    studentName: string;
    degree: string;
    institution: string;
    graduationDate: string;
    issueDate: string;
    certificateId: string;
    ipfsHash: string;
    blockchainTx: string;
    verificationDate: string;
  };
  error?: string;
}

export default function VerifyPage() {
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null);
  const [inputMethod, setInputMethod] = useState<"camera" | "upload" | "manual">("camera");
  const [manualInput, setManualInput] = useState("");
  const [copiedHash, setCopiedHash] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Real verification function using our API
  const verifyCredential = async (data: string): Promise<VerificationResult> => {
    setIsVerifying(true);

    try {
      const response = await fetch("/api/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          certificateId: data,
          ipfsHash: data.startsWith("Qm") ? data : undefined,
          transactionHash: data.startsWith("0x") ? data : undefined,
        }),
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Verification error:", error);
      return {
        isValid: false,
        error: "Verification service unavailable. Please try again later.",
      };
    } finally {
      setIsVerifying(false);
    }
  };

  const handleVerify = async (data: string) => {
    if (!data.trim()) return;
    const result = await verifyCredential(data);
    setVerificationResult(result);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // In a real implementation, you would:
      // 1. Read the QR code from the image using a QR code library
      // 2. Extract the certificate ID/hash from the QR code
      // For demo, we'll use the demo certificate
      handleVerify("demo123");
    }
  };

  const resetVerification = () => {
    setVerificationResult(null);
    setManualInput("");
    setIsVerifying(false);
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedHash(type);
    setTimeout(() => setCopiedHash(null), 2000);
  };

  const downloadFromIPFS = async (ipfsHash: string) => {
    try {
      // In a real implementation:
      // const response = await fetch(`https://ipfs.io/ipfs/${ipfsHash}`);
      // const blob = await response.blob();
      // const url = URL.createObjectURL(blob);

      // For demo, create a mock download
      const mockPDFContent = "Mock PDF content for verified certificate";
      const blob = new Blob([mockPDFContent], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "Verified_Certificate.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download error:", error);
      alert("Failed to download certificate from IPFS");
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0F] pt-20 pb-16 relative overflow-hidden">
      {/* Background Elements */}
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
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <Scan className="w-6 h-6 text-purple-400" />
            </div>
            <span className="text-purple-400 font-semibold uppercase tracking-wide text-sm">Instant Verification</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">Verify Any Credential</h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Scan QR codes or enter certificate IDs to verify academic credentials instantly on the blockchain.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {!verificationResult ? (
            <>
              {/* Input Method Selection */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  {[
                    { id: "camera", label: "Scan QR Code", icon: Camera },
                    { id: "upload", label: "Upload Image", icon: Upload },
                    { id: "manual", label: "Enter ID", icon: FileText },
                  ].map(method => (
                    <MagneticButton key={method.id}>
                      <button
                        onClick={() => setInputMethod(method.id as any)}
                        className={`flex items-center gap-3 px-6 py-3 rounded-xl border transition-all duration-300 ${
                          inputMethod === method.id
                            ? "bg-purple-500/20 border-purple-500/40 text-white"
                            : "bg-white/[0.02] border-white/[0.05] text-gray-400 hover:text-white hover:bg-white/[0.05]"
                        }`}
                      >
                        <method.icon className="w-5 h-5" />
                        {method.label}
                      </button>
                    </MagneticButton>
                  ))}
                </div>
              </motion.div>

              {/* Verification Interface */}
              <motion.div
                className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8 backdrop-blur-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <AnimatePresence mode="wait">
                  {inputMethod === "camera" && (
                    <motion.div
                      key="camera"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="text-center"
                    >
                      <div className="w-64 h-64 mx-auto mb-8 bg-white/[0.02] border-2 border-dashed border-purple-500/30 rounded-2xl flex items-center justify-center">
                        {isVerifying ? (
                          <div className="text-center">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-12 h-12 border-2 border-purple-400 border-t-transparent rounded-full mx-auto mb-4"
                            />
                            <p className="text-purple-400 font-medium">Verifying on blockchain...</p>
                          </div>
                        ) : (
                          <div className="text-center">
                            <Camera className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                            <p className="text-gray-400">Position QR code in view</p>
                          </div>
                        )}
                      </div>

                      <MagneticButton>
                        <Button
                          size="lg"
                          onClick={() => handleVerify("demo123")}
                          disabled={isVerifying}
                          className="group"
                        >
                          <Camera className="w-5 h-5 mr-2" />
                          {isVerifying ? "Verifying..." : "Start Camera (Demo)"}
                        </Button>
                      </MagneticButton>
                    </motion.div>
                  )}

                  {inputMethod === "upload" && (
                    <motion.div
                      key="upload"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="text-center"
                    >
                      <div
                        className="w-full h-64 border-2 border-dashed border-purple-500/30 rounded-2xl flex items-center justify-center cursor-pointer hover:border-purple-500/50 transition-colors"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <div className="text-center">
                          <Upload className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                          <p className="text-white font-medium mb-2">Upload QR Code Image</p>
                          <p className="text-gray-400 text-sm">Click to select or drag & drop</p>
                        </div>
                      </div>

                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </motion.div>
                  )}

                  {inputMethod === "manual" && (
                    <motion.div
                      key="manual"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="space-y-6"
                    >
                      <div>
                        <label className="block text-white font-medium mb-3">
                          Certificate ID, IPFS Hash, or Blockchain Transaction Hash
                        </label>
                        <input
                          type="text"
                          value={manualInput}
                          onChange={e => setManualInput(e.target.value)}
                          placeholder="Enter certificate ID (demo123), IPFS hash (Qm...), or transaction hash (0x...)"
                          className="w-full bg-white/[0.02] border border-white/[0.10] rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500/50 focus:outline-none transition-colors"
                        />
                      </div>

                      <MagneticButton>
                        <Button
                          size="lg"
                          onClick={() => handleVerify(manualInput)}
                          disabled={!manualInput.trim() || isVerifying}
                          className="w-full group"
                        >
                          {isVerifying ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                              />
                              Verifying on blockchain...
                            </>
                          ) : (
                            <>
                              <Shield className="w-5 h-5 mr-2" />
                              Verify Credential
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </Button>
                      </MagneticButton>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Demo Section */}
              <motion.div
                className="mt-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-3">Try the Demo</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-gray-400 text-sm">Use any of these to see valid verification:</p>
                    <div className="flex flex-wrap justify-center gap-2 text-xs">
                      <code className="bg-purple-500/20 px-2 py-1 rounded text-purple-300">demo123</code>
                      <code className="bg-blue-500/20 px-2 py-1 rounded text-blue-300">UN-CS-2024-001234</code>
                      <code className="bg-green-500/20 px-2 py-1 rounded text-green-300">
                        QmX4k5n7m9p2q8r1s3t6u9v2w5x8y1z4a7b0c3d6e9f2g5h8
                      </code>
                    </div>
                  </div>
                  <MagneticButton>
                    <Button variant="outline" size="sm" onClick={() => handleVerify("demo123")} className="group">
                      Try Demo Verification
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </MagneticButton>
                </div>
              </motion.div>
            </>
          ) : (
            /* Verification Results */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Result Header */}
              <div
                className={`text-center p-8 rounded-2xl border ${
                  verificationResult.isValid ? "bg-green-500/5 border-green-500/20" : "bg-red-500/5 border-red-500/20"
                }`}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                    verificationResult.isValid ? "bg-green-500/20" : "bg-red-500/20"
                  }`}
                >
                  {verificationResult.isValid ? (
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  ) : (
                    <XCircle className="w-8 h-8 text-red-400" />
                  )}
                </div>

                <h2
                  className={`text-2xl font-bold mb-2 ${
                    verificationResult.isValid ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {verificationResult.isValid ? "Certificate Verified" : "Verification Failed"}
                </h2>

                <p className="text-gray-400">
                  {verificationResult.isValid
                    ? "This credential is authentic and verified on the blockchain"
                    : verificationResult.error || "Certificate could not be verified"}
                </p>

                {verificationResult.isValid && verificationResult.certificateData && (
                  <p className="text-gray-500 text-sm mt-2">
                    Verified on {new Date(verificationResult.certificateData.verificationDate).toLocaleString()}
                  </p>
                )}
              </div>

              {/* Certificate Details */}
              {verificationResult.isValid && verificationResult.certificateData && (
                <div className="bg-white/[0.02] border border-white/[0.05] rounded-2xl p-8">
                  <h3 className="text-xl font-bold text-white mb-6">Certificate Details</h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="text-gray-400 text-sm">Student Name</label>
                        <p className="text-white font-medium">{verificationResult.certificateData.studentName}</p>
                      </div>

                      <div>
                        <label className="text-gray-400 text-sm">Degree</label>
                        <p className="text-white font-medium">{verificationResult.certificateData.degree}</p>
                      </div>

                      <div>
                        <label className="text-gray-400 text-sm">Institution</label>
                        <div className="flex items-center gap-2">
                          <Building className="w-4 h-4 text-purple-400" />
                          <p className="text-white font-medium">{verificationResult.certificateData.institution}</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="text-gray-400 text-sm">Graduation Date</label>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-purple-400" />
                          <p className="text-white font-medium">{verificationResult.certificateData.graduationDate}</p>
                        </div>
                      </div>

                      <div>
                        <label className="text-gray-400 text-sm">Issue Date</label>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-purple-400" />
                          <p className="text-white font-medium">{verificationResult.certificateData.issueDate}</p>
                        </div>
                      </div>

                      <div>
                        <label className="text-gray-400 text-sm">Certificate ID</label>
                        <p className="text-purple-400 font-mono text-sm">
                          {verificationResult.certificateData.certificateId}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Blockchain Details */}
                  <div className="mt-8 pt-6 border-t border-white/[0.05]">
                    <h4 className="text-white font-semibold mb-4">Blockchain & IPFS Verification</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-gray-400 text-sm">IPFS Hash (Certificate PDF)</label>
                        <div className="flex items-center gap-2 mt-1">
                          <p className="text-gray-300 font-mono text-xs break-all flex-1">
                            {verificationResult.certificateData.ipfsHash}
                          </p>
                          <button
                            onClick={() => copyToClipboard(verificationResult.certificateData!.ipfsHash, "ipfs")}
                            className="p-1 text-gray-400 hover:text-white transition-colors"
                          >
                            {copiedHash === "ipfs" ? (
                              <CheckCircle className="w-4 h-4 text-green-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>
                      <div>
                        <label className="text-gray-400 text-sm">Blockchain Transaction</label>
                        <div className="flex items-center gap-2 mt-1">
                          <p className="text-gray-300 font-mono text-xs break-all flex-1">
                            {verificationResult.certificateData.blockchainTx}
                          </p>
                          <button
                            onClick={() => copyToClipboard(verificationResult.certificateData!.blockchainTx, "tx")}
                            className="p-1 text-gray-400 hover:text-white transition-colors"
                          >
                            {copiedHash === "tx" ? (
                              <CheckCircle className="w-4 h-4 text-green-400" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-8 flex flex-wrap gap-4">
                    <MagneticButton>
                      <Button
                        variant="outline"
                        size="sm"
                        className="group"
                        onClick={() => downloadFromIPFS(verificationResult.certificateData!.ipfsHash)}
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download from IPFS
                      </Button>
                    </MagneticButton>

                    <MagneticButton>
                      <Button variant="outline" size="sm" className="group">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View on Blockchain
                      </Button>
                    </MagneticButton>
                  </div>
                </div>
              )}

              {/* Reset Button */}
              <div className="text-center">
                <MagneticButton>
                  <Button variant="outline" onClick={resetVerification} className="group">
                    Verify Another Credential
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </MagneticButton>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
