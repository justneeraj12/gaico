'use client'

import { useState } from 'react'
import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import { toast } from "../components/ui/use-toast"

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend
    console.log('Subscribing email:', email)
    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    })
    setEmail('')
  }

  return (
    <div className="bg-green-900/20 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-400 mb-6">Stay Updated</h2>
        <p className="text-center text-green-100 mb-8">
          Subscribe to our newsletter for the latest investment opportunities and startup insights.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow bg-green-950 border-green-700 text-white placeholder:text-green-500"
          />
          <Button type="submit" className="bg-green-400 text-green-950 hover:bg-green-300">
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  )
}