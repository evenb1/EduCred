// File: packages/nextjs/app/issuer/components/DashboardStats.tsx
"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "~~/components/ui/Card";
import { AnimatedCounter } from "~~/components/ui/SophisticatedComponents";

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

// File: packages/nextjs/app/issuer/components/DashboardStats.tsx

export function DashboardStats() {
  const stats = [
    { label: "Total Certificates", value: 156, icon: Award, color: "purple" },
    { label: "Issued", value: 142, icon: CheckCircle, color: "green" },
    { label: "Pending", value: 14, icon: Clock, color: "orange" },
    { label: "Verification Rate", value: "98.5%", icon: Shield, color: "blue" },
  ];

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <Card
            variant="glass"
            className="bg-white/[0.02] border-white/[0.05] hover:bg-white/[0.03] transition-all duration-300"
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-white mt-1">
                    {typeof stat.value === "number" ? <AnimatedCounter end={stat.value} /> : stat.value}
                  </p>
                </div>
                <div className={`w-12 h-12 bg-${stat.color}-500/20 rounded-xl flex items-center justify-center`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}
