import React from 'react';

interface ButtonProps {
    type: 'primary' | 'outline';
    label: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ type, label, className = '' }) => {
    const baseStyles =
        'font-medium rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-0';

    const buttonStyles = {
        primary: (
            <button
                className={`${baseStyles} bg-gradient-to-r from-pink-900 to-pink-500/80 py-2 px-6 hover:from-pink-900/80 hover:to-pink-600/80 ${className}`}
            >
                {label}
            </button>
        ),
        outline: (
            <button
                className={`${baseStyles} bg-gradient-to-r from-[#684b2d] to-[#c8ae7b] p-px ${className}`}
            >
                <div className="bg-black rounded-full font-semibold uppercase text-xs px-4 py-2 hover:bg-gradient-to-r hover:from-[#684b2d] hover:to-[#c8ae7b] transition duration-300">
                    {label}
                </div>
            </button>
        ),
    };

    return buttonStyles[type] || <span className="text-red-500">Unknown button type: {type}</span>;
};

export default Button;