import React from 'react';

interface SectionTitleProps {
    children: React.ReactNode;
    className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className = '' }) => {
    return (
        <h2
            className={`font-medium uppercase text-4xl lg:text-5xl ${className}`}
        >
            {children}
        </h2>
    );
};

export default SectionTitle;