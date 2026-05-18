'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, Check } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail('')
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <div className="space-y-2">
            <Mail className="w-12 h-12 mx-auto text-primary opacity-80" />
            <h2 className="text-3xl md:text-4xl font-bold text-balance">
              Stay Updated
            </h2>
            <p className="text-foreground/70 max-w-md mx-auto">
              Subscribe to our newsletter for exclusive offers, new arrivals, and insider tips
            </p>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mt-8">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-background border-border placeholder:text-foreground/50"
            />
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <><Check className="w-4 h-4 mr-2" /> Subscribed</>
              ) : (
                'Subscribe'
              )}
            </Button>
          </form>

          {isSubmitted && (
            <p className="text-sm text-primary font-medium animate-in fade-in">
              ✓ Thank you! Check your inbox for special offers.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
