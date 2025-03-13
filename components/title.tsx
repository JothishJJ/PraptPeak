import React from 'react';

interface ResponsiveHeadingProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

const ResponsiveHeading: React.FC<ResponsiveHeadingProps> = ({
    children,
    className = '',
    id,
    ...props
}) => {
    return (
        <h1
            id={id}
            className={`
        text-3xl md:text-4xl lg:text-5xl xl:text-6xl
        font-bold
        leading-tight
        tracking-tighter
        break-words
        ${className}
      `}
            {...props}
        >
            {children}
        </h1>
    );
};

export default ResponsiveHeading;
