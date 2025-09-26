// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx
"use client";

import Image from "next/image";
import { Certificate } from "../types/certificate";
import { motion } from "framer-motion";
import {
  Building,
  Calendar,
  CheckCircle,
  Copy,
  Download,
  ExternalLink,
  FileText,
  Hash,
  Loader2,
  Mail,
  QrCode,
  Share,
  User,
  X,
} from "lucide-react";
import { Button } from "~~/components/ui/Button";
import { MagneticButton } from "~~/components/ui/SophisticatedComponents";

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

// File: packages/nextjs/app/student/components/CertificateDetailsModal.tsx

interface CertificateDetailsModalProps {
  certificate: Certificate;
  onClose: () => void;
  onShare: (cert: Certificate) => void;
  onEmail: (cert: Certificate) => void;
  onCopy: (text: string, type: string) => void;
  onDownload: (cert: Certificate) => void;
  onGenerateQR: (cert: Certificate) => void;
  copiedHash: string | null;
  downloadingPDF: string | null;
  generatingQR: string | null;
}

export function CertificateDetailsModal({
  certificate,
  onClose,
  onShare,
  onEmail,
  onCopy,
  onDownload,
  onGenerateQR,
  copiedHash,
  downloadingPDF,
  generatingQR,
}: CertificateDetailsModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#0A0A0F] border border-white/[0.10] rounded-2xl p-4 sm:p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e: React.MouseEvent) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg sm:text-xl font-bold text-white">Certificate Details</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-white/[0.05] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Left Column - Certificate Info */}
          <div className="space-y-4 sm:space-y-6">
            <div className="space-y-4">
              <div>
                <label className="text-gray-400 text-sm flex items-center gap-2 mb-1">
                  <FileText className="w-4 h-4" />
                  Degree Program
                </label>
                <p className="text-white font-medium text-base sm:text-lg">{certificate.degree}</p>
              </div>

              <div>
                <label className="text-gray-400 text-sm flex items-center gap-2 mb-1">
                  <Building className="w-4 h-4" />
                  Institution
                </label>
                <p className="text-white">{certificate.institution}</p>
              </div>

              <div>
                <label className="text-gray-400 text-sm flex items-center gap-2 mb-1">
                  <User className="w-4 h-4" />
                  Graduate
                </label>
                <p className="text-white">{certificate.studentName}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-gray-400 text-sm flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4" />
                    Graduation Date
                  </label>
                  <p className="text-white text-sm">{certificate.graduationDate}</p>
                </div>

                <div>
                  <label className="text-gray-400 text-sm flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4" />
                    Issue Date
                  </label>
                  <p className="text-white text-sm">{certificate.issueDate}</p>
                </div>
              </div>

              <div>
                <label className="text-gray-400 text-sm flex items-center gap-2 mb-1">
                  <Hash className="w-4 h-4" />
                  Certificate ID
                </label>
                <p className="text-purple-400 font-mono text-sm break-all">{certificate.id}</p>
              </div>
            </div>

            {/* Blockchain Details */}
            <div className="p-4 bg-white/[0.02] border border-white/[0.05] rounded-xl">
              <h3 className="text-white font-medium mb-4 text-sm sm:text-base">Blockchain & IPFS Information</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-gray-400 text-sm">IPFS Hash (Certificate PDF)</label>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-gray-300 font-mono text-xs break-all flex-1">{certificate.ipfsHash || "N/A"}</p>
                    {certificate.ipfsHash && (
                      <button
                        onClick={() => onCopy(certificate.ipfsHash, "ipfs")}
                        className="p-1 text-gray-400 hover:text-white transition-colors"
                      >
                        {copiedHash === "ipfs" ? (
                          <CheckCircle className="w-4 h-4 text-green-400" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    )}
                  </div>
                </div>

                <div>
                  <label className="text-gray-400 text-sm">Transaction Hash</label>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-gray-300 font-mono text-xs break-all flex-1">{certificate.transactionHash}</p>
                    <button
                      onClick={() => onCopy(certificate.transactionHash, "tx")}
                      className="p-1 text-gray-400 hover:text-white transition-colors"
                    >
                      {copiedHash === "tx" ? (
                        <CheckCircle className="w-4 h-4 text-green-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - QR Code & Actions */}
          <div className="space-y-4 sm:space-y-6">
            {/* QR Code Section */}
            <div className="text-center">
              <h3 className="text-white font-medium mb-4 text-sm sm:text-base">Verification QR Code</h3>

              {certificate.qrCode ? (
                <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto mb-4 bg-white rounded-xl p-3 sm:p-4">
                  <Image
                    src={certificate.qrCode}
                    alt="Certificate QR Code"
                    width={224}
                    height={224}
                    className="w-full h-full object-contain"
                  />
                </div>
              ) : (
                <div className="w-48 h-48 sm:w-64 sm:h-64 bg-white/[0.05] border border-white/[0.10] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-center">
                    {generatingQR === certificate.id ? (
                      <div>
                        <Loader2 className="w-8 h-8 text-purple-400 mx-auto mb-2 animate-spin" />
                        <p className="text-gray-400 text-sm">Generating QR code...</p>
                      </div>
                    ) : (
                      <div>
                        <QrCode className="w-12 h-12 sm:w-16 sm:h-16 text-purple-400 mx-auto mb-2" />
                        <p className="text-gray-400 text-sm">Click to generate QR code</p>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {!certificate.qrCode && (
                <MagneticButton>
                  <Button
                    onClick={() => onGenerateQR(certificate)}
                    disabled={generatingQR === certificate.id}
                    className="mb-4 w-full sm:w-auto"
                    size="sm"
                  >
                    <QrCode className="w-4 h-4 mr-2" />
                    Generate QR Code
                  </Button>
                </MagneticButton>
              )}

              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Employers can scan this QR code to instantly verify your certificate
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <MagneticButton>
                  <Button
                    onClick={() => onDownload(certificate)}
                    disabled={downloadingPDF === certificate.id}
                    className="w-full"
                    size="sm"
                  >
                    {downloadingPDF === certificate.id ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Downloading...
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 mr-2" />
                        Download PDF
                      </>
                    )}
                  </Button>
                </MagneticButton>

                <MagneticButton>
                  <Button variant="outline" size="sm" className="w-full">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View on Chain
                  </Button>
                </MagneticButton>
              </div>

              <MagneticButton>
                <Button variant="outline" onClick={() => onShare(certificate)} className="w-full" size="sm">
                  <Share className="w-4 h-4 mr-2" />
                  Share via WhatsApp
                </Button>
              </MagneticButton>

              <MagneticButton>
                <Button variant="outline" onClick={() => onEmail(certificate)} className="w-full" size="sm">
                  <Mail className="w-4 h-4 mr-2" />
                  Share via Email
                </Button>
              </MagneticButton>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
