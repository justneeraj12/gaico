import React from 'react'
import Link from 'next/link'
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Instagram } from 'lucide-react'

const Footer = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <footer ref={ref} className="bg-green-950 text-green-100 py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold text-green-400 mb-4">Greenvile</h3>
          <p className="mb-4">Empowering the next generation of innovative startups.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-green-400 hover:text-green-300">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-green-400 hover:text-green-300">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-green-400 hover:text-green-300">
              <LinkedIn size={20} />
            </a>
            <a href="#" className="text-green-400 hover:text-green-300">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-green-400 mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-green-400">About Us</Link></li>
            <li><Link href="/portfolio" className="hover:text-green-400">Our Portfolio</Link></li>
            <li><Link href="/apply" className="hover:text-green-400">Apply for Funding</Link></li>
            <li><Link href="#" className="hover:text-green-400">News & Insights</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-green-400 mb-4">Contact Us</h4>
          <p>Genesis Startup Studio</p>
          <p>16th Cross Rd Narayanapura</p>
          <p>Bengaluru, Karnataka 560077</p>
          <p className="mt-2">Email: invest@gaico.in</p>
          <p>Phone: +91 914 850 2999</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-green-400 mb-4">Newsletter</h4>
          <p className="mb-4">Stay updated with our latest news and investment opportunities.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="bg-green-900 text-green-100 px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="bg-green-400 text-green-950 px-4 py-2 rounded-r-md hover:bg-green-300 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center text-green-400">
        <p>&copy; 2024 Greenvile Angel Investment Co. All rights reserved.</p>
      </div>
    </footer>
  )
})

Footer.displayName = 'Footer'

export default Footer