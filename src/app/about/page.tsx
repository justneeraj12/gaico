'use client'

import { useState, useRef, useEffect } from "react";
import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Textarea } from "../components/ui/textarea"
import { Button } from "../components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
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
    phone: '',
    companyName: '',
    companyWebsite: '',
    industry: '',
    pitch: '',
    fundingAmount: '',
    useOfFunds: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, industry: value }));
  };

  const validateForm = () => {
    return Object.values(formData).every(value => value.trim() !== '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      toast({
        title: "Form Incomplete",
        description: "Please fill out all fields before submitting.",
      });
      return;
    }

    const emailBody = `
      Name: ${formData.name}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Company Name: ${formData.companyName}
      Company Website: ${formData.companyWebsite}
      Industry: ${formData.industry}
      Pitch: ${formData.pitch}
      Funding Amount: ${formData.fundingAmount}
      Use of Funds: ${formData.useOfFunds}
      Message: ${formData.message}
    `;

    // Here you would typically send the email using your preferred method
    // For demonstration, we'll log it to the console
    console.log('Sending email to invest@gaico.in:');
    console.log(emailBody);

    // Reset the form
    setFormData({ name: '', email: '', phone: '', companyName: '', companyWebsite: '', industry: '', pitch: '', fundingAmount: '', useOfFunds: '', message: '' });
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you soon.",
    });
  };

  const servicesRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Ensure the component is only rendered on the client
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="min-h-screen bg-green-950 text-green-100">
      <Header servicesRef={servicesRef} contactRef={contactRef} />
      <main className="pt-24 pb-12">
        <section className="py-20 px-4">
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
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
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
                        <SelectValue placeholder="Select Industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tech">Tech</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="pitch" className="block mb-2 text-sm font-medium text-green-300">Elevator Pitch</label>
                    <Textarea id="pitch" name="pitch" value={formData.pitch} onChange={handleInputChange} className="bg-green-950 border-green-700 text-green-100" required />
                  </div>
                  <div>
                    <label htmlFor="funding-amount" className="block mb-2 text-sm font-medium text-green-300">Funding Amount</label>
                    <Input id="funding-amount" name="fundingAmount" value={formData.fundingAmount} onChange={handleInputChange} className="bg-green-950 border-green-700 text-green-100" required />
                  </div>
                  <div>
                    <label htmlFor="use-of-funds" className="block mb-2 text-sm font-medium text-green-300">Use of Funds</label>
                    <Textarea id="use-of-funds" name="useOfFunds" value={formData.useOfFunds} onChange={handleInputChange} className="bg-green-950 border-green-700 text-green-100" required />
                  </div>
                  <Button type="submit" className="w-full bg-green-700 text-green-100">Submit Application</Button>
                </form>
              </CardContent>
            </Card>
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

        <section className="py-20 px-4 bg-green-900/20">
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