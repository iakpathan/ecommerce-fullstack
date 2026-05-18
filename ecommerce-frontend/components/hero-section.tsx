'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-primary font-semibold text-sm tracking-wide uppercase">
                Welcome to ModernShop
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
                Discover Premium
                <span className="text-primary"> Design</span>
              </h1>
            </div>

            <p className="text-lg text-foreground/70 max-w-md leading-relaxed">
              Curated collection of contemporary products crafted with precision and passion. Experience the perfect blend of aesthetics and functionality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#products">

  <Button>

    Shop Now

  </Button>

</Link>
            <Link href="#products">

  <Button variant="outline">

    View Collections

  </Button>

</Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-primary">10K+</p>
                <p className="text-sm text-foreground/60">Happy Customers</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">500+</p>
                <p className="text-sm text-foreground/60">Premium Products</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-sm text-foreground/60">Customer Support</p>
              </div>
            </div>
          </div>

          {/* Image Area */}
          <div className="relative h-80 md:h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden hidden md:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary/30 rounded-full mx-auto mb-4"></div>
                <p className="text-foreground/50">Product Showcase</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}
