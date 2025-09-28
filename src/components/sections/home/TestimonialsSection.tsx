'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import constantsData from '@/constants';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonialsConstants = useMemo(
    () => constantsData.testimonialsSection,
    []
  );

  const nextTestimonial = () => {
    setCurrentTestimonial(prev =>
      prev === testimonialsConstants.testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(prev =>
      prev === 0 ? testimonialsConstants.testimonials.length - 1 : prev - 1
    );
  };

  const current = testimonialsConstants.testimonials[currentTestimonial];

  return (
    <section className='py-16 lg:py-24 bg-gray-50'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          {/* Section Title */}
          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8'>
            {testimonialsConstants.title}
          </h2>

          {/* Profile Picture */}
          <div className='mb-6 lg:mb-8'>
            <div className='w-20 h-20 lg:w-24 lg:h-24 mx-auto rounded-full overflow-hidden'>
              <Image
                src={current.image.src}
                alt={current.image.alt}
                width={96}
                height={96}
                className='w-full h-full object-cover'
                priority={currentTestimonial === 0}
              />
            </div>
          </div>

          {/* Testimonial Quote */}
          <blockquote className='text-lg lg:text-xl xl:text-2xl font-medium text-gray-900 leading-relaxed mb-4 lg:mb-6 max-w-sm lg:max-w-3xl mx-auto'>
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          {/* Attribution */}
          <div className='mb-8 lg:mb-12 flex flex-col lg:flex-row items-center justify-center gap-0 lg:gap-3'>
            <p className='text-base lg:text-lg font-semibold text-gray-900 mb-1 lg:mb-0'>
              {current.name}
            </p>
            <p className='text-sm lg:text-base text-gray-600'>
              {current.title}
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className='flex justify-center items-center space-x-8 lg:space-x-12'>
            <button
              onClick={prevTestimonial}
              className='w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center hover:opacity-70 transition-opacity duration-200 cursor-pointer'
              aria-label='Previous testimonial'
            >
              <ArrowLeft className='w-4 h-4 lg:w-5 lg:h-5 text-gray-600' />
            </button>

            <button
              onClick={nextTestimonial}
              className='w-6 h-6 lg:w-8 lg:h-8 flex items-center justify-center hover:opacity-70 transition-opacity duration-200 cursor-pointer'
              aria-label='Next testimonial'
            >
              <ArrowRight className='w-4 h-4 lg:w-5 lg:h-5 text-gray-600' />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
