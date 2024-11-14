'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Button } from "../components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select"

export default function Apply() {
  const [step, setStep] = useState(1)

  const nextStep = () => setStep(step + 1)
  const prevStep = () => setStep(step - 1)

  return (
    <div className="min-h-screen bg-green-950 text-green-100">
      <Header servicesRef={null} contactRef={null} />
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
                <div className="mb-8 flex justify-between">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`w-1/3 h-2 rounded-full ${
                        i <= step ? 'bg-green-400' : 'bg-green-700'
                      }`}
                    />
                  ))}
                </div>

                {step === 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 text-green-300">Founder Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-green-300">Full Name</label>
                        <Input id="name" className="bg-green-950 border-green-700 text-green-100" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-green-300">Email</label>
                        <Input id="email" type="email" className="bg-green-950 border-green-700 text-green-100" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-green-300">Phone Number</label>
                        <Input id="phone" type="tel" className="bg-green-950 border-green-700 text-green-100" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 text-green-300">Company Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="company-name" className="block mb-2 text-sm font-medium text-green-300">Company Name</label>
                        <Input id="company-name" className="bg-green-950 border-green-700 text-green-100" />
                      </div>
                      <div>
                        <label htmlFor="company-website" className="block mb-2 text-sm font-medium text-green-300">Company Website</label>
                        <Input id="company-website" type="url" className="bg-green-950 border-green-700 text-green-100" />
                      </div>
                      <div>
                        <label htmlFor="industry" className="block mb-2 text-sm font-medium text-green-300">Industry</label>
                        <Select>
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
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 text-green-300">Pitch</h3>
                    <div className="space-y-4">
                      <div>
                        <label htmlFor="pitch" className="block mb-2 text-sm font-medium text-green-300">Elevator Pitch</label>
                        <Textarea id="pitch" rows={4} className="bg-green-950 border-green-700 text-green-100" placeholder="Describe your startup in 2-3 sentences" />
                      </div>
                      <div>
                        <label htmlFor="funding" className="block mb-2 text-sm font-medium text-green-300">Funding Amount</label>
                        <Input id="funding" type="number" className="bg-green-950 border-green-700 text-green-100" placeholder="Amount in USD" />
                      </div>
                      <div>
                        <label htmlFor="use-of-funds" className="block mb-2 text-sm font-medium text-green-300">Use of Funds</label>
                        <Textarea id="use-of-funds" rows={4} className="bg-green-950 border-green-700 text-green-100" placeholder="How do you plan to use the investment?" />
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className="mt-8 flex justify-between">
                  {step > 1 && (
                    <Button onClick={prevStep} variant="outline" className="bg-green-800 text-green-100 border-green-600">
                      Previous
                    </Button>
                  )}
                  {step < 3 ? (
                    <Button onClick={nextStep} className="bg-green-400 text-green-950 hover:bg-green-300 ml-auto">
                      Next
                    </Button>
                  ) : (
                    <Button type="submit" className="bg-green-400 text-green-950 hover:bg-green-300 ml-auto">
                      Submit Application
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}