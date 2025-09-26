// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle,
  Clock,
  Download,
  Edit,
  Eye,
  Filter,
  Mail,
  Plus,
  Search,
  Send,
  Trash2,
  Upload,
  UserPlus,
  Users,
  XCircle,
} from "lucide-react";
import { Button } from "~~/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/ui/Card";
import { MagneticButton } from "~~/components/ui/SophisticatedComponents";

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/StudentDirectoryTab.tsx

interface Student {
  id: string;
  name: string;
  email: string;
  studentId: string;
  program: string;
  graduationDate: string;
  walletAddress?: string;
  walletStatus: "requested" | "provided" | "not_requested";
  certificateStatus: "not_issued" | "ready_to_issue" | "issued";
  lastContact?: string;
}

export function StudentDirectoryTab() {
  const [students, setStudents] = useState<Student[]>([
    {
      id: "1",
      name: "John Doe",
      email: "john.doe@student.uonbi.ac.ke",
      studentId: "CS/2020/001",
      program: "Bachelor of Computer Science",
      graduationDate: "2024-07-15",
      walletAddress: "0x742d35Cc6634C0532925a3b8D186bE84e6e1F3a7",
      walletStatus: "provided",
      certificateStatus: "ready_to_issue",
      lastContact: "2024-08-01",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane.smith@student.uonbi.ac.ke",
      studentId: "ENG/2020/002",
      program: "Bachelor of Engineering",
      graduationDate: "2024-07-15",
      walletStatus: "requested",
      certificateStatus: "not_issued",
      lastContact: "2024-07-28",
    },
    {
      id: "3",
      name: "Michael Johnson",
      email: "michael.johnson@student.uonbi.ac.ke",
      studentId: "BUS/2020/003",
      program: "Bachelor of Business Administration",
      graduationDate: "2024-07-15",
      walletStatus: "not_requested",
      certificateStatus: "not_issued",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "ready" | "pending" | "no_wallet">("all");
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);
  const [showAddStudent, setShowAddStudent] = useState(false);

  const filteredStudents = students.filter(student => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.studentId.toLowerCase().includes(searchTerm.toLowerCase());

    let matchesFilter = true;
    if (filterStatus === "ready") matchesFilter = student.certificateStatus === "ready_to_issue";
    if (filterStatus === "pending") matchesFilter = student.walletStatus === "requested";
    if (filterStatus === "no_wallet") matchesFilter = student.walletStatus === "not_requested";

    return matchesSearch && matchesFilter;
  });

  const requestWalletAddress = (studentId: string) => {
    setStudents(prev =>
      prev.map(student =>
        student.id === studentId
          ? { ...student, walletStatus: "requested", lastContact: new Date().toISOString().split("T")[0] }
          : student,
      ),
    );
  };

  const bulkRequestWallets = () => {
    const studentsWithoutWallets = students.filter(s => s.walletStatus === "not_requested");
    setStudents(prev =>
      prev.map(student =>
        studentsWithoutWallets.some(s => s.id === student.id)
          ? { ...student, walletStatus: "requested", lastContact: new Date().toISOString().split("T")[0] }
          : student,
      ),
    );
  };

  const stats = {
    total: students.length,
    readyToIssue: students.filter(s => s.certificateStatus === "ready_to_issue").length,
    pendingWallet: students.filter(s => s.walletStatus === "requested").length,
    noWallet: students.filter(s => s.walletStatus === "not_requested").length,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
    >
      {/* Stats Overview */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <Card variant="glass" className="bg-white/[0.02] border-white/[0.05]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Students</p>
                <p className="text-xl font-bold text-white">{stats.total}</p>
              </div>
              <Users className="w-8 h-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>

        <Card variant="glass" className="bg-white/[0.02] border-white/[0.05]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Ready to Issue</p>
                <p className="text-xl font-bold text-green-400">{stats.readyToIssue}</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card variant="glass" className="bg-white/[0.02] border-white/[0.05]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Pending Wallet</p>
                <p className="text-xl font-bold text-orange-400">{stats.pendingWallet}</p>
              </div>
              <Clock className="w-8 h-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>

        <Card variant="glass" className="bg-white/[0.02] border-white/[0.05]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">No Wallet</p>
                <p className="text-xl font-bold text-red-400">{stats.noWallet}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Actions Bar */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-4 flex-1">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search students..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/[0.02] border border-white/[0.10] rounded-lg text-white placeholder-gray-500 focus:border-purple-500/50 focus:outline-none transition-colors text-sm"
            />
          </div>

          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <select
              value={filterStatus}
              onChange={e => setFilterStatus(e.target.value as any)}
              className="pl-10 pr-8 py-2 bg-white/[0.02] border border-white/[0.10] rounded-lg text-white focus:border-purple-500/50 focus:outline-none transition-colors appearance-none cursor-pointer text-sm"
            >
              <option value="all">All Students</option>
              <option value="ready">Ready to Issue</option>
              <option value="pending">Pending Wallet</option>
              <option value="no_wallet">No Wallet</option>
            </select>
          </div>
        </div>

        <div className="flex gap-2">
          <MagneticButton>
            <Button variant="outline" size="sm" onClick={bulkRequestWallets}>
              <Send className="w-4 h-4 mr-2" />
              Request All Wallets
            </Button>
          </MagneticButton>

          <MagneticButton>
            <Button size="sm" onClick={() => setShowAddStudent(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Add Student
            </Button>
          </MagneticButton>
        </div>
      </div>

      {/* Wallet Collection Info */}
      <Card variant="glass" className="bg-blue-500/5 border-blue-500/20">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
              <Users className="w-4 h-4 text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-medium mb-2">How Wallet Collection Works</h3>
              <div className="text-sm text-gray-400 space-y-1">
                <p>• Students create their own crypto wallets (MetaMask, Coinbase Wallet, etc.)</p>
                <p>• Universities request wallet addresses via email</p>
                <p>• Students provide their wallet address through a secure form</p>
                <p>• Certificates are issued directly to student's wallet (they own it completely)</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Students Table */}
      <Card variant="glass" className="bg-white/[0.02] border-white/[0.05]">
        <CardHeader>
          <CardTitle className="text-lg text-white">Student Directory</CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/[0.05]">
                  <th className="text-left p-4 text-gray-400 font-medium text-sm">Student</th>
                  <th className="text-left p-4 text-gray-400 font-medium text-sm">Program</th>
                  <th className="text-left p-4 text-gray-400 font-medium text-sm">Graduation</th>
                  <th className="text-left p-4 text-gray-400 font-medium text-sm">Wallet Status</th>
                  <th className="text-left p-4 text-gray-400 font-medium text-sm">Certificate</th>
                  <th className="text-left p-4 text-gray-400 font-medium text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map(student => (
                  <tr key={student.id} className="border-b border-white/[0.02] hover:bg-white/[0.01] transition-colors">
                    <td className="p-4">
                      <div>
                        <p className="text-white font-medium text-sm">{student.name}</p>
                        <p className="text-gray-400 text-xs">{student.email}</p>
                        <p className="text-gray-500 text-xs">{student.studentId}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <p className="text-white text-sm">{student.program}</p>
                    </td>
                    <td className="p-4">
                      <p className="text-white text-sm">{student.graduationDate}</p>
                    </td>
                    <td className="p-4">
                      <div>
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                            student.walletStatus === "provided"
                              ? "bg-green-500/20 text-green-400"
                              : student.walletStatus === "requested"
                                ? "bg-orange-500/20 text-orange-400"
                                : "bg-gray-500/20 text-gray-400"
                          }`}
                        >
                          {student.walletStatus === "provided" ? (
                            <CheckCircle className="w-3 h-3" />
                          ) : student.walletStatus === "requested" ? (
                            <Clock className="w-3 h-3" />
                          ) : (
                            <XCircle className="w-3 h-3" />
                          )}
                          {student.walletStatus === "provided"
                            ? "Provided"
                            : student.walletStatus === "requested"
                              ? "Requested"
                              : "Not Requested"}
                        </span>
                        {student.walletAddress && (
                          <p className="text-xs text-gray-500 font-mono mt-1">
                            {student.walletAddress.slice(0, 6)}...{student.walletAddress.slice(-4)}
                          </p>
                        )}
                      </div>
                    </td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                          student.certificateStatus === "ready_to_issue"
                            ? "bg-green-500/20 text-green-400"
                            : student.certificateStatus === "issued"
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-gray-500/20 text-gray-400"
                        }`}
                      >
                        {student.certificateStatus === "ready_to_issue"
                          ? "Ready"
                          : student.certificateStatus === "issued"
                            ? "Issued"
                            : "Not Ready"}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-1">
                        {student.walletStatus === "not_requested" && (
                          <MagneticButton>
                            <button
                              onClick={() => requestWalletAddress(student.id)}
                              className="p-1.5 text-purple-400 hover:text-white hover:bg-purple-500/20 rounded-md transition-colors"
                              title="Request Wallet Address"
                            >
                              <Send className="w-3 h-3" />
                            </button>
                          </MagneticButton>
                        )}

                        <MagneticButton>
                          <button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/[0.05] rounded-md transition-colors">
                            <Eye className="w-3 h-3" />
                          </button>
                        </MagneticButton>

                        <MagneticButton>
                          <button className="p-1.5 text-gray-400 hover:text-white hover:bg-white/[0.05] rounded-md transition-colors">
                            <Edit className="w-3 h-3" />
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

      {/* Import/Export Actions */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Card variant="glass" className="bg-white/[0.02] border-white/[0.05] flex-1">
          <CardContent className="p-4">
            <h3 className="text-white font-medium mb-2">Import Students</h3>
            <p className="text-gray-400 text-sm mb-4">Upload CSV file with student information from your SIS</p>
            <MagneticButton>
              <Button variant="outline" size="sm" className="w-full">
                <Upload className="w-4 h-4 mr-2" />
                Import from CSV
              </Button>
            </MagneticButton>
          </CardContent>
        </Card>

        <Card variant="glass" className="bg-white/[0.02] border-white/[0.05] flex-1">
          <CardContent className="p-4">
            <h3 className="text-white font-medium mb-2">Export Data</h3>
            <p className="text-gray-400 text-sm mb-4">Download student list with wallet addresses</p>
            <MagneticButton>
              <Button variant="outline" size="sm" className="w-full">
                <Download className="w-4 h-4 mr-2" />
                Export to CSV
              </Button>
            </MagneticButton>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
