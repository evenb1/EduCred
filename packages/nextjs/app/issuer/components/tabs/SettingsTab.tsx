// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx
"use client";

import { motion } from "framer-motion";
import { CheckCircle, Download, Edit, Globe, Key, Mail, MapPin, Phone, Settings, Shield } from "lucide-react";
import { Button } from "~~/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/ui/Card";
import { MagneticButton } from "~~/components/ui/SophisticatedComponents";

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/SettingsTab.tsx

interface UniversityProfile {
  name: string;
  address: string;
  email: string;
  phone: string;
  website: string;
  registrationNumber: string;
  isVerified: boolean;
}

interface SettingsTabProps {
  universityProfile: UniversityProfile;
}

export function SettingsTab({ universityProfile }: SettingsTabProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      {/* Institution Profile */}
      <Card variant="glass" className="bg-white/[0.02] border-white/[0.05]">
        <CardHeader>
          <CardTitle className="text-xl text-white flex items-center gap-2">
            <Settings className="w-5 h-5 text-purple-400" />
            Institution Profile
          </CardTitle>
          <p className="text-gray-400">Manage your institution's information and verification status.</p>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-medium mb-2">Institution Name</label>
              <div className="relative">
                <input
                  type="text"
                  value={universityProfile.name}
                  readOnly
                  className="w-full bg-white/[0.02] border border-white/[0.10] rounded-xl px-4 py-3 text-white pr-10"
                />
                <Edit className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Registration Number</label>
              <input
                type="text"
                value={universityProfile.registrationNumber}
                readOnly
                className="w-full bg-white/[0.02] border border-white/[0.10] rounded-xl px-4 py-3 text-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Address</label>
            <div className="relative">
              <MapPin className="absolute left-3 top-3 w-4 h-4 text-purple-400" />
              <textarea
                value={universityProfile.address}
                readOnly
                rows={3}
                className="w-full pl-10 pr-10 py-3 bg-white/[0.02] border border-white/[0.10] rounded-xl text-white resize-none"
              />
              <Edit className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white font-medium mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400" />
                <input
                  type="email"
                  value={universityProfile.email}
                  readOnly
                  className="w-full pl-10 pr-10 py-3 bg-white/[0.02] border border-white/[0.10] rounded-xl text-white"
                />
                <Edit className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>

            <div>
              <label className="block text-white font-medium mb-2">Website</label>
              <div className="relative">
                <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400" />
                <input
                  type="url"
                  value={universityProfile.website}
                  readOnly
                  className="w-full pl-10 pr-10 py-3 bg-white/[0.02] border border-white/[0.10] rounded-xl text-white"
                />
                <Edit className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-white font-medium mb-2">Phone</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400" />
              <input
                type="tel"
                value={universityProfile.phone}
                readOnly
                className="w-full pl-10 pr-10 py-3 bg-white/[0.02] border border-white/[0.10] rounded-xl text-white"
              />
              <Edit className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
          </div>

          {/* Verification Status */}
          <div className="pt-6 border-t border-white/[0.05]">
            <div className="flex items-center justify-between p-4 bg-green-500/5 border border-green-500/20 rounded-xl">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <div>
                  <p className="text-white font-medium">Verification Status</p>
                  <p className="text-green-400 text-sm">Verified Institution</p>
                </div>
              </div>

              <MagneticButton>
                <Button variant="outline" size="sm">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Support
                </Button>
              </MagneticButton>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card variant="glass" className="bg-white/[0.02] border-white/[0.05]">
        <CardHeader>
          <CardTitle className="text-xl text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-400" />
            Security & Access
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Key className="w-5 h-5 text-purple-400" />
                <h3 className="text-white font-medium">Wallet Address</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">Your verified wallet address for issuing certificates</p>
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                <p className="text-purple-400 font-mono text-sm break-all">
                  0x742d35Cc6634C0532925a3b8D186bE84e6e1F3a7
                </p>
              </div>
            </div>

            <div className="p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl">
              <div className="flex items-center gap-3 mb-3">
                <Shield className="w-5 h-5 text-green-400" />
                <h3 className="text-white font-medium">Certificate Authority</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">Your institution's certificate issuing permissions</p>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-medium">Active & Verified</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* API & Integration */}
      <Card variant="glass" className="bg-white/[0.02] border-white/[0.05]">
        <CardHeader>
          <CardTitle className="text-xl text-white">API & Integration</CardTitle>
          <p className="text-gray-400">Integrate EduCred with your existing student information systems.</p>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl">
              <h4 className="text-white font-medium mb-2">API Documentation</h4>
              <p className="text-gray-400 text-sm mb-4">
                Access our REST API to integrate certificate issuance into your systems
              </p>
              <MagneticButton>
                <Button variant="outline" size="sm" className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download API Docs
                </Button>
              </MagneticButton>
            </div>

            <div className="p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl">
              <h4 className="text-white font-medium mb-2">Webhook Integration</h4>
              <p className="text-gray-400 text-sm mb-4">
                Receive real-time notifications when certificates are verified
              </p>
              <MagneticButton>
                <Button variant="outline" size="sm" className="w-full">
                  <Settings className="w-4 h-4 mr-2" />
                  Configure Webhooks
                </Button>
              </MagneticButton>
            </div>
          </div>

          <div className="p-4 bg-purple-500/5 border border-purple-500/20 rounded-xl">
            <h4 className="text-white font-medium mb-2">Student Information System Integration</h4>
            <p className="text-gray-400 text-sm mb-4">
              Connect your SIS to automatically issue certificates upon graduation. Supports popular systems like
              Banner, PeopleSoft, and custom APIs.
            </p>
            <MagneticButton>
              <Button size="sm">
                <Mail className="w-4 h-4 mr-2" />
                Request Integration Support
              </Button>
            </MagneticButton>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
