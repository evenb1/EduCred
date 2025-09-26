// File: packages/nextjs/app/not-found.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowLeft, FileQuestion, Home, Search } from "lucide-react";
import { Button } from "~~/components/ui/Button";
import { Card, CardContent } from "~~/components/ui/Card";
import { MagneticButton } from "~~/components/ui/SophisticatedComponents";

// File: packages/nextjs/app/not-found.tsx

// File: packages/nextjs/app/not-found.tsx

// File: packages/nextjs/app/not-found.tsx

// File: packages/nextjs/app/not-found.tsx

// File: packages/nextjs/app/not-found.tsx

// File: packages/nextjs/app/not-found.tsx

// File: packages/nextjs/app/not-found.tsx

// File: packages/nextjs/app/not-found.tsx

// File: packages/nextjs/app/not-found.tsx

// File: packages/nextjs/app/not-found.tsx

// File: packages/nextjs/app/not-found.tsx

// File: packages/nextjs/app/not-found.tsx

// File: packages/nextjs/app/not-found.tsx

// File: packages/nextjs/app/not-found.tsx

// File: packages/nextjs/app/not-found.tsx

// File: packages/nextjs/app/not-found.tsx

// File: packages/nextjs/app/not-found.tsx

// File: packages/nextjs/app/not-found.tsx

// File: packages/nextjs/app/not-found.tsx

// File: packages/nextjs/app/not-found.tsx

// File: packages/nextjs/app/not-found.tsx

// File: packages/nextjs/app/not-found.tsx

// File: packages/nextjs/app/not-found.tsx

// File: packages/nextjs/app/not-found.tsx

// File: packages/nextjs/app/not-found.tsx

// File: packages/nextjs/app/not-found.tsx

// File: packages/nextjs/app/not-found.tsx

// File: packages/nextjs/app/not-found.tsx

// File: packages/nextjs/app/not-found.tsx

// File: packages/nextjs/app/not-found.tsx

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] pt-20 pb-16 relative overflow-hidden flex items-center">
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

      {/* Floating Shapes */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 mb-4">
              404
            </div>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block"
            >
              <FileQuestion className="w-24 h-24 text-purple-400 opacity-50" />
            </motion.div>
          </motion.div>

          {/* Error Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Certificate Not Found</h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
              The page you're looking for might have been moved, deleted, or perhaps you typed the wrong URL. Let's get
              you back on track.
            </p>
          </motion.div>

          {/* Action Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {[
              {
                icon: Home,
                title: "Go Home",
                description: "Return to the main page",
                href: "/",
                color: "purple",
              },
              {
                icon: Search,
                title: "Verify Certificate",
                description: "Scan a QR code to verify",
                href: "/verify",
                color: "green",
              },
              {
                icon: AlertTriangle,
                title: "Report Issue",
                description: "Let us know about this error",
                href: "/contact",
                color: "orange",
              },
              {
                icon: FileQuestion,
                title: "Get Help",
                description: "Visit our help center",
                href: "/contact",
                color: "blue",
              },
            ].map((action, index) => (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card
                  variant="glass"
                  className="bg-white/[0.02] border-white/[0.05] h-full group hover:bg-white/[0.04] transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 bg-${action.color}-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <action.icon className={`w-6 h-6 text-${action.color}-400`} />
                    </div>
                    <h3 className="text-white font-medium mb-2">{action.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{action.description}</p>
                    <Link href={action.href}>
                      <MagneticButton>
                        <Button variant="outline" size="sm" className="w-full">
                          Go
                        </Button>
                      </MagneticButton>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/">
              <MagneticButton>
                <Button className="flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Button>
              </MagneticButton>
            </Link>

            <Link href="/verify">
              <MagneticButton>
                <Button variant="outline" className="flex items-center gap-2">
                  <Search className="w-4 h-4" />
                  Verify Certificate
                </Button>
              </MagneticButton>
            </Link>
          </motion.div>

          {/* Help Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-500 text-sm">
              Error Code: 404 • Page Not Found •
              <Link href="/contact" className="text-purple-400 hover:text-purple-300 ml-1">
                Report this issue
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
