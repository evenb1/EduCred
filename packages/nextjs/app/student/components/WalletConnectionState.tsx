// File: packages/nextjs/app/student/components/WalletConnectionState.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, ExternalLink, GraduationCap, Shield, Wallet } from "lucide-react";
import { useConnect } from "wagmi";
import { Button } from "~~/components/ui/Button";
import { Card, CardContent } from "~~/components/ui/Card";
import { MagneticButton } from "~~/components/ui/SophisticatedComponents";

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

// File: packages/nextjs/app/student/components/WalletConnectionState.tsx

export function WalletConnectionState() {
  const { connectors, connect, status } = useConnect();
  const isConnecting = status === "pending";

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
        className="text-center relative z-10 max-w-lg mx-auto px-4 sm:px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-purple-400" />
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Access Your Certificates</h1>
        <p className="text-gray-400 mb-8 leading-relaxed text-sm sm:text-base">
          Connect your crypto wallet to view and manage your blockchain-verified academic credentials.
        </p>

        {/* Wallet Connection Options */}
        <div className="space-y-3 sm:space-y-4 mb-8">
          {connectors.map(connector => (
            <Card
              key={connector.uid}
              variant="glass"
              className="bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.04] transition-all duration-300"
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                      <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-white font-semibold text-sm sm:text-base">{connector.name}</h4>
                      <p className="text-gray-400 text-xs sm:text-sm">Connect with {connector.name}</p>
                    </div>
                  </div>

                  <MagneticButton>
                    <Button
                      onClick={() => connect({ connector })}
                      disabled={isConnecting}
                      className="w-full sm:w-auto"
                      size="sm"
                    >
                      {isConnecting ? "Connecting..." : "Connect"}
                    </Button>
                  </MagneticButton>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Information Cards */}
        <div className="space-y-4">
          {/* Get Wallet Help */}
          <div className="p-4 sm:p-6 bg-blue-500/5 border border-blue-500/20 rounded-xl text-left">
            <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Don't have a wallet yet?</h3>
            <p className="text-gray-400 text-xs sm:text-sm mb-4">
              You'll need a crypto wallet to access your certificates. We recommend MetaMask for beginners.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <MagneticButton>
                <Button
                  variant="outline"
                  size="sm"
                  className="group w-full sm:w-auto"
                  onClick={() => window.open("https://metamask.io/download/", "_blank")}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Get MetaMask
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </MagneticButton>

              <MagneticButton>
                <Button
                  variant="outline"
                  size="sm"
                  className="group w-full sm:w-auto"
                  onClick={() => window.open("https://walletconnect.com/wallets", "_blank")}
                >
                  Other Wallets
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </MagneticButton>
            </div>
          </div>

          {/* Security Info */}
          <div className="p-4 sm:p-6 bg-purple-500/5 border border-purple-500/20 rounded-xl">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
              <div className="text-left">
                <p className="text-purple-200 text-sm font-medium mb-1">Your Data, Your Control</p>
                <p className="text-purple-300 text-xs sm:text-sm leading-relaxed">
                  Your certificates are issued to your wallet address and you own them completely. No one can take them
                  away or modify them without your permission.
                </p>
              </div>
            </div>
          </div>

          {/* Network Info */}
          <div className="p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
              <div className="text-left">
                <p className="text-green-200 text-sm font-medium mb-1">Network Status</p>
                <p className="text-green-300 text-xs leading-relaxed">
                  Make sure you're connected to the Hardhat Local network for testing
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
