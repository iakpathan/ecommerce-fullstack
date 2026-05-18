
'use client'

import Navbar from '@/components/navbar'
import HeroSection from '@/components/hero-section'
import ProductGrid from '@/components/product-grid'
import Newsletter from '@/components/newsletter'
import Footer from '@/components/footer'

export default function Home() {

  return (

    <div className="min-h-screen bg-background text-foreground">

      <Navbar cartCount={0} />

      <HeroSection />

      <ProductGrid />

      <Newsletter />

      <Footer />

    </div>
  )
}
