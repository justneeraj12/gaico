'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Card, CardContent } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Button } from "../components/ui/button"
import { toast } from "../components/ui/use-toast"

const teamMembers = [
  { name: "John Doe", role: "Founder & CEO", image: "/placeholder.svg?height=300&width=300" },
  { name: "Jane Smith", role: "Chief Investment Officer", image: "/placeholder.svg?height=300&width=300" },
  { name: "Mike Johnson", role: "Head of Operations", image: "/placeholder.svg?height=300&width=300" },
  { name: "Sarah Brown", role: "Lead Startup Advisor", image: "/placeholder.svg?height=300&width=300" },
]

const timeline = [
  { year: 2015, event: "Greenvile Angel Investment Co. founded" },
  { year: 2017, event: "First successful exit: TechStart acquired for $50M" },
  { year: 2019, event: "Launched Greenvile Incubator Program" },
  { year: 2021, event: "Expanded to international markets" },
  { year: 2023, event: "Reached $100M in total investments" },
]

export default function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const servicesRef = useRef(null)
  const contactRef = useRef(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please enter details first",
        variant: "destructive"
      })
      return
    }

    const emailBody = `
Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
    `

    console.log('Sending email to invest@gaico.in:')
    console.log(emailBody)

    setFormData({ name: '', email: '', message: '' })
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon.",
    })
  }

  return (
    <div className="min-h-screen bg-green-950 text-green-100">
      <Header servicesRef={servicesRef} contactRef={contactRef} />
      <main className="pt-24 pb-12">
        <section ref={servicesRef} className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl font-bold mb-6 text-green-400"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Greenvile
            </motion.h1>
            <motion.p 
              className="text-xl mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We are a team of passionate investors and entrepreneurs dedicated to nurturing the next generation of innovative startups. Our mission is to provide not just capital, but also the guidance and resources needed to turn groundbreaking ideas into successful businesses.
            </motion.p>
          </div>
        </section>

        <section className="py-20 px-4 bg-green-900/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-green-400">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-green-950 border-green-800">
                    <CardContent className="p-4 text-center">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={200}
                        height={200}
                        className="rounded-full mx-auto mb-4"
                      />
                      <h3 className="text-xl font-semibold mb-2 text-green-400">{member.name}</h3>
                      <p className="text-green-300">{member.role}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-green-400">Our Journey</h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div 
                  key={item.year}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-24 text-right font-bold text-green-400">{item.year}</div>
                  <div className="w-4 h-4 rounded-full bg-green-400"></div>
                  <div className="flex-1 p-4 bg-green-900/20 rounded-lg">{item.event}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section ref={contactRef} className="py-20 px-4 bg-green-900/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-green-400">Contact Us</h2>
            <Card className="bg-green-950 border-green-800">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                  <Input 
                    name="email" 
                    type="email" 
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                  <Textarea 
                    name="message" 
                    placeholder="Your Message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    required 
                  />
                  <Button type="submit">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
