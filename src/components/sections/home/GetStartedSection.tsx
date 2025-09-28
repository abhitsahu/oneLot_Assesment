'use client';

import React from 'react';
import Button from '@/components/ui/Button';

const GetStartedSection = () => {
  return (
    <section className='py-16 lg:py-24 bg-white'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
            Get started today
          </h2>

          <p className='text-lg lg:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto'>
            We look forward to serving the needs of used car dealers across the
            Philippines and helping them thrive in this dynamic market.
          </p>

          <Button variant='primary' size='md' text='Inquire now' />
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
