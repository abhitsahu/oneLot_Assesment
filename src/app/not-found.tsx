import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center'>
        <div className='mb-6'>
          <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
            <svg
              className='w-8 h-8 text-blue-600'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.57M15 12a3 3 0 11-6 0 3 3 0 016 0z'
              />
            </svg>
          </div>
          <h1 className='text-6xl font-bold text-gray-900 mb-4'>404</h1>
          <h2 className='text-2xl font-bold text-gray-900 mb-2'>
            Page Not Found
          </h2>
          <p className='text-gray-600 mb-6'>
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
          </p>
        </div>

        <div className='space-y-3'>
          <Link
            href='/'
            className='block w-full bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary-hover transition-colors duration-200'
          >
            Go Home
          </Link>
          <Link
            href='/contact'
            className='block w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200'
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}
