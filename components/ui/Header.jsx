"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-muted">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Logo.png"
            alt="Almeida Auto"
            width={200}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/" className="hover:text-primary transition-colors text-foreground">Home</Link>
          <Link href="/servicos" className="hover:text-primary transition-colors text-foreground">Serviços</Link>
          <Link href="/contatos" className="hover:text-primary transition-colors text-foreground">Contatos</Link>
        </nav>

        {/* Menu mobile */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-muted overflow-hidden"
          >
            <nav className="flex flex-col items-center gap-6 font-medium py-8">
              <Link 
                href="/" 
                className="text-foreground hover:text-primary transition-colors text-lg"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/servicos" 
                className="text-foreground hover:text-primary transition-colors text-lg"
                onClick={() => setIsOpen(false)}
              >
                Serviços
              </Link>
              <Link 
                href="/contatos" 
                className="text-foreground hover:text-primary transition-colors text-lg"
                onClick={() => setIsOpen(false)}
              >
                Contatos
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
