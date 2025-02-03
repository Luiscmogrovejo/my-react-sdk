import React from 'react';
import './Button.css'; // Import the CSS styles
import { ButtonProps, ButtonSize, ButtonVariant } from '../types';

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'medium',
    isLoading = false,
    icon,
    className,
    ...props
}) => {
    const baseClass = 'btn';

    const variantClasses: { [key in ButtonVariant]: string } = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        danger: 'btn-danger',
        warning: 'btn-warning',
        success: 'btn-success',
        info: 'btn-info',
    };

    const sizeClasses: { [key in ButtonSize]: string } = {
        small: 'btn-sm',
        medium: 'btn-md',
        large: 'btn-lg',
    };

    const computedClassName = `${baseClass} ${variantClasses[variant]} ${sizeClasses[size]} ${className || ''}`.trim();

    return (
        <button
            className={computedClassName}
            {...props}
            disabled={props.disabled || isLoading}
        >
            {isLoading ? (
                <span className="spinner" aria-label="loading">
                    Loading... 
                </span>
            ) : (
                <>
                    {icon && <span className="btn-icon">{icon}</span>}
                    {children}
                </>
            )}
        </button>
    );
};
