import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "tertiary";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    icon: React.ReactNode;
    label?: string;
}

const IconButton = React.forwardRef<HTMLButtonElement, ButtonProps>(({ disabled = false, className = '', icon, label, variant = 'primary', size = "medium", ...props }, ref) => {
    const variantClasses = variant === 'primary' ? 'bg-purple text-white' : (variant === 'secondary' ? 'bg-mint text-purple' : 'border border-mint text-mint')
    const sizeClasses = size === 'small' ? 'w-[20px] h-[20px] text-xl' : (size === 'large' ? 'w-[50px] h-[50px] text-4xl' : 'w-[30px] h-[30px] text-2xl')

    return (
        <div className="flex justify-center items-center flex-col">
            <button className={`rounded-full font-medium flex justify-center items-center ${variantClasses} ${sizeClasses} ${className}`} disabled={disabled} style={{
                opacity: disabled ? 0.5 : 1
            }} ref={ref} {...props}>
                {icon}
            </button>
            {label && <div className="hidden lg:block text-xs text-mint">
                {label}
            </div>}
        </div>
    )
})

IconButton.displayName = 'IconButton'

export default IconButton;