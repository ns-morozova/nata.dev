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
                className={`${baseStyles} bg-gradient-to-r from-cyan-700 to-cyan-400 py-2 px-6 ${className}`}
            >
                {label}
            </button>
        ),
        outline: (
            <button
                className={`${baseStyles} bg-gradient-to-r from-cyan-700 to-cyan-400 p-px ${className}`}
            >
                <div className="bg-black rounded-full font-semibold uppercase text-xs px-4 py-2 hover:bg-gradient-to-r hover:from-cyan-700 hover:to-cyan-400 transition duration-300">
                    {label}
                </div>
            </button>
        ),
    };

    return buttonStyles[type] || <span className="text-red-500">Unknown button type: {type}</span>;
};

export default Button;