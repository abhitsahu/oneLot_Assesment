'use client';

import React, { useMemo } from 'react';
import { Lock, BarChart3, Zap, Truck, ThumbsUp } from 'lucide-react';
import constantsData from '@/constants';

const WhyOneLotSection = () => {
  const whyOneLotConstants = useMemo(() => constantsData.whyOneLotSection, []);

  const iconMap = {
    trust: Lock,
    'high-amount': BarChart3,
    fast: Zap,
    flexible: Truck,
    easy: ThumbsUp,
  };

  return (
    <section className='py-16 lg:py-24 bg-white'>
      <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-24'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
            {whyOneLotConstants.title}
          </h2>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8'>
          {whyOneLotConstants.features.map(feature => {
            const IconComponent = iconMap[feature.id as keyof typeof iconMap];

            return (
              <div
                key={feature.id}
                className='bg-white border border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200'
              >
                <div className='w-12 h-12 bg-feature-purple rounded-lg flex items-center justify-center mx-auto mb-4'>
                  <div className='text-feature-purple'>
                    <IconComponent className='w-6 h-6' />
                  </div>
                </div>

                <h3 className='text-lg font-bold text-gray-900 mb-3'>
                  {feature.title}
                </h3>

                <p className='text-sm text-gray-600 leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyOneLotSection;
