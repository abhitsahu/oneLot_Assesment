'use client';

import Link from 'next/link';
import Button from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  navigation: Array<{
    name: string;
    href: string;
  }>;
  isActive: (href: string) => boolean;
}

const MobileMenu = ({
  isMenuOpen,
  setIsMenuOpen,
  navigation,
  isActive,
}: MobileMenuProps) => {
  return (
    <>
      {/* Mobile menu button */}
      <div className='md:hidden flex items-center'>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500'
          aria-expanded='false'
        >
          <span className='sr-only'>Open main menu</span>
          {!isMenuOpen ? (
            <Menu className='h-6 w-6' />
          ) : (
            <X className='h-6 w-6' />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className='md:hidden absolute top-full left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg'>
          <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-accent'
                    : 'text-brand-primary hover:text-accent'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className='px-3 py-2 space-y-2'>
              <Button
                variant='text'
                size='md'
                className='block w-full text-left'
                onClick={() => setIsMenuOpen(false)}
                text='Log In'
              />
              <Button
                variant='primary'
                size='md'
                className='block w-full'
                onClick={() => setIsMenuOpen(false)}
                text='Inquire now'
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
