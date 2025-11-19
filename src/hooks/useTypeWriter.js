'use client';

import { useState, useEffect, useRef } from 'react';

export function useTypeWriter(text, speed = 50) {
    const [displayText, setDisplayText] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        if (!elementRef.current || hasStarted) return;

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setIsTyping(true);
                setHasStarted(true);
                observer.disconnect();
            }
        });

        observer.observe(elementRef.current);

        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!isTyping) return;

        let index = 0;
        const interval = setInterval(() => {
            if (index < text.length) {
                setDisplayText((prev) => prev + text.charAt(index));
                index++;
            } else {
                setIsTyping(false);
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [isTyping, text, speed]);

    return { displayText, elementRef };
}
