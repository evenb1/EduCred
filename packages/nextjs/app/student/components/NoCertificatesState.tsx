// File: packages/nextjs/app/student/components/NoCertificatesState.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building, Calendar, CheckCircle, Copy, FileText, Mail, RefreshCw, User } from "lucide-react";
import { Button } from "~~/components/ui/Button";
import { MagneticButton } from "~~/components/ui/SophisticatedComponents";

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

// File: packages/nextjs/app/student/components/NoCertificatesState.tsx

interface NoCertificatesStateProps {
  address: string | undefined;
  onRefresh: () => void;
  certificateIds?: bigint[];
}

export function NoCertificatesState({ address, onRefresh, certificateIds }: NoCertificatesStateProps) {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedAddress(true);
      setTimeout(() => setCopiedAddress(false), 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  // Debug info to help understand why no certificates are showing
  const debugInfo = {
    hasAddress: !!address,
    certificateIdsCount: Array.isArray(certificateIds) ? certificateIds.length : 0,
    certificateIdsRaw: certificateIds,
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <motion.div
        className="text-center max-w-2xl mx-auto px-4 sm:px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">No Certificates Found</h1>
        <p className="text-gray-400 mb-8 leading-relaxed text-sm sm:text-base">
          You don't have any certificates in this wallet yet. Certificates will appear here once your institution issues
          them to your wallet address.
        </p>

        {/* Debug Information */}
        {process.env.NODE_ENV === "development" && (
          <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl text-left">
            <p className="text-yellow-200 text-sm font-medium mb-2">Debug Info:</p>
            <div className="space-y-1 text-yellow-300 text-xs">
              <p>Wallet Connected: {debugInfo.hasAddress ? "Yes" : "No"}</p>
              <p>Certificate IDs Found: {debugInfo.certificateIdsCount}</p>
              {debugInfo.certificateIdsCount > 0 && (
                <p>IDs: [{debugInfo.certificateIdsRaw?.map(id => id.toString()).join(", ")}]</p>
              )}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <MagneticButton>
              <Button onClick={onRefresh} className="group w-full sm:w-auto">
                <RefreshCw className="w-4 h-4 mr-2" />
                Check Again
              </Button>
            </MagneticButton>

            <MagneticButton>
              <Button
                variant="outline"
                className="group w-full sm:w-auto"
                onClick={() => window.open("mailto:registrar@university.edu?subject=Certificate Request", "_blank")}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Institution
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </MagneticButton>
          </div>

          {/* Instructions Card */}
          <div className="p-4 sm:p-6 bg-blue-500/5 border border-blue-500/20 rounded-xl text-left">
            <h3 className="text-white font-medium mb-4 text-sm sm:text-base">How to get your certificates:</h3>
            <div className="space-y-3 text-gray-400 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <User className="w-3 h-3 text-blue-400" />
                </div>
                <p>Provide your wallet address to your institution's registrar office</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Calendar className="w-3 h-3 text-blue-400" />
                </div>
                <p>Wait for them to issue your certificate on the blockchain</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Building className="w-3 h-3 text-blue-400" />
                </div>
                <p>Your certificate will appear here automatically</p>
              </div>
            </div>

            {/* Wallet Address Display */}
            <div className="mt-4 p-3 bg-black/20 rounded-lg">
              <p className="text-xs text-gray-500 mb-1">Your wallet address:</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <code className="text-purple-400 font-mono text-xs break-all flex-1">{address || "Not connected"}</code>
                {address && (
                  <button
                    onClick={() => copyToClipboard(address)}
                    className="text-purple-400 hover:text-purple-300 transition-colors self-start sm:self-center"
                    title="Copy wallet address"
                  >
                    {copiedAddress ? <CheckCircle className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Helpful Tips */}
          <div className="grid sm:grid-cols-2 gap-4 text-left">
            <div className="p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
              <h4 className="text-green-200 font-medium mb-2 text-sm">Instant Verification</h4>
              <p className="text-green-300 text-xs leading-relaxed">
                Once issued, your certificates can be verified instantly by employers anywhere in the world.
              </p>
            </div>

            <div className="p-4 bg-purple-500/5 border border-purple-500/20 rounded-xl">
              <h4 className="text-purple-200 font-medium mb-2 text-sm">Permanent & Secure</h4>
              <p className="text-purple-300 text-xs leading-relaxed">
                Your certificates are stored permanently on the blockchain and cannot be lost or forged.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
