import { useState, forwardRef } from 'react';
import './image.scss';
const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(setFallback);
    };

    return (
        <img
            className={`wrapper-img ${className}`}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
