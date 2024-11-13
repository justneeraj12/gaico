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

const steps = [
  {
    title: 'Founder Information',
    fields: [
      { id: 'name', label: 'Full Name', type: 'text' },
      { id: 'email', label: 'Email', type: 'email' },
      { id: 'phone', label: 'Phone Number', type: 'tel' },
    ],
  },
  {
    title: 'Company Information',
    fields: [
      { id: 'company-name', label: 'Company Name', type: 'text' },
      { id: 'company-website', label: 'Company Website', type: 'url' },
      {
        id: 'industry',
        label: 'Industry',
        type: 'select',
        options: ['Technology', 'Healthcare', 'Finance', 'Education', 'Other'],
      },
    ],
  },
  {
    title: 'Pitch',
    fields: [
      { id: 'pitch', label: 'Elevator Pitch', type: 'textarea', placeholder: 'Describe your startup in 2-3 sentences' },
      { id: 'funding', label: 'Funding Amount', type: 'number', placeholder: 'Amount in USD' },
      { id: 'use-of-funds', label: 'Use of Funds', type: 'textarea', placeholder: 'How do you plan to use the investment?' },
    ],
  },
]

export default function Apply() {
  const [step, setStep] = useState(1)

  const nextStep = () => setStep((prev) => Math.min(prev + 1, steps.length))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  const renderFields = (stepData) => {
    return stepData.fields.map(({ id, label, type, options, placeholder }) => {
      if (type === 'select') {
        return (
          <div key={id}>
            <label htmlFor={id} className="block mb-2 text-sm font-medium text-green-300">{label}</label>
            <Select>
              <SelectTrigger className="w-full bg-green-950 border-green-700 text-green-100">
                <SelectValue placeholder="Select an industry" />
              </SelectTrigger>
              <SelectContent>
                {options.map((option) => (
                  <SelectItem key={option} value={option.toLowerCase()}>{option}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )
      }
      return (
        <div key={id}>
          <label htmlFor={id} className="block mb-2 text-sm font-medium text-green-300">{label}</label>
          {type === 'textarea' ? (
            <Textarea id={id} rows={4} className="bg-green-950 border-green-700 text-green-100" placeholder={placeholder} />
          ) : (
            <Input id={id} type={type} className="bg-green-950 border-green-700 text-green-100" placeholder={placeholder} />
          )}
        </div>
      )
    })
  }

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
                  {steps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-1/3 h-2 rounded-full ${index + 1 <= step ? 'bg-green-400' : 'bg-green-700'}`}
                    />
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-green-300">{steps[step - 1].title}</h3>
                  <div className="space-y-4">
                    {renderFields(steps[step - 1])}
                  </div>
                </motion.div>

                <div className="mt-8 flex justify-between">
                  {step > 1 && (
                    <Button onClick={prevStep} variant="outline" className="bg-green-800 text-green-100 border-green-600">
                      Previous
                    </Button>
                  )}
                  {step < steps.length ? (
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
