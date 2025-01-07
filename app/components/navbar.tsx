'use client'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/features', label: 'Features' },
    { href: '/use-cases', label: 'Use Cases' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 right-0 z-10 md:px-5 lg:px-10 xl:px-20">
      <div className=" h-[15vh] mx-auto flex items-center justify-between px-5">
        <div className="flex-1">
          <Link href="/" className="text-xl font-bold lg:text-2xl xl:text-3xl">
            Logo
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-5 xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-600 hover:text-gray-900 md:text-lg lg:text-2xl xl:text-3xl"
            >
              {link.label}
            </Link>
          ))}
          <button className="bg-blue-500 text-white px-4 text-xl py-2 rounded-md lg:text-2xl lg:hover:bg-blue-600">Get Started</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-10 h-10"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-24 left-0 right-0 bg-white shadow-md md:hidden z-10">
            <div className="flex flex-col items-start py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-6 py-2 text-3xl text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button className="bg-blue-500 mx-6 my-2 px-4 py-2 rounded-md text-white text-3xl">Get Started</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
