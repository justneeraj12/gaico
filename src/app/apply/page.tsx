'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Button } from "../components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"

export default function Apply() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    companyWebsite: '',
    industry: '',
    pitch: '',
    fundingAmount: '',
    useOfFunds: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, industry: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
  }

  return (
    <div className="min-h-screen bg-green-950 text-green-100">
      <Header />
      <main className="pt-24 pb-12">
        <section className="py-20 px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h1 
              className="text-5xl font-bold mb-6 text-center text-green-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Apply for Funding
            </motion.h1>
            <motion.p 
              className="text-xl mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Take the first step towards turning your innovative idea into a successful business. Fill out our application form to be considered for funding and support from Greenvile Angel Investment Co.
            </motion.p>

            <Card className="bg-green-900 border-green-700">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-green-400">Application Form</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-green-300">Full Name</label>
                    <Input id="name" name="name" value={formData.name} onChange={handleInputChange} className="bg-green-950 border-green-700 text-green-100" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-green-300">Email</label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} className="bg-green-950 border-green-700 text-green-100" required />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-green-300">Phone Number</label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} className="bg-green-950 border-green-700 text-green-100" required />
                  </div>
                  <div>
                    <label htmlFor="company-name" className="block mb-2 text-sm font-medium text-green-300">Company Name</label>
                    <Input id="company-name" name="companyName" value={formData.companyName} onChange={handleInputChange} className="bg-green-950 border-green-700 text-green-100" required />
                  </div>
                  <div>
                    <label htmlFor="company-website" className="block mb-2 text-sm font-medium text-green-300">Company Website</label>
                    <Input id="company-website" name="companyWebsite" type="url" value={formData.companyWebsite} onChange={handleInputChange} className="bg-green-950 border-green-700 text-green-100" required />
                  </div>
                  <div>
                    <label htmlFor="industry" className="block mb-2 text-sm font-medium text-green-300">Industry</label>
                    <Select onValueChange={handleSelectChange} value={formData.industry}>
                      <SelectTrigger className="w-full bg-green-950 border-green-700 text-green-100">
                        <SelectValue placeholder="Select an industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tech">Technology</SelectItem>
                        <SelectItem value="health">Healthcare</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="pitch" className="block mb-2 text-sm font-medium text-green-300">Elevator Pitch</label>
                    <Textarea id="pitch" name="pitch" rows={4} value={formData.pitch} onChange={handleInputChange} className="bg-green-950 border-green-700 text-green-100" placeholder="Describe your startup in 2-3 sentences" required />
                  </div>
                  <div>
                    <label htmlFor="funding" className="block mb-2 text-sm font-medium text-green-300">Funding Amount</label>
                    <Input id="funding" name="fundingAmount" type="number" value={formData.fundingAmount} onChange={handleInputChange} className="bg-green-950 border-green-700 text-green-100" placeholder="Amount in USD" required />
                  </div>
                  <div>
                    <label htmlFor="use-of-funds" className="block mb-2 text-sm font-medium text-green-300">Use of Funds</label>
                    <Textarea id="use-of-funds" name="useOfFunds" rows={4} value={formData.useOfFunds} onChange={handleInputChange} className="bg-green-950 border-green-700 text-green-100" placeholder="How do you plan to use the investment?" required />
                  </div>
                  <Button type="submit" className="w-full bg-green-400 text-green-950 hover:bg-green-300">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}