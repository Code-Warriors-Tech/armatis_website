'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // You can replace with any icon
import { navItems } from '@/constant/data';


const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        {/* Logo */}
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={50} height={50} className="object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-bold transition ${
                pathname === item.href ? 'text-[#ED1969] border-b-2 border-[#ED1969]' : 'text-gray-800 hover:text-[#ED1969]'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <Link
          href="/contact"
          className="hidden lg:inline-block bg-[#ED1969] text-white rounded-full px-6 py-2 font-bold transition hover:bg-[#d0175f]"
        >
          Contact Us
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-gray-800"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pb-4 bg-white shadow-md">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-bold py-2 ${
                  pathname === item.href ? 'text-[#ED1969]' : 'text-gray-800'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#ED1969] text-white rounded-full px-6 py-2 font-bold transition hover:bg-[#d0175f] text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
