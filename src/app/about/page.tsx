'use client'

import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"

const timelineEvents = [
  { year: "2020", title: "Foundation", description: "Greenville Angel Investment Co. was established with a vision to support innovative startups." },
  { year: "2021", title: "First Investment", description: "Successfully completed our first round of investments in 5 promising startups." },
  { year: "2022", title: "Portfolio Expansion", description: "Expanded our portfolio to include 10+ companies across various sectors." },
  { year: "2023", title: "Global Reach", description: "Extended our network internationally and launched our startup accelerator program." },
  { year: "2024", title: "Future Growth", description: "Continuing to grow and support the next generation of innovative companies." }
]

const founders = [
  {
    name: "Dr. Timothy Dudly",
    role: "Founder & CEO",
    bio: "Former VP at Goldman Sachs with 15+ years of investment experience.",
    image: "/placeholder.svg?height=400&width=400"
  },
  {
    name: "Adv. Shan Russel",
    role: "Co-Founder & CTO",
    bio: "Legal Advisor and Strategist.",
    image: "/placeholder.svg?height=400&width=400"
  },
  {
    name: "David Kumar",
    role: "Co-Founder & COO",
    bio: "20+ years of operational experience in scaling startups to unicorns.",
    image: "/placeholder.svg?height=400&width=400"
  }
]

export default function About() {
  return (
    <div className="min-h-screen bg-green-950">
      <Header />
      <main className="pt-24 px-4 pb-12">
        <div className="max-w-6xl mx-auto">
          <motion.h1 
            className="text-4xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About Greenville Angel Investment Co.
          </motion.h1>

          {/* Timeline Section */}
          <section className="mb-20">
            <motion.h2 
              className="text-3xl font-bold text-white mb-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Our Journey
            </motion.h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-green-400/20" />
              
              {/* Timeline events */}
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={event.year}
                  className={`flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className={`w-1/2 flex ${index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
                    <div className="max-w-md">
                      <div className="text-green-400 font-bold text-xl mb-2">{event.year}</div>
                      <h3 className="text-white font-semibold text-lg mb-2">{event.title}</h3>
                      <p className="text-green-100">{event.description}</p>
                    </div>
                  </div>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-400 rounded-full" />
                </motion.div>
              ))}
            </div>
          </section>

          {/* Founders Section */}
          <section className="mb-20">
            <motion.h2 
              className="text-3xl font-bold text-white mb-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Meet Our Founders
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {founders.map((founder, index) => (
                <motion.div
                  key={founder.name}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="mb-4 relative mx-auto w-48 h-48 rounded-full overflow-hidden">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-1">{founder.name}</h3>
                  <p className="text-green-400 mb-2">{founder.role}</p>
                  <p className="text-green-100">{founder.bio}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6 bg-green-900/20 border-green-800">
                <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                <form className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Name" 
                      className="bg-green-900/30 border-green-800 text-white placeholder:text-green-400/50"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      className="bg-green-900/30 border-green-800 text-white placeholder:text-green-400/50"
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Phone Number" 
                      className="bg-green-900/30 border-green-800 text-white placeholder:text-green-400/50"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Your Message" 
                      className="bg-green-900/30 border-green-800 text-white placeholder:text-green-400/50 min-h-[150px]"
                    />
                  </div>
                  <Button className="w-full bg-green-400 text-green-950 hover:bg-green-300">
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-green-400 font-semibold mb-2">Visit Us</h3>
                <p className="text-white">
                  Genesis Startup Studio<br />
                  16th Cross Rd Narayanapura<br />
                  Bengaluru, Karnataka 560077
                </p>
              </div>

              <div>
                <h3 className="text-green-400 font-semibold mb-2">Call Us</h3>
                <p className="text-white">+91 914 850 2999</p>
              </div>

              <div>
                <h3 className="text-green-400 font-semibold mb-2">Email Us</h3>
                <p className="text-white">invest@gaico.in</p>
              </div>

              <div>
                <h3 className="text-green-400 font-semibold mb-2">Office Hours</h3>
                <p className="text-white">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Weekend: By Appointment
                </p>
              </div>
            </motion.div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}