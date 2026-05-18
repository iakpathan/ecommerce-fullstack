
'use client'

import { useState } from 'react'
import Link from 'next/link'

import {
  ShoppingCart,
  Menu,
  X
} from 'lucide-react'

import { Button } from '@/components/ui/button'

interface NavbarProps {
  cartCount: number
}

export default function Navbar({
  cartCount
}: NavbarProps) {

  const [isOpen, setIsOpen] =
    useState(false)

  return (

    <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center gap-2">

            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">

              <span className="text-primary-foreground font-bold text-lg">
                M
              </span>

            </div>

            <span className="text-xl font-bold text-primary hidden sm:inline">

              ModernShop

            </span>

          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">

            <Link
              href="#products"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              Shop
            </Link>

            <Link
              href="#products"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              Collections
            </Link>

            <Link
              href="#footer"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              About
            </Link>

            <Link
              href="#footer"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              Contact
            </Link>

          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">

            {/* Cart */}
            <Link href="/cart">

              <button className="relative p-2 hover:bg-muted rounded-lg transition-colors group">

                <ShoppingCart className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />

                {cartCount > 0 && (

                  <span className="absolute top-1 right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">

                    {cartCount}

                  </span>
                )}

              </button>

            </Link>

            {/* Login */}
            <Link href="/login">

              <Button
                variant="outline"
                className="gap-2"
              >

                Login

              </Button>

            </Link>

            {/* Mobile Menu */}
            <button
              onClick={() =>
                setIsOpen(!isOpen)
              }
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >

              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}

            </button>

          </div>

        </div>

        {/* Mobile Menu */}
        {isOpen && (

          <div className="md:hidden pb-4 border-t border-border pt-4">

            <div className="space-y-3">

              <Link
                href="#products"
                className="block py-2"
              >
                Shop
              </Link>

              <Link
                href="#products"
                className="block py-2"
              >
                Collections
              </Link>

              <Link
                href="#footer"
                className="block py-2"
              >
                About
              </Link>

              <Link
                href="#footer"
                className="block py-2"
              >
                Contact
              </Link>

            </div>

          </div>

        )}

      </div>

    </nav>
  )
}
