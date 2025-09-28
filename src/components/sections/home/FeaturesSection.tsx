'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { DollarSign, TrendingUp, ArrowRight } from 'lucide-react';
import constantsData from '@/constants';

const FeaturesSection = () => {
  const featuresConstants = useMemo(() => constantsData.featuresSection, []);

  return (
    <section className='py-16 lg:py-24 bg-white'>
      <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-24'>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16 items-center'>
          {/* Left Column  */}
          <div className='lg:col-span-2'>
            <h2 className='text-2xl sm:text-2xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4'>
              {featuresConstants.title}
            </h2>

            <p className='text-xl text-gray-600 leading-relaxed mb-2'>
              {featuresConstants.description}
            </p>

            <Link
              href='#'
              className='inline-flex items-center text-lg font-medium text-primary hover:text-accent transition-colors duration-200 group'
            >
              {featuresConstants.buttonText}
              <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200' />
            </Link>
          </div>
          <hr className='block lg:hidden w-full border-t border-gray-300' />
          {/* Right Column  */}
          <div className='lg:col-span-2 space-y-8'>
            {featuresConstants.features.map((feature, index) => {
              return (
                <div key={feature.id} className='flex items-start space-x-3'>
                  <div className='flex-shrink-0'>
                    {index === 0 ? (
                      <div className='w-8 h-8 bg-feature-teal rounded-full flex items-center justify-center'>
                        <DollarSign className='w-5 h-5 text-feature-teal' />
                      </div>
                    ) : (
                      <div className='w-8 h-8 bg-feature-purple rounded-full flex items-center justify-center'>
                        <TrendingUp className='w-5 h-5 text-feature-purple' />
                      </div>
                    )}
                  </div>

                  <div className='flex-1'>
                    <h3 className='text-lg lg:text-xl font-bold text-gray-900 mb-2'>
                      {feature.title}
                    </h3>

                    <p
                      className={`text-lg font-medium mb-1 ${index === 0 ? 'text-feature-teal' : 'text-feature-purple'}`}
                    >
                      {feature.subtitle}
                    </p>

                    <p className='text-base text-gray-600 leading-relaxed'>
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
