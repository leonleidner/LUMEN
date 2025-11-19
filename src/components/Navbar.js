'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

    const pathname = usePathname();

    const isActive = (path) => pathname === path;

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link href="/" className="logo">
                    LUMEN<span style={{ color: 'var(--color-primary)' }}>.</span>
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link
                            href="/"
                            className="nav-link"
                            style={{ color: isActive('/') ? 'var(--color-text-main)' : '' }}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/mission"
                            className="nav-link"
                            style={{ color: isActive('/mission') ? 'var(--color-text-main)' : '' }}
                        >
                            Mission
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/vision"
                            className="nav-link"
                            style={{ color: isActive('/vision') ? 'var(--color-text-main)' : '' }}
                        >
                            Vision
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/program"
                            className="nav-link"
                            style={{ color: isActive('/program') ? 'var(--color-text-main)' : '' }}
                        >
                            Program
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/projects"
                            className="nav-link"
                            style={{ color: isActive('/projects') ? 'var(--color-text-main)' : '' }}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about"
                            className="nav-link"
                            style={{ color: isActive('/about') ? 'var(--color-text-main)' : '' }}
                        >
                            About
                        </Link>
                    </li>
                </ul>
                <Link href="/join" className="btn btn-primary">Join Us</Link>
            </div>
        </nav>
    );
}
