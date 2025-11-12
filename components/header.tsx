"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl">🍌</div>
          <span className="font-bold text-lg text-foreground">Nano Banana</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm text-foreground/80 hover:text-foreground transition">
            Features
          </Link>
          <Link href="#examples" className="text-sm text-foreground/80 hover:text-foreground transition">
            Examples
          </Link>
          <Link href="#testimonials" className="text-sm text-foreground/80 hover:text-foreground transition">
            Testimonials
          </Link>
          <Link href="#faq" className="text-sm text-foreground/80 hover:text-foreground transition">
            FAQ
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-6 py-2 text-sm font-medium text-foreground hover:bg-secondary transition rounded-full">
            Sign In
          </button>
          <button className="px-6 py-2 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 transition rounded-full">
            Launch Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-white">
          <div className="px-4 py-4 space-y-4">
            <Link href="#features" className="block text-sm text-foreground hover:text-primary">
              Features
            </Link>
            <Link href="#examples" className="block text-sm text-foreground hover:text-primary">
              Examples
            </Link>
            <Link href="#testimonials" className="block text-sm text-foreground hover:text-primary">
              Testimonials
            </Link>
            <Link href="#faq" className="block text-sm text-foreground hover:text-primary">
              FAQ
            </Link>
            <div className="flex gap-2 pt-4">
              <button className="flex-1 px-4 py-2 text-sm font-medium text-foreground border border-border hover:bg-secondary transition rounded-full">
                Sign In
              </button>
              <button className="flex-1 px-4 py-2 text-sm font-medium text-primary-foreground bg-primary hover:bg-primary/90 transition rounded-full">
                Launch
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
