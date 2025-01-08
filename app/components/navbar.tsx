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
    <div className="fixed top-0 left-0 right-0 z-10">
      {/* Auth Bar */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="flex justify-end items-center py-2 px-5 md:px-5 lg:px-10">
          <div className="flex items-center gap-4 text-sm xl:px-20">
            <Link
              href="/login"
              className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Login
            </Link>
            <Link
              href="/sign-up"
              className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-sm md:px-5 lg:px-10 xl:px-20">
        <div className="h-[15vh] mx-auto flex items-center justify-between px-5">
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
            <button className="bg-blue-600 font-semibold hover:bg-blue-700 transition-colors text-white px-4 text-xl py-2 rounded-md lg:text-2xl">
              Get Started
            </button>
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
            <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden">
              <div className="flex flex-col items-start py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="w-full px-6 py-2 text-3xl text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <button className="bg-blue-600 font-semibold hover:bg-blue-700 transition-colors mx-6 my-2 px-4 py-2 rounded-md text-white text-3xl">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
