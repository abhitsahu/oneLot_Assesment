'use client';

import Button from '@/components/ui/Button';
import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Captured global error:', error);
  }, [error]);

  return (
    <html>
      <body className='flex h-screen items-center justify-center bg-red-50'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-red-600'>
            Application Error!
          </h1>
          <p className='text-gray-700 mt-2'>{error.message}</p>
          <Button
            onClick={() => reset()}
            variant='primary'
            size='md'
            text='Try Again'
          />
        </div>
      </body>
    </html>
  );
}
