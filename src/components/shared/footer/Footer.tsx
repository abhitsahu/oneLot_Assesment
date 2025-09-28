'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Instagram, Facebook, Flag } from 'lucide-react';

const Footer = () => {
  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialMediaLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/onelot',
      icon: Instagram,
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com/onelot',
      icon: Facebook,
    },
  ];

  return (
    <footer className='bg-white'>
      <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-16 py-8'>
        {/* Top Section */}
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6'>
          {/* Left Side - Logo */}
          <div className='flex items-center space-x-3 mb-4 lg:mb-6'>
            <Image
              src='/assets/shared/images/logo.webp'
              alt='OneLot Logo'
              width={130}
              height={32}
              className='w-32 h-12'
            />
          </div>

          {/* Right Side - Navigation and Language */}
          <div className='flex flex-col space-y-4'>
            {/* Navigation Links */}
            <nav className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6'>
              {navigationLinks.map(link => (
                <Link
                  key={link.name}
                  href={link.href}
                  className='text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200'
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Language Selector */}
            <div className='flex lg:justify-end'>
              <button className='flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 flex-right'>
                <span>ENG</span>
                <div className='w-4 h-3 bg-gray-200 rounded-sm flex items-center justify-center'>
                  <Flag className='w-3 h-3 text-gray-600' />
                </div>
                <ChevronDown className='w-4 h-4' />
              </button>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <div className='border-t border-gray-200 mb-8'></div>

        {/* Bottom Section */}
        <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center mb-4'>
          {/* Left Side - Copyright */}
          <div className='space-y-4 text-sm text-gray-500 mb-4 lg:mb-0'>
            <p>
              © 2023 OneLot Technologies Incorporated Pte. Ltd. All rights
              reserved.
            </p>
            <p>© 2023 OneLot Financing Corporation All rights reserved.</p>
          </div>

          {/* Right Side - Social Media Icons */}
          <div className='flex items-center space-x-4'>
            {socialMediaLinks.map(social => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center justify-center '
                  aria-label={`Follow us on ${social.name}`}
                >
                  <IconComponent className='w-6 h-6 text-black' />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
