'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link href="/" className="logo">
                    LUMEN<span style={{ color: 'var(--color-primary)' }}>.</span>
                </Link>
                <ul className="nav-links">
                    <li><Link href="/" className="nav-link" style={{ color: 'var(--color-text-main)' }}>Home</Link></li>
                    <li><Link href="/mission" className="nav-link">Mission</Link></li>
                    <li><Link href="/vision" className="nav-link">Vision</Link></li>
                    <li><Link href="/program" className="nav-link">Program</Link></li>
                    <li><Link href="/about" className="nav-link">About</Link></li>
                </ul>
                <Link href="/#join" className="btn btn-primary">Join Us</Link>
            </div>
        </nav>
    );
}
