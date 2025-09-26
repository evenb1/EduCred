// File: packages/nextjs/app/student/components/StudentHeader.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Copy, GraduationCap, RefreshCw, Wallet } from "lucide-react";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { Button } from "~~/components/ui/Button";
import { MagneticButton } from "~~/components/ui/SophisticatedComponents";

// File: packages/nextjs/app/student/components/StudentHeader.tsx

// File: packages/nextjs/app/student/components/StudentHeader.tsx

// File: packages/nextjs/app/student/components/StudentHeader.tsx

// File: packages/nextjs/app/student/components/StudentHeader.tsx

// File: packages/nextjs/app/student/components/StudentHeader.tsx

// File: packages/nextjs/app/student/components/StudentHeader.tsx

// File: packages/nextjs/app/student/components/StudentHeader.tsx

// File: packages/nextjs/app/student/components/StudentHeader.tsx

// File: packages/nextjs/app/student/components/StudentHeader.tsx

// File: packages/nextjs/app/student/components/StudentHeader.tsx

// File: packages/nextjs/app/student/components/StudentHeader.tsx

// File: packages/nextjs/app/student/components/StudentHeader.tsx

// File: packages/nextjs/app/student/components/StudentHeader.tsx

// File: packages/nextjs/app/student/components/StudentHeader.tsx

// File: packages/nextjs/app/student/components/StudentHeader.tsx

// File: packages/nextjs/app/student/components/StudentHeader.tsx

// File: packages/nextjs/app/student/components/StudentHeader.tsx

// File: packages/nextjs/app/student/components/StudentHeader.tsx

// File: packages/nextjs/app/student/components/StudentHeader.tsx

// File: packages/nextjs/app/student/components/StudentHeader.tsx

// File: packages/nextjs/app/student/components/StudentHeader.tsx

// File: packages/nextjs/app/student/components/StudentHeader.tsx

// File: packages/nextjs/app/student/components/StudentHeader.tsx

// File: packages/nextjs/app/student/components/StudentHeader.tsx

// File: packages/nextjs/app/student/components/StudentHeader.tsx

// File: packages/nextjs/app/student/components/StudentHeader.tsx

// File: packages/nextjs/app/student/components/StudentHeader.tsx

// File: packages/nextjs/app/student/components/StudentHeader.tsx

// File: packages/nextjs/app/student/components/StudentHeader.tsx

// File: packages/nextjs/app/student/components/StudentHeader.tsx

interface StudentHeaderProps {
  address: string | undefined;
  onRefresh: () => void;
  isLoading: boolean;
}

export function StudentHeader({ address, onRefresh, isLoading }: StudentHeaderProps) {
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

  return (
    <motion.div
      className="mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        {/* Left side - Title and wallet info */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-white">My Certificates</h1>
              <p className="text-gray-400 text-sm md:text-base">Securely stored on blockchain & IPFS</p>
            </div>
          </div>

          {/* Wallet Info - Mobile responsive */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
            <div className="flex items-center gap-2">
              <Wallet className="w-4 h-4 text-purple-400" />
              <span className="text-gray-400">Connected:</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-400 font-mono text-xs sm:text-sm">
                {address ? (
                  <>
                    <span className="hidden sm:inline">
                      {address.slice(0, 6)}...{address.slice(-4)}
                    </span>
                    <span className="sm:hidden">
                      {address.slice(0, 4)}...{address.slice(-2)}
                    </span>
                  </>
                ) : (
                  "Not connected"
                )}
              </span>
              {address && (
                <button
                  onClick={() => copyToClipboard(address)}
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                  title="Copy wallet address"
                >
                  {copiedAddress ? <CheckCircle className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <MagneticButton>
            <Button
              onClick={onRefresh}
              disabled={isLoading}
              variant="outline"
              className="flex items-center gap-2 w-full sm:w-auto"
              size="sm"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
              <span className="hidden sm:inline">Refresh</span>
              <span className="sm:hidden">Refresh Certificates</span>
            </Button>
          </MagneticButton>

          <div className="w-full sm:w-auto">
            <RainbowKitCustomConnectButton />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
