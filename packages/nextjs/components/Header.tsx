// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Building, Globe, GraduationCap, Menu, Scan, Shield, X } from "lucide-react";
import { hardhat } from "viem/chains";
import { FaucetButton, RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";
import { Button } from "~~/components/ui/Button";
import { MagneticButton } from "~~/components/ui/SophisticatedComponents";
import { useTargetNetwork } from "~~/hooks/scaffold-eth";

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

// File: packages/nextjs/components/Header.tsx
// Replace the existing Header.tsx with this

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { targetNetwork } = useTargetNetwork();
  const isLocalNetwork = targetNetwork.id === hardhat.id;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Universities", href: "/issuer", icon: Building },
    { name: "Students", href: "/student", icon: GraduationCap },
    { name: "Verify", href: "/verify", icon: Scan },
    { name: "About", href: "/about", icon: Globe },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0A0A0F]/80 backdrop-blur-xl border-b border-white/[0.05]" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
              <Shield className="w-5 h-5 text-purple-400" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">EduCred</span>
          </Link>

          {/* Desktop Navigation - Moved to Right */}
          <div className="hidden md:flex items-center gap-8 flex-1 justify-center">
            {navItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-white transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Only Wallet Connection - Removed Get Started */}
          <div className="hidden md:flex items-center">
            <RainbowKitCustomConnectButton />
            {isLocalNetwork && <FaucetButton />}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-white/[0.05] overflow-hidden bg-[#0A0A0F]/95 backdrop-blur-xl"
            >
              <div className="py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors font-medium py-3 px-2 hover:bg-white/[0.02] rounded-lg"
                    >
                      <item.icon className="w-5 h-5" />
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                <div className="pt-4 px-2">
                  <RainbowKitCustomConnectButton />
                  {isLocalNetwork && (
                    <div className="mt-3">
                      <FaucetButton />
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
