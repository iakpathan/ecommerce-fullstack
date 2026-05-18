'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold">M</span>
              </div>
              <span className="text-lg font-bold text-primary">ModernShop</span>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Premium curated products for modern living. Discover quality, design, and innovation.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a href="#" className="p-2 hover:bg-muted rounded-lg transition-colors text-foreground/60 hover:text-primary">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 hover:bg-muted rounded-lg transition-colors text-foreground/60 hover:text-primary">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 hover:bg-muted rounded-lg transition-colors text-foreground/60 hover:text-primary">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 hover:bg-muted rounded-lg transition-colors text-foreground/60 hover:text-primary">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Shop</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">All Products</Link></li>
              <li><Link href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">New Arrivals</Link></li>
              <li><Link href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">Best Sellers</Link></li>
              <li><Link href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">Sale</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">Contact Us</Link></li>
              <li><Link href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">Shipping Info</Link></li>
              <li><Link href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">Returns</Link></li>
              <li><Link href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">FAQ</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">Blog</Link></li>
              <li><Link href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8"></div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-foreground/60">
          <p>&copy; {currentYear} ModernShop. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
