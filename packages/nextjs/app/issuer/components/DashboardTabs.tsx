// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx
"use client";

import type { TabType } from "./DashboardLayout";
import { BulkUploadTab } from "./tabs/BulkUploadTab";
import { CertificatesTab } from "./tabs/CertificatesTab";
import { OverviewTab } from "./tabs/OverviewTab";
import { SettingsTab } from "./tabs/SettingsTab";
import { StudentDirectoryTab } from "./tabs/StudentDirectoryTab";
import { AnimatePresence, motion } from "framer-motion";
import { Award, BarChart3, Settings, Upload } from "lucide-react";
import { MagneticButton } from "~~/components/ui/SophisticatedComponents";

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

// File: packages/nextjs/app/issuer/components/DashboardTabs.tsx

interface DashboardTabsProps {
  selectedTab: TabType;
  setSelectedTab: (tab: TabType) => void;
  universityProfile: any;
}

export function DashboardTabs({ selectedTab, setSelectedTab, universityProfile }: DashboardTabsProps) {
  const tabs = [
    { id: "overview" as TabType, label: "Overview", icon: BarChart3 },
    { id: "certificates" as TabType, label: "Certificates", icon: Award },
    { id: "bulk" as TabType, label: "Bulk Upload", icon: Upload },
    { id: "settings" as TabType, label: "Settings", icon: Settings },
  ];

  return (
    <>
      {/* Tab Navigation */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-wrap gap-2 p-1 bg-white/[0.02] rounded-xl border border-white/[0.05]">
          {tabs.map(tab => (
            <MagneticButton key={tab.id}>
              <button
                onClick={() => setSelectedTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  selectedTab === tab.id
                    ? "bg-purple-500/20 text-white border border-purple-500/30"
                    : "text-gray-400 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            </MagneticButton>
          ))}
        </div>
      </motion.div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {selectedTab === "overview" && <OverviewTab key="overview" />}
        {selectedTab === "students" && <StudentDirectoryTab key="students" />}
        {selectedTab === "certificates" && <CertificatesTab key="certificates" />}
        {selectedTab === "bulk" && <BulkUploadTab key="bulk" />}
        {selectedTab === "settings" && <SettingsTab key="settings" universityProfile={universityProfile} />}
      </AnimatePresence>
    </>
  );
}
