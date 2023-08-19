import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  icon: React.ReactNode;
  label?: string;
}

const IconButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      disabled = false,
      className = '',
      icon,
      label,
      variant = 'primary',
      size = 'medium',
      ...props
    },
    ref,
  ) => {
    const variantClasses =
      variant === 'primary'
        ? 'bg-fuchsia-blue-400 text-white'
        : variant === 'secondary'
        ? 'bg-mint text-fuchsia-blue-400'
        : 'border border-mint text-mint';
    const sizeClasses =
      size === 'small'
        ? 'w-[20px] h-[20px] text-xl'
        : size === 'large'
        ? 'w-[50px] h-[50px] text-4xl'
        : 'w-[30px] h-[30px] text-2xl';

    return (
      <div className="flex flex-col items-center justify-center">
        <button
          className={`flex items-center justify-center rounded-full font-medium ${variantClasses} ${sizeClasses} ${className}`}
          disabled={disabled}
          style={{
            opacity: disabled ? 0.5 : 1,
          }}
          ref={ref}
          {...props}
        >
          {icon}
        </button>
        {label && (
          <div className="text-mint hidden text-xs lg:block">{label}</div>
        )}
      </div>
    );
  },
);

IconButton.displayName = 'IconButton';

export default IconButton;
