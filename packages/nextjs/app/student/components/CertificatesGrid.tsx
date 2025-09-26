// File: packages/nextjs/app/student/components/CertificatesGrid.tsx
"use client";

import { useState } from "react";
import { Certificate } from "../types/certificate";
import { CertificateDetailsModal } from "./CertificateDetailsModal";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  Award,
  Building,
  Calendar,
  CheckCircle,
  Download,
  Eye,
  FileText,
  Loader2,
  Share,
  Shield,
  Wallet,
} from "lucide-react";
import QRCode from "qrcode";
import { Button } from "~~/components/ui/Button";
import { Card, CardContent } from "~~/components/ui/Card";
import { MagneticButton } from "~~/components/ui/SophisticatedComponents";

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

// File: packages/nextjs/app/student/components/CertificatesGrid.tsx

interface CertificatesGridProps {
  certificates: Certificate[];
  onCertificateUpdate: (certificates: Certificate[]) => void;
}

export function CertificatesGrid({ certificates, onCertificateUpdate }: CertificatesGridProps) {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [downloadingPDF, setDownloadingPDF] = useState<string | null>(null);
  const [generatingQR, setGeneratingQR] = useState<string | null>(null);

  // Generate QR code for verification
  const generateQRCode = async (certificate: Certificate) => {
    setGeneratingQR(certificate.id);
    try {
      const verificationData = {
        certificateId: certificate.id,
        studentAddress: certificate.universityAddress, // This should be student address
        verifyUrl: `${window.location.origin}/verify?id=${certificate.id}`,
        ipfsHash: certificate.ipfsHash,
        transactionHash: certificate.transactionHash,
      };

      const qrCodeDataURL = await QRCode.toDataURL(JSON.stringify(verificationData), {
        width: 256,
        margin: 2,
        color: {
          dark: "#8B5CF6",
          light: "#FFFFFF",
        },
      });

      // Update certificate with QR code
      const updatedCertificates = certificates.map(cert =>
        cert.id === certificate.id ? { ...cert, qrCode: qrCodeDataURL } : cert,
      );
      onCertificateUpdate(updatedCertificates);

      setSelectedCertificate(prev => (prev?.id === certificate.id ? { ...prev, qrCode: qrCodeDataURL } : prev));
    } catch (error) {
      console.error("Error generating QR code:", error);
    } finally {
      setGeneratingQR(null);
    }
  };

  // Download certificate from IPFS
  const downloadFromIPFS = async (certificate: Certificate) => {
    setDownloadingPDF(certificate.id);

    try {
      if (certificate.ipfsHash && certificate.ipfsHash.startsWith("Qm")) {
        // Try to fetch from IPFS
        const response = await fetch(`https://ipfs.io/ipfs/${certificate.ipfsHash}`);
        if (response.ok) {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);

          const link = document.createElement("a");
          link.href = url;
          link.download = `${certificate.degree.replace(/\s+/g, "_")}_Certificate.pdf`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
          return;
        }
      }

      // Fallback: Create mock PDF for demo
      await new Promise(resolve => setTimeout(resolve, 2000));
      const mockPDFContent = `Certificate: ${certificate.degree}\nInstitution: ${certificate.institution}\nGraduate: ${certificate.studentName}\nDate: ${certificate.graduationDate}`;
      const blob = new Blob([mockPDFContent], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `${certificate.degree.replace(/\s+/g, "_")}_Certificate.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download error:", error);
      alert("Failed to download certificate from IPFS");
    } finally {
      setDownloadingPDF(null);
    }
  };

  // Share via WhatsApp
  const shareViaWhatsApp = (certificate: Certificate) => {
    const message = `🎓 My verified ${certificate.degree} certificate from ${certificate.institution}.

Verify instantly: ${window.location.origin}/verify?id=${certificate.id}

Certificate ID: ${certificate.id}
IPFS Hash: ${certificate.ipfsHash}
Blockchain TX: ${certificate.transactionHash}

Powered by EduCred - Blockchain-verified credentials`;

    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`);
  };

  // Share via Email
  const shareViaEmail = (certificate: Certificate) => {
    const subject = `Verified Certificate: ${certificate.degree}`;
    const body = `I'm sharing my verified ${certificate.degree} certificate from ${certificate.institution}.

You can verify its authenticity instantly by visiting:
${window.location.origin}/verify?id=${certificate.id}

Certificate Details:
- Institution: ${certificate.institution}
- Degree: ${certificate.degree}
- Graduation Date: ${certificate.graduationDate}
- Certificate ID: ${certificate.id}

Blockchain Information:
- IPFS Hash: ${certificate.ipfsHash}
- Transaction Hash: ${certificate.transactionHash}

This certificate is secured on the blockchain and stored on IPFS, making it impossible to forge and permanently accessible.

Powered by EduCred - Blockchain-verified credentials`;

    window.open(`mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <>
      {/* Certificates Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {certificates.map((certificate, index) => (
          <motion.div
            key={certificate.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              variant="glass"
              className="bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.03] transition-all duration-300 group cursor-pointer h-full"
            >
              <CardContent className="p-4 sm:p-6">
                {/* Certificate Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  </div>

                  <div className="flex items-center gap-1">
                    {certificate.isVerified ? (
                      <>
                        <CheckCircle className="w-4 h-4 text-green-400" />
                        <span className="text-green-400 text-xs font-medium hidden sm:inline">Verified</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-4 h-4 text-red-400" />
                        <span className="text-red-400 text-xs font-medium hidden sm:inline">Revoked</span>
                      </>
                    )}
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="space-y-3 mb-6">
                  <div>
                    <h3 className="text-white font-bold text-base sm:text-lg leading-tight line-clamp-2">
                      {certificate.degree}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Building className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300 truncate">{certificate.institution}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300 text-xs sm:text-sm">{certificate.graduationDate}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <FileText className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-400 font-mono text-xs truncate">
                        {certificate.ipfsHash ? `${certificate.ipfsHash.slice(0, 8)}...` : "N/A"}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-white/[0.05]">
                    <p className="text-xs text-gray-500 truncate">ID: {certificate.id}</p>
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="grid grid-cols-2 gap-2">
                    <MagneticButton>
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full text-xs"
                        onClick={() => setSelectedCertificate(certificate)}
                      >
                        <Eye className="w-3 h-3 mr-1" />
                        <span className="hidden sm:inline">View</span>
                        <span className="sm:hidden">View</span>
                      </Button>
                    </MagneticButton>

                    <MagneticButton>
                      <Button
                        size="sm"
                        className="w-full text-xs"
                        onClick={() => downloadFromIPFS(certificate)}
                        disabled={downloadingPDF === certificate.id}
                      >
                        {downloadingPDF === certificate.id ? (
                          <Loader2 className="w-3 h-3 mr-1 animate-spin" />
                        ) : (
                          <Download className="w-3 h-3 mr-1" />
                        )}
                        PDF
                      </Button>
                    </MagneticButton>
                  </div>

                  <MagneticButton>
                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full text-xs group"
                      onClick={() => shareViaWhatsApp(certificate)}
                    >
                      <Share className="w-3 h-3 mr-1" />
                      <span className="hidden sm:inline">Share Certificate</span>
                      <span className="sm:hidden">Share</span>
                    </Button>
                  </MagneticButton>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Info Section */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <Card variant="glass" className="bg-white/[0.02] border-white/[0.05]">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-purple-400" />
              <h3 className="text-lg text-white font-medium">Your Certificates Are Secure</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-sm">
              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                </div>
                <h4 className="text-white font-medium mb-2 text-sm">Blockchain Secured</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Your certificates are permanently recorded on the blockchain and cannot be altered or forged.
                </p>
              </div>

              <div className="text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                </div>
                <h4 className="text-white font-medium mb-2 text-sm">IPFS Storage</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Certificate PDFs are stored on IPFS, ensuring permanent availability and decentralized access.
                </p>
              </div>

              <div className="text-center sm:col-span-2 lg:col-span-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />
                </div>
                <h4 className="text-white font-medium mb-2 text-sm">You Own Them</h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  These certificates belong to you completely. No one can take them away or modify them.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Certificate Details Modal */}
      <AnimatePresence>
        {selectedCertificate && (
          <CertificateDetailsModal
            certificate={selectedCertificate}
            onClose={() => setSelectedCertificate(null)}
            onShare={shareViaWhatsApp}
            onEmail={shareViaEmail}
            onCopy={copyToClipboard}
            onDownload={downloadFromIPFS}
            onGenerateQR={generateQRCode}
            copiedHash=""
            downloadingPDF={downloadingPDF}
            generatingQR={generatingQR}
          />
        )}
      </AnimatePresence>
    </>
  );
}
