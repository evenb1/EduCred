// File: packages/nextjs/app/student/components/ContractStatusCard.tsx
"use client";

import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, ExternalLink } from "lucide-react";
import { Card, CardContent } from "~~/components/ui/Card";

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

// File: packages/nextjs/app/student/components/ContractStatusCard.tsx

interface ContractStatusCardProps {
  contractAddress: string | undefined;
  certificateError: any;
}

export function ContractStatusCard({ contractAddress, certificateError }: ContractStatusCardProps) {
  // Don't show anything if contract is working fine
  if (contractAddress && !certificateError) {
    return null;
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
      <Card variant="glass" className="bg-orange-500/5 border-orange-500/20">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <p className="text-orange-200 font-medium text-sm sm:text-base">
                    {!contractAddress ? "Smart Contract Not Deployed" : "Connection Issue"}
                  </p>
                  <p className="text-orange-300 text-xs sm:text-sm mt-1">
                    {!contractAddress ? (
                      <>
                        The EduCred smart contract is not deployed on this network.
                        <span className="hidden sm:inline"> Please deploy the contract first.</span>
                      </>
                    ) : (
                      "Having trouble reading certificates from the blockchain."
                    )}
                  </p>
                </div>

                {!contractAddress && (
                  <button
                    onClick={() => window.open("https://hardhat.org/hardhat-runner/docs/guides/deploying", "_blank")}
                    className="text-orange-400 hover:text-orange-300 transition-colors flex items-center gap-1 text-xs whitespace-nowrap"
                  >
                    <span className="hidden sm:inline">Deploy Guide</span>
                    <span className="sm:hidden">Help</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                )}
              </div>

              {/* Technical Details - Collapsible on mobile */}
              <details className="mt-3 sm:mt-2">
                <summary className="text-orange-400 text-xs cursor-pointer hover:text-orange-300">
                  Technical Details
                </summary>
                <div className="mt-2 p-2 bg-black/20 rounded text-xs">
                  {!contractAddress ? (
                    <div className="space-y-1">
                      <p className="text-orange-300">
                        Contract Address: <span className="text-red-400">Not found</span>
                      </p>
                      <p className="text-orange-300">Network: Hardhat Local (31337)</p>
                      <p className="text-orange-300">
                        Command: <code className="bg-black/30 px-1 rounded">yarn deploy --network localhost</code>
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <p className="text-orange-300">
                        Contract: <code className="break-all">{contractAddress}</code>
                      </p>
                      <p className="text-orange-300">Error: {certificateError?.message || "Unknown error"}</p>
                    </div>
                  )}
                </div>
              </details>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
