import React from 'react';

interface ResponsiveDivProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

const FlexiWrapper: React.FC<ResponsiveDivProps> = ({
    children,
    className = '',
    id,
    ...props
}) => {
    return (
        <div
            id={id}
            className={`
        w-full
        max-w-full
        p-4 sm:p-6 md:p-8 lg:p-10
        mx-auto
        shadow-sm
        bg-white dark:bg-gray-800
        overflow-hidden
        transition-all duration-300
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    );
};

export default FlexiWrapper;
