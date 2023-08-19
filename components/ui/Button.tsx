import React from 'react';
import { FaSpinner } from 'react-icons/fa6';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'base' | 'large' | 'full';
  disabled?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'base',
      disabled = false,
      loading = false,
      className = '',
      children,
      ...props
    },
    ref,
  ) => {
    const sizes = {
      small: '7rem',
      base: '8rem',
      large: '9rem',
      full: '8rem',
    };

    const baseButtonClasses = `rounded-full font-roboto font-medium px-4 flex items-center justify-center hover:border hover:border-fuchsia-blue-400`;

    let variantButtonClasses;

    switch (variant) {
      case 'tertiary':
        variantButtonClasses =
          'bg-white border border-fuchsia-blue-700 text-fuchsia-blue-700';
        break;
      case 'secondary':
        variantButtonClasses = 'bg-riptide-300 text-fuchsia-blue-900';
        break;
      case 'primary':
      default:
        variantButtonClasses = 'bg-fuchsia-blue-700 text-white';
    }

    let sizeButtonClasses = {
      small: 'h-7',
      base: 'h-8',
      large: 'h-9',
      full: 'h-9 w-full',
    };

    return (
      <button
        className={`${baseButtonClasses} ${variantButtonClasses} ${sizeButtonClasses[size]} ${className}`}
        disabled={disabled}
        style={{
          opacity: disabled || loading ? 0.5 : 1,
          minWidth: sizes[size],
        }}
        ref={ref}
        {...props}
      >
        {loading ? (
          <div className="loading-icon">
            <FaSpinner />
          </div>
        ) : (
          children
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
