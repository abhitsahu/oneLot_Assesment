import React from 'react';

interface LoadingSkeletonProps {
  variant?: 'section' | 'card' | 'text' | 'button';
  className?: string;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  variant = 'section',
  className = '',
}) => {
  const renderSkeleton = () => {
    switch (variant) {
      case 'section':
        return (
          <div className='py-16 lg:py-24 bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
              <div className='grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center'>
                <div className='lg:col-span-2 space-y-6'>
                  <div className='animate-pulse'>
                    <div className='h-8 bg-gray-200 rounded mb-4 w-4/5'></div>
                    <div className='h-8 bg-gray-200 rounded mb-4 w-3/4'></div>
                    <div className='h-4 bg-gray-200 rounded mb-2'></div>
                    <div className='h-4 bg-gray-200 rounded mb-2'></div>
                    <div className='h-4 bg-gray-200 rounded mb-2 w-5/6'></div>
                    <div className='h-6 bg-gray-200 rounded w-32 mt-6'></div>
                  </div>
                </div>

                <div className='lg:col-span-3 space-y-8'>
                  <div className='flex items-start space-x-6'>
                    <div className='animate-pulse'>
                      <div className='w-16 h-16 bg-gray-200 rounded-full'></div>
                    </div>
                    <div className='flex-1 space-y-3'>
                      <div className='animate-pulse'>
                        <div className='h-6 bg-gray-200 rounded mb-3 w-32'></div>
                        <div className='h-4 bg-gray-200 rounded mb-2 w-4/5'></div>
                        <div className='h-4 bg-gray-200 rounded mb-2'></div>
                        <div className='h-4 bg-gray-200 rounded w-3/4'></div>
                      </div>
                    </div>
                  </div>

                  <div className='flex items-start space-x-6'>
                    <div className='animate-pulse'>
                      <div className='w-16 h-16 bg-gray-200 rounded-full'></div>
                    </div>
                    <div className='flex-1 space-y-3'>
                      <div className='animate-pulse'>
                        <div className='h-6 bg-gray-200 rounded mb-3 w-48'></div>
                        <div className='h-4 bg-gray-200 rounded mb-2 w-5/6'></div>
                        <div className='h-4 bg-gray-200 rounded mb-2'></div>
                        <div className='h-4 bg-gray-200 rounded w-2/3'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'card':
        return (
          <div className='animate-pulse'>
            <div className='bg-gray-200 rounded-lg p-6'>
              <div className='h-4 bg-gray-300 rounded mb-4'></div>
              <div className='h-4 bg-gray-300 rounded mb-2'></div>
              <div className='h-4 bg-gray-300 rounded w-3/4'></div>
            </div>
          </div>
        );

      case 'text':
        return (
          <div className='animate-pulse'>
            <div className='h-4 bg-gray-200 rounded mb-2'></div>
            <div className='h-4 bg-gray-200 rounded mb-2'></div>
            <div className='h-4 bg-gray-200 rounded w-3/4'></div>
          </div>
        );

      case 'button':
        return (
          <div className='animate-pulse'>
            <div className='h-10 bg-gray-200 rounded-md w-32'></div>
          </div>
        );

      default:
        return (
          <div className='animate-pulse'>
            <div className='h-4 bg-gray-200 rounded'></div>
          </div>
        );
    }
  };

  return <div className={className}>{renderSkeleton()}</div>;
};

export default LoadingSkeleton;
