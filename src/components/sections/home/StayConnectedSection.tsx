'use client';

import React, { useRef, useMemo } from 'react';
import { Facebook, Instagram } from 'lucide-react';
import SocialMediaCard from '@/components/ui/SocialMediaCard';
import constantsData from '@/constants';

const StayConnectedSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const stayConnectedConstants = useMemo(
    () => constantsData.stayConnectedSection,
    []
  );

  return (
    <section className='py-16 lg:py-24 bg-white'>
      <div className='mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-12 px-4 sm:px-6'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
            {stayConnectedConstants.title}
          </h2>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            {stayConnectedConstants.description}
          </p>
        </div>

        {/* Social Media Buttons */}
        <div className='flex sm:flex-row flex-col justify-center gap-4 mb-16 items-center'>
          <button className='flex items-center space-x-3 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200'>
            <Facebook className='w-5 h-5 text-black' />
            <span className='text-black font-medium'>
              Follow us on Facebook
            </span>
          </button>
          <button className='flex items-center space-x-3 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200'>
            <Instagram className='w-5 h-5 text-black' />
            <span className='text-black font-medium'>
              Follow us on Instagram
            </span>
          </button>
        </div>

        <div className='relative'>
          {/* Cards Container */}
          <div
            ref={scrollContainerRef}
            className='flex space-x-6 overflow-x-auto scrollbar-hide pb-4'
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {stayConnectedConstants.socialMediaPosts.map(post => (
              <div key={post.id} className='flex-shrink-0 w-80'>
                <SocialMediaCard post={post} />
              </div>
            ))}
          </div>
        </div>

        {/* Custom scrollbar styles */}
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </section>
  );
};

export default StayConnectedSection;
