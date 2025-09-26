// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx
"use client";

import { useState } from "react";
import { CertificateFormModal } from "./CertificateFormModal";
import { DashboardStats } from "./DashboardStats";
import { DashboardTabs } from "./DashboardTabs";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Building, CheckCircle, Plus } from "lucide-react";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { Button } from "~~/components/ui/Button";
import { AnimatedCounter, MagneticButton } from "~~/components/ui/SophisticatedComponents";

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

// File: packages/nextjs/app/issuer/components/DashboardLayout.tsx

export type TabType = "overview" | "students" | "certificates" | "bulk" | "settings";

export function DashboardLayout() {
  const [selectedTab, setSelectedTab] = useState<TabType>("overview");
  const [showCertificateForm, setShowCertificateForm] = useState(false);

  const universityProfile = {
    name: "University of Nairobi",
    address: "University Way, Nairobi, Kenya",
    email: "registrar@uonbi.ac.ke",
    phone: "+254 20 491 0000",
    website: "https://www.uonbi.ac.ke",
    registrationNumber: "UNIV-KE-001",
    isVerified: true,
  };

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
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <Building className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">{universityProfile.name}</h1>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm font-medium">Verified Institution</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <RainbowKitCustomConnectButton />
              <MagneticButton>
                <Button onClick={() => setShowCertificateForm(true)} className="group">
                  <Plus className="w-4 h-4 mr-2" />
                  Issue Certificate
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </MagneticButton>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <DashboardStats />

        {/* Tabs */}
        <DashboardTabs
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          universityProfile={universityProfile}
        />

        {/* Certificate Form Modal */}
        <AnimatePresence>
          {showCertificateForm && (
            <CertificateFormModal isOpen={showCertificateForm} onClose={() => setShowCertificateForm(false)} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
