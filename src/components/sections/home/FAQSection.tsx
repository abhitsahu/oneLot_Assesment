'use client';

import React, { useState, useMemo } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import constantsData from '@/constants';
import Button from '@/components/ui/Button';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqConstants = useMemo(() => constantsData.faqSection, []);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='py-16 lg:py-24 bg-gray-50'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl lg:text-5xl font-bold text-gray-900'>
            {faqConstants.title}
          </h2>
        </div>

        <div className='space-y-0'>
          {faqConstants.faqs.map((faq, index) => (
            <div
              key={faq.id}
              className='border-b border-gray-200 last:border-b-0'
            >
              <button
                onClick={() => toggleFAQ(index)}
                className='w-full py-6 px-0 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200'
              >
                <div className='flex items-center space-x-4 flex-1 text-left'>
                  <div className='w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0'>
                    <HelpCircle className=' text-white' />
                  </div>

                  <h3 className='text-lg font-semibold text-gray-900'>
                    {faq.question}
                  </h3>
                </div>

                <div className='flex-shrink-0 ml-4'>
                  {openIndex === index ? (
                    <ChevronUp className='w-5 h-5 text-gray-600' />
                  ) : (
                    <ChevronDown className='w-5 h-5 text-gray-600' />
                  )}
                </div>
              </button>

              {openIndex === index && (
                <div className='pb-6 px-0'>
                  <div className='ml-12 pr-16'>
                    <p className='text-gray-600 leading-relaxed'>
                      {faq.answer.split('See full requirements.')[0]}
                      {faq.hasLink && (
                        <>
                          {' '}
                          <a
                            href={faq.linkUrl}
                            className='text-secondary hover:text-secondary-hover underline font-medium'
                          >
                            {faq.linkText}
                          </a>
                        </>
                      )}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className='text-center mt-12'>
          <Button
            variant='primary'
            size='md'
            text='See all'
            rightArrow={true}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
