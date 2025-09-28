'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import Button from '@/components/ui/Button';
import constantsData from '@/constants';

const ProductShowcaseSection = () => {
  const productConstants = useMemo(
    () => constantsData.productShowcaseSection,
    []
  );

  return (
    <section className='py-10 lg:py-16 bg-gray-50'>
      <div className=''>
        <div className='space-y-24'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-2 items-center'>
            {/* Left - Car Loan Application Screenshot */}
            <div className='order-2 lg:order-1'>
              <Image
                src={productConstants.carFinancing.image.src}
                alt={productConstants.carFinancing.image.alt}
                width={800}
                height={600}
                className='w-full h-auto'
              />
            </div>

            {/* Right - Car Financing Content */}
            <div className='order-1 lg:order-2 px-4 sm:px-4 lg:px-16'>
              <h2 className='text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight mb-2'>
                {productConstants.carFinancing.title}
              </h2>

              <p className='text-xl text-black mb-6'>
                {productConstants.carFinancing.subtitle}
              </p>

              <p className='text-lg text-gray-600 leading-relaxed mb-8'>
                {productConstants.carFinancing.description}
              </p>

              <hr className='my-6 border-gray-300' />

              <ul className='space-y-4 mb-8'>
                {productConstants.carFinancing.features.map(
                  (feature, index) => (
                    <li key={index} className='flex items-start'>
                      <div className='w-5 h-5 bg-feature-purple-light rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5'>
                        <Check className='w-3 h-3 text-feature-purple' />
                      </div>
                      <span className='text-black'>{feature}</span>
                    </li>
                  )
                )}
              </ul>

              <hr className='my-6 border-gray-300' />

              <p className='text-lg text-gray-600 leading-relaxed mb-8'>
                {productConstants.carFinancing.conclusion}
              </p>

              <Button
                variant='primary'
                size='md'
                rightArrow={true}
                text={productConstants.carFinancing.buttonText}
              />
            </div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-2 items-center'>
            {/* Left - Dealership Management Content */}
            <div className='order-1 lg:order-2 px-4 sm:px-4 lg:px-16'>
              <h2 className='text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6'>
                {productConstants.dealershipManagement.title}
              </h2>

              <p className='text-lg text-gray-600 leading-relaxed mb-8'>
                {productConstants.dealershipManagement.description}
              </p>

              <hr className='my-6 border-gray-300' />

              <ul className='space-y-6 mb-8'>
                {productConstants.dealershipManagement.features.map(
                  (feature, index) => (
                    <li key={index} className='flex items-start'>
                      <div className='w-5 h-5 bg-feature-purple-light rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5'>
                        <Check className='w-3 h-3 text-feature-purple' />
                      </div>
                      <div>
                        <strong className='text-gray-900 block mb-1'>
                          {feature.title}
                        </strong>
                        <span className='text-gray-600'>
                          {feature.description}
                        </span>
                      </div>
                    </li>
                  )
                )}
              </ul>

              <hr className='my-6 border-gray-300' />

              <p className='text-lg text-gray-600 leading-relaxed mb-8'>
                {productConstants.dealershipManagement.conclusion}
              </p>

              <Button
                variant='primary'
                size='md'
                rightArrow={true}
                text={productConstants.dealershipManagement.buttonText}
              />
            </div>

            <div className='order-1 lg:order-2'>
              <Image
                src={productConstants.dealershipManagement.image.src}
                alt={productConstants.dealershipManagement.image.alt}
                width={800}
                height={600}
                className='w-full h-auto'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcaseSection;
