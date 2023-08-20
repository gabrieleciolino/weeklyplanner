import React from 'react';
import Icons from './Icons';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'base' | 'large' | 'full' | 'icon';
  disabled?: boolean;
  loading?: boolean;
  children?: React.ReactNode;
  label?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'base',
      disabled = false,
      loading = false,
      className = '',
      label = '',
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
      icon: 'unset',
    };

    const baseButtonClasses = `relative font-medium rounded-full font-roboto text-sm lg:text-base flex items-center justify-center hover:border hover:border-fuchsia-blue-400`;

    let variantButtonClasses;

    switch (variant) {
      case 'tertiary':
        variantButtonClasses =
          'bg-white border border-fuchsia-blue-700 text-fuchsia-blue-700';
        break;
      case 'secondary':
        variantButtonClasses =
          'bg-riptide-200 text-riptide-800 border border-riptide-300';
        break;
      case 'primary':
      default:
        variantButtonClasses =
          'bg-fuchsia-blue-700 text-white border border-fuchsia-blue-700';
    }

    const sizeButtonClasses = {
      small: 'h-6 px-4 ',
      base: 'h-8 px-4 ',
      large: 'h-9 px-4 ',
      full: 'h-9 w-full px-4 ',
      icon: 'w-7 h-7 lg:h-9 lg:w-9 -mt-2',
    };

    return (
      <button
        className={`${baseButtonClasses} ${variantButtonClasses} ${sizeButtonClasses[size]} ${className}`}
        disabled={disabled}
        style={{
          opacity: disabled || loading ? 0.5 : 1,
          minWidth: sizes[size],
          lineHeight: 1,
        }}
        ref={ref}
        {...props}
      >
        {loading ? (
          <div className="loading-icon">
            <Icons name="loading" />
          </div>
        ) : size === 'icon' ? (
          <div className="text-base lg:text-xl">
            <span>{children}</span>
            {label && (
              <span className="absolute -bottom-4 left-[50%] -translate-x-[50%] whitespace-nowrap text-xs text-fuchsia-blue-700">
                {label}
              </span>
            )}
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
