// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx
"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/ui/Card";

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

// File: packages/nextjs/app/issuer/components/tabs/OverviewTab.tsx

export function OverviewTab() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <Card variant="glass" className="bg-white/[0.02] border-white/[0.05]">
        <CardHeader>
          <CardTitle className="text-xl text-white flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-purple-400" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-400">Recent certificate activity will appear here.</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
