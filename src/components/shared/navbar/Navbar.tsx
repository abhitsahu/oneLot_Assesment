'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import MobileMenu from './MobileMenu';
import Button from '@/components/ui/Button';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className='bg-white border-b border-gray-200 sticky top-0 z-50 relative'>
      <div className='max-w-8xl mx-auto px-4 sm:px-8 lg:px-16'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo and Navigation */}
          <div className='flex items-center space-x-8'>
            <Link
              href='/'
              className='flex-shrink-0 flex items-center space-x-3'
            >
              <Image
                src='/assets/shared/images/logo.webp'
                alt='logo'
                width={130}
                height={32}
                className='object-contain'
                style={{ width: 'auto', height: 'auto' }}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className='hidden md:flex md:items-center md:space-x-8'>
              {navigation.map(item => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-2 sm:px-3 py-2 text-sm sm:text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-brand-primary'
                      : 'text-brand-primary hover:text-accent'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className='hidden md:flex md:items-center md:space-x-4'>
            <Button variant='text' size='md' text='Log In' />
            <Button variant='primary' size='md' text='Inquire now' />
          </div>

          {/* Mobile Menu Component */}
          <MobileMenu
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            navigation={navigation}
            isActive={isActive}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
