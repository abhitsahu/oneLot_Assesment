'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import constantsData from '@/constants';

const HeroSection = () => {
  const heroConstants = useMemo(() => constantsData.hero, []);

  return (
    <>
      <div className='flex flex-col items-center justify-start pt-8 sm:justify-center min-h-[60vh] px-4 sm:px-6 lg:px-8'>
        <div className='text-center max-w-7xl mx-auto'>
          <h1 className='text-3xl sm:text-5xl lg:text-5xl font-bold text-black leading-tight mb-6'>
            {heroConstants.title}
          </h1>
          <p className='text-md sm:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto'>
            {heroConstants.description}
          </p>

          <Button
            variant='primary'
            size='md'
            className='mt-6'
            text={heroConstants.buttonText}
          />
        </div>
      </div>

      <div className='relative bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='relative mb-8 -mt-8 sm:mt-0'>
            <Image
              src={heroConstants.heroImage.src}
              alt={heroConstants.heroImage.alt}
              width={heroConstants.heroImage.width}
              height={heroConstants.heroImage.height}
              className='w-full h-auto'
              priority
            />
          </div>
        </div>

        <div className='bg-gray-50 -mt-16 sm:-mt-32 lg:-mt-120 pt-16 sm:pt-32 lg:pt-120'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex flex-col items-center justify-center py-8'>
              <div className='text-center'>
                <p className='text-gray-600 mb-4 text-xl'>
                  {heroConstants.regulatedBy}
                </p>
                <Image
                  src={heroConstants.secImage.src}
                  alt={heroConstants.secImage.alt}
                  width={heroConstants.secImage.width}
                  height={heroConstants.secImage.height}
                  className='w-full h-auto'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
