'use client';

import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:px-10 lg:flex lg:flex-col lg:items-center lg:justify-center">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 grid grid-cols-2 md:grid-cols-1">
              <li><Link href="/features" className="hover:text-gray-300 transition-colors">Features</Link></li>
              <li><Link href="/use-cases" className="hover:text-gray-300 transition-colors">Use Cases</Link></li>
              <li><Link href="/pricing" className="hover:text-gray-300 transition-colors">Pricing</Link></li>
              <li><Link href="/about" className="hover:text-gray-300 transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-gray-300 transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300 transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-gray-300 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className='flex flex-col gap-5 lg:flex-row lg:gap-32'>
            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold mb-4">Contact Us</h4>
              <p className="mb-2">Email: info@company.com</p>
              <p className="mb-2">Phone: (123) 456-7890</p>
              <p>Address: 123 Business Street, City, Country</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 lg:w-[200px]">Connect With Us</h4>
              <div className="flex space-x-4">
                <Link href="https://facebook.com" className="hover:text-gray-300 transition-colors">
                  <FaFacebook size={24} />
                </Link>
                <Link href="https://twitter.com" className="hover:text-gray-300 transition-colors">
                  <FaXTwitter size={24} />
                </Link>
                <Link href="https://linkedin.com" className="hover:text-gray-300 transition-colors">
                  <FaLinkedin size={24} />
                </Link>
                <Link href="https://instagram.com" className="hover:text-gray-300 transition-colors">
                  <FaInstagram size={24} />
                </Link>
              </div>
            </div>

            
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-600 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Copyright */}
            <div className="text-sm">
              © {new Date().getFullYear()} Agentify.IA. All rights reserved.
            </div>
            {/* Legal Links */}
            <div className="text-sm md:text-right space-x-4">
              <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms of Service</Link>
              <Link href="/cookies" className="hover:text-gray-300 transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}