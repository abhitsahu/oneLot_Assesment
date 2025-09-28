'use client';

import Button from '@/components/ui/Button';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Captured error:', error);
  }, [error]);

  return (
    <div className='flex h-screen items-center justify-center bg-red-50'>
      <div className='text-center'>
        <h1 className='text-2xl font-bold text-red-600'>
          Something went wrong!
        </h1>
        <p className='text-gray-700 mt-2'>{error.message}</p>
        <Button
          onClick={() => reset()}
          variant='primary'
          size='md'
          text='Try Again'
        />
      </div>
    </div>
  );
}
