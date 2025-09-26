// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx
"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight, CheckCircle, Download, ExternalLink, FileText, Shield, Upload } from "lucide-react";
import { Button } from "~~/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/ui/Card";
import { MagneticButton } from "~~/components/ui/SophisticatedComponents";

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/BulkUploadTab.tsx

export function BulkUploadTab() {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processResult, setProcessResult] = useState<{
    success: number;
    failed: number;
    total: number;
  } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "text/csv") {
      setUploadedFile(file);
      setProcessResult(null);
    } else {
      alert("Please upload a CSV file");
    }
  };

  const processBulkUpload = async () => {
    if (!uploadedFile) return;
    setIsProcessing(true);

    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Mock result
    setProcessResult({
      success: 45,
      failed: 2,
      total: 47,
    });

    setIsProcessing(false);
  };

  const downloadTemplate = () => {
    // Create CSV template
    const csvContent = `Student Name,Student Email,Degree Program,Graduation Date
John Doe,john.doe@student.edu,Bachelor of Computer Science,2024-07-15
Jane Smith,jane.smith@student.edu,Bachelor of Engineering,2024-07-15`;

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "certificate_template.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="space-y-8"
    >
      <Card variant="glass" className="bg-white/[0.02] border-white/[0.05]">
        <CardHeader>
          <CardTitle className="text-xl text-white">Bulk Certificate Upload</CardTitle>
          <p className="text-gray-400">
            Upload multiple certificates at once using a CSV file. Download our template to get started.
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Step 1: Template Download */}
          <div className="p-6 bg-blue-500/5 border border-blue-500/20 rounded-xl">
            <h3 className="text-white font-semibold mb-2">Step 1: Download Template</h3>
            <p className="text-gray-400 mb-4">Use our CSV template to format your certificate data correctly.</p>
            <MagneticButton>
              <Button variant="outline" size="sm" className="group" onClick={downloadTemplate}>
                <Download className="w-4 h-4 mr-2" />
                Download CSV Template
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </MagneticButton>
          </div>

          {/* Step 2: File Upload */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold">Step 2: Upload Your CSV</h3>
            <div
              className="border-2 border-dashed border-purple-500/30 rounded-xl p-8 text-center hover:border-purple-500/50 transition-colors cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              {uploadedFile ? (
                <div>
                  <FileText className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <p className="text-white font-medium mb-2">{uploadedFile.name}</p>
                  <p className="text-gray-400 text-sm">{(uploadedFile.size / 1024).toFixed(1)} KB • Ready to process</p>
                </div>
              ) : (
                <div>
                  <Upload className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <p className="text-white font-medium mb-2">Upload CSV File</p>
                  <p className="text-gray-400 text-sm">Click to select or drag & drop your certificate data</p>
                </div>
              )}
            </div>

            <input ref={fileInputRef} type="file" accept=".csv" onChange={handleFileUpload} className="hidden" />
          </div>

          {/* Step 3: Processing */}
          {uploadedFile && !processResult && (
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Step 3: Process Certificates</h3>
              <MagneticButton>
                <Button size="lg" onClick={processBulkUpload} disabled={isProcessing} className="w-full group">
                  {isProcessing ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                      Processing {uploadedFile.name}...
                    </>
                  ) : (
                    <>
                      <Shield className="w-5 h-5 mr-2" />
                      Process {uploadedFile.name}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </MagneticButton>
            </div>
          )}

          {/* Processing Results */}
          {processResult && (
            <div className="space-y-4">
              <h3 className="text-white font-semibold">Processing Complete</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-center">
                  <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-400">{processResult.success}</div>
                  <div className="text-sm text-gray-400">Successful</div>
                </div>

                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-center">
                  <AlertTriangle className="w-8 h-8 text-red-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-red-400">{processResult.failed}</div>
                  <div className="text-sm text-gray-400">Failed</div>
                </div>

                <div className="p-4 bg-purple-500/10 border border-purple-500/20 rounded-xl text-center">
                  <FileText className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-400">{processResult.total}</div>
                  <div className="text-sm text-gray-400">Total</div>
                </div>
              </div>

              <MagneticButton>
                <Button
                  variant="outline"
                  onClick={() => {
                    setUploadedFile(null);
                    setProcessResult(null);
                  }}
                  className="w-full"
                >
                  Process Another File
                </Button>
              </MagneticButton>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Guidelines */}
      <Card variant="glass" className="bg-white/[0.02] border-white/[0.05]">
        <CardHeader>
          <CardTitle className="text-lg text-white">Upload Guidelines</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-sm text-gray-400">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white font-medium">File Format</p>
                <p>Use CSV format with proper headers: Student Name, Student Email, Degree Program, Graduation Date</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white font-medium">Date Format</p>
                <p>Use YYYY-MM-DD format for graduation dates (e.g., 2024-07-15)</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white font-medium">Email Validation</p>
                <p>Ensure all student emails are valid and follow your institution's domain pattern</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-white font-medium">File Size</p>
                <p>Maximum 1000 records per file. For larger batches, split into multiple files</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
