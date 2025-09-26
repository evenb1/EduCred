// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx
"use client";

import { motion } from "framer-motion";
import { Building, Shield } from "lucide-react";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

// File: packages/nextjs/app/issuer/components/WalletConnectionState.tsx

export function WalletConnectionState() {
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
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-20 h-20 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <Building className="w-10 h-10 text-purple-400" />
        </div>

        <h1 className="text-3xl font-bold text-white mb-4">University Dashboard</h1>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Connect your verified university wallet to access the certificate issuance dashboard.
        </p>

        <RainbowKitCustomConnectButton />

        <div className="mt-8 p-4 bg-purple-500/5 border border-purple-500/20 rounded-xl">
          <p className="text-purple-400 text-sm">
            <Shield className="w-4 h-4 inline mr-2" />
            Only verified institutions can issue certificates
          </p>
        </div>
      </motion.div>
    </div>
  );
}
