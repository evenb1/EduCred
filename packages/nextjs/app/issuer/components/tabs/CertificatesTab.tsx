// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Eye, Filter, MoreVertical, QrCode, Search, XCircle } from "lucide-react";
import { Card, CardContent } from "~~/components/ui/Card";
import { MagneticButton } from "~~/components/ui/SophisticatedComponents";

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/CertificatesTab.tsx

interface Certificate {
  id: string;
  studentName: string;
  studentEmail: string;
  degree: string;
  graduationDate: string;
  issueDate: string;
  status: "issued" | "pending" | "revoked";
}

export function CertificatesTab() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "issued" | "pending" | "revoked">("all");

  // Mock data
  const mockCertificates: Certificate[] = [
    {
      id: "UN-CS-2024-001234",
      studentName: "John Doe",
      studentEmail: "john.doe@student.uonbi.ac.ke",
      degree: "Bachelor of Computer Science",
      graduationDate: "2024-07-15",
      issueDate: "2024-08-01",
      status: "issued",
    },
    {
      id: "UN-ENG-2024-001235",
      studentName: "Jane Smith",
      studentEmail: "jane.smith@student.uonbi.ac.ke",
      degree: "Bachelor of Engineering",
      graduationDate: "2024-07-15",
      issueDate: "2024-08-02",
      status: "issued",
    },
    {
      id: "UN-BUS-2024-001236",
      studentName: "Michael Johnson",
      studentEmail: "michael.johnson@student.uonbi.ac.ke",
      degree: "Bachelor of Business Administration",
      graduationDate: "2024-07-15",
      issueDate: "2024-08-03",
      status: "pending",
    },
  ];

  const filteredCertificates = mockCertificates.filter(cert => {
    const matchesSearch =
      cert.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.degree.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || cert.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search certificates..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white/[0.02] border border-white/[0.10] rounded-xl text-white placeholder-gray-500 focus:border-purple-500/50 focus:outline-none transition-colors"
          />
        </div>

        <div className="relative">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <select
            value={filterStatus}
            onChange={e => setFilterStatus(e.target.value as any)}
            className="pl-10 pr-8 py-3 bg-white/[0.02] border border-white/[0.10] rounded-xl text-white focus:border-purple-500/50 focus:outline-none transition-colors appearance-none cursor-pointer"
          >
            <option value="all">All Status</option>
            <option value="issued">Issued</option>
            <option value="pending">Pending</option>
            <option value="revoked">Revoked</option>
          </select>
        </div>
      </div>

      {/* Certificates Table */}
      <Card variant="glass" className="bg-white/[0.02] border-white/[0.05]">
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/[0.05]">
                  <th className="text-left p-6 text-gray-400 font-medium">Student</th>
                  <th className="text-left p-6 text-gray-400 font-medium">Degree</th>
                  <th className="text-left p-6 text-gray-400 font-medium">Issue Date</th>
                  <th className="text-left p-6 text-gray-400 font-medium">Status</th>
                  <th className="text-left p-6 text-gray-400 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCertificates.map(cert => (
                  <tr key={cert.id} className="border-b border-white/[0.02] hover:bg-white/[0.01] transition-colors">
                    <td className="p-6">
                      <div>
                        <p className="text-white font-medium">{cert.studentName}</p>
                        <p className="text-gray-400 text-sm">{cert.studentEmail}</p>
                      </div>
                    </td>
                    <td className="p-6">
                      <p className="text-white">{cert.degree}</p>
                      <p className="text-gray-400 text-sm">ID: {cert.id}</p>
                    </td>
                    <td className="p-6">
                      <p className="text-white">{cert.issueDate}</p>
                    </td>
                    <td className="p-6">
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                          cert.status === "issued"
                            ? "bg-green-500/20 text-green-400"
                            : cert.status === "pending"
                              ? "bg-orange-500/20 text-orange-400"
                              : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {cert.status === "issued" ? (
                          <CheckCircle className="w-3 h-3" />
                        ) : cert.status === "pending" ? (
                          <Clock className="w-3 h-3" />
                        ) : (
                          <XCircle className="w-3 h-3" />
                        )}
                        {cert.status.charAt(0).toUpperCase() + cert.status.slice(1)}
                      </span>
                    </td>
                    <td className="p-6">
                      <div className="flex items-center gap-2">
                        <MagneticButton>
                          <button className="p-2 text-gray-400 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                        </MagneticButton>

                        {cert.status === "issued" && (
                          <MagneticButton>
                            <button className="p-2 text-gray-400 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors">
                              <QrCode className="w-4 h-4" />
                            </button>
                          </MagneticButton>
                        )}

                        <MagneticButton>
                          <button className="p-2 text-gray-400 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </MagneticButton>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
