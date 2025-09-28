'use client';

import React from 'react';
import Image from 'next/image';
import { MoreHorizontal, Heart, Globe, ThumbsUp, Circle } from 'lucide-react';

interface SocialMediaCardProps {
  post: {
    id: number;
    description: string;
    image: {
      src: string;
      alt: string;
    };
    likes: number;
    comments: number;
    shares: number;
    date: string;
    location?: string;
    year?: string;
    make?: string;
    hashtags?: string;
  };
}

const SocialMediaCard: React.FC<SocialMediaCardProps> = ({ post }) => {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden w-80 h-96 flex flex-col'>
      {/* Header */}
      <div className='flex items-center justify-between p-4 pb-2'>
        <div className='flex items-center space-x-3'>
          {/* OneLot Logo */}
          <div className='w-8 h-8 bg-secondary rounded-full flex items-center justify-center'>
            <Circle className='w-4 h-4 text-white' />
          </div>
          <div>
            <h3 className='font-semibold text-gray-900 text-sm'>OneLot</h3>
            <div className='flex items-center space-x-1'>
              <p className='text-xs text-gray-500'>{post.date}</p>
              <Globe className='w-3 h-3 text-gray-400' />
            </div>
          </div>
        </div>
        <button className='text-gray-400 hover:text-gray-600'>
          <MoreHorizontal className='w-5 h-5' />
        </button>
      </div>

      {/* Content */}
      <div className='px-4 pb-2 flex-1 flex flex-col'>
        <p className='text-sm text-gray-900 mb-2'>{post.description}</p>

        {/* Link */}
        <p className='text-xs text-blue-600 mb-2'>
          Sign-up OneLot&apos;s dealer platform today, and your cars easier
          https://one-lot.com/
        </p>

        {/* Additional Details */}
        {(post.location || post.year || post.make) && (
          <div className='text-xs text-gray-600 mb-2'>
            {post.location && <p>Location: {post.location}</p>}
            {post.year && <p>Year: {post.year}</p>}
            {post.make && <p>Make: {post.make}</p>}
          </div>
        )}

        {/* Hashtags */}
        {post.hashtags && (
          <p className='text-xs text-blue-600'>{post.hashtags}</p>
        )}
      </div>

      {/* Image */}
      <div className='relative flex-shrink-0'>
        <Image
          src={post.image.src}
          alt={post.image.alt}
          width={320}
          height={200}
          className='w-full h-48 object-cover'
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>

      {/* Footer - Engagement */}
      <div className='px-4 py-3 border-t border-gray-100 flex-shrink-0'>
        <div className='flex items-center justify-between text-xs text-gray-500 mb-2'>
          <div className='flex items-center space-x-1'>
            <ThumbsUp className='w-3 h-3 text-blue-500' />
            <Heart className='w-3 h-3 text-red-500' />
            <Heart className='w-3 h-3 text-yellow-500' />
            <span className='ml-1'>{post.likes}</span>
          </div>
          <div className='flex items-center space-x-4'>
            <span>{post.comments} Comments</span>
            <span>{post.shares} Shares</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaCard;
