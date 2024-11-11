import { Inter } from 'next/font/google'
import './globals.css'
import LoadingScreen from './components/LoadingScreen'
import ParticleBackground from './components/ParticleBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Greenvile Angel Investment Co',
  description: 'Empowering startups with green investments',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-green-950 text-green-100`}>
        <LoadingScreen />
        <ParticleBackground />
        {children}
      </body>
    </html>
  )
}