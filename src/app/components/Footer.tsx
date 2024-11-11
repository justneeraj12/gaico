import Link from 'next/link'
import { Twitter, Linkedin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-green-900 text-green-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About GAIC</h3>
            <p>Empowering the next generation of tech innovators through strategic investments and comprehensive support.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-green-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-green-400 transition-colors">Services</Link></li>
              <li><Link href="/portfolio" className="hover:text-green-400 transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-green-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <address className="not-italic">
              Genesis Startup Studio<br />
              16th Cross Rd Narayanapura<br />
              Bengaluru, Karnataka 560077
            </address>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                <Twitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                <Linkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-800 text-center">
          <p>&copy; 2024 Greenville Angel Investment Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}