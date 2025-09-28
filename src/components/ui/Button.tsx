import React, { useMemo } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  leftArrow?: boolean;
  rightArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  text,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  leftArrow = false,
  rightArrow = false,
}) => {
  const buttonStyles = useMemo(() => {
    const baseStyles =
      'font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variantStyles = {
      primary:
        'bg-primary text-white hover:bg-primary-hover focus:ring-primary',
      secondary:
        'bg-gray-100 text-brand-primary hover:bg-gray-200 focus:ring-gray-500',
      text: 'text-brand-primary hover:text-accent focus:ring-accent',
    };

    const sizeStyles = {
      sm: 'px-2 py-1 text-xs rounded-sm',
      md: 'px-3 sm:px-4 py-2 text-sm sm:text-base rounded-md',
      lg: 'px-4 sm:px-6 py-3 text-base sm:text-lg rounded-lg',
    };

    const disabledStyles = disabled
      ? 'opacity-50 cursor-not-allowed hover:bg-accent hover:text-white'
      : '';

    return `
      ${baseStyles}
      ${variantStyles[variant]}
      ${sizeStyles[size]}
      ${disabledStyles}
      ${className}
    `.trim();
  }, [variant, size, disabled, className]);

  const buttonContent = useMemo(() => {
    const content = text || children;

    const LeftArrowIcon = () => <ArrowLeft className='ml-2 w-4 h-4' />;

    const RightArrowIcon = () => <ArrowRight className='ml-2 w-4 h-4' />;

    return (
      <span className='flex items-center justify-center'>
        {leftArrow && <LeftArrowIcon />}
        {content}
        {rightArrow && <RightArrowIcon />}
      </span>
    );
  }, [text, children, leftArrow, rightArrow]);

  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
