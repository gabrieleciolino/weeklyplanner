import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "tertiary";
    size?: "small" | "base" | "large" | "full";
    disabled?: boolean;
    inverted?: boolean;
    children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
    variant = 'primary',
    size = 'base',
    disabled = false,
    inverted = false,
    className = '',
    children,
    ...props
}, ref) => {
    let variantClasses

    switch (variant) {
        case 'tertiary':
            variantClasses = 'border border-mint text-mint'
            break
        case 'secondary':
            variantClasses = !inverted ? 'bg-mint text-purple' : 'bg-purple text-mint'
            break
        case 'primary':
        default:
            variantClasses = !inverted ? 'bg-purple text-white' : 'bg-white text-purple border border-purple'
    }

    let sizeClasses

    switch (size) {
        case 'small':
            sizeClasses = "w-[100px] h-[30px]"
            break
        case 'large':
            sizeClasses = "w-[200px] h-[45px]"
            break
        case 'full':
            sizeClasses = "w-full"
            break
        case 'base':
        default:
            sizeClasses = "w-auto"

    }

    return (
        <button
            className={`h-[30px] rounded-full font-medium px-4 ${variantClasses} ${sizeClasses} ${className}`}
            disabled={disabled}
            style={{
                opacity: disabled ? 0.5 : 1
            }} ref={ref} {...props}>
            Label
        </button>
    )
})

Button.displayName = 'Button'

export default Button;