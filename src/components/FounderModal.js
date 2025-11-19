'use client';

import { useEffect, useState } from 'react';

export default function FounderModal({ isOpen, onClose, founder }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        } else {
            const timer = setTimeout(() => setIsVisible(false), 300); // Wait for exit animation
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isVisible && !isOpen) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(2, 6, 23, 0.8)',
                backdropFilter: 'blur(8px)',
                opacity: isOpen ? 1 : 0,
                transition: 'opacity 0.3s ease',
                pointerEvents: isOpen ? 'auto' : 'none'
            }}
            onClick={onClose}
        >
            <div
                style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '500px', // Approx 1/3 of a typical desktop screen
                    backgroundColor: 'var(--color-bg-card)',
                    border: '1px solid rgba(45, 212, 191, 0.2)',
                    borderRadius: '16px',
                    boxShadow: '0 0 40px rgba(45, 212, 191, 0.1)',
                    overflow: 'hidden',
                    transform: isOpen ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
                    transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    maxHeight: '85vh',
                    display: 'flex',
                    flexDirection: 'column'
                }}
                onClick={e => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-text-muted)',
                        cursor: 'pointer',
                        zIndex: 10,
                        padding: '0.5rem',
                        transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={e => e.target.style.color = 'var(--color-text-main)'}
                    onMouseLeave={e => e.target.style.color = 'var(--color-text-muted)'}
                    aria-label="Close modal"
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>

                {/* Scrollable Content */}
                <div style={{ overflowY: 'auto', padding: '2rem' }}>
                    {/* Header Content */}
                    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        <div style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            margin: '0 auto 1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '2rem',
                            color: 'var(--color-primary)',
                            border: '2px solid var(--color-primary-glow)',
                            boxShadow: '0 0 20px rgba(45, 212, 191, 0.2)'
                        }}>
                            {founder.initials}
                        </div>
                        <h2 style={{
                            fontSize: '1.75rem',
                            fontWeight: 'bold',
                            color: 'var(--color-text-main)',
                            marginBottom: '0.5rem'
                        }}>{founder.name}</h2>
                        <p style={{
                            color: 'var(--color-primary)',
                            fontSize: '1.1rem',
                            fontWeight: '500',
                            marginBottom: '1.5rem'
                        }}>{founder.role}</p>
                        <p style={{
                            color: 'var(--color-text-muted)',
                            lineHeight: '1.6',
                            fontSize: '0.95rem'
                        }}>
                            {founder.bio}
                        </p>
                    </div>

                    {/* Experience Section */}
                    <div style={{
                        paddingTop: '2rem',
                        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
                    }}>
                        <h3 style={{
                            fontSize: '1.25rem',
                            fontWeight: '600',
                            color: 'var(--color-text-main)',
                            marginBottom: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                                <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Professional Experience
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {founder.experience && founder.experience.map((exp, index) => (
                                <div key={index} style={{
                                    position: 'relative',
                                    paddingLeft: '1.5rem',
                                    borderLeft: '2px solid rgba(45, 212, 191, 0.2)'
                                }}>
                                    <div style={{
                                        position: 'absolute',
                                        left: '-5px',
                                        top: '6px',
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        backgroundColor: 'var(--color-bg-dark)',
                                        border: '2px solid var(--color-primary)'
                                    }}></div>
                                    <div style={{ marginBottom: '0.25rem' }}>
                                        <span style={{
                                            fontSize: '0.85rem',
                                            fontFamily: 'monospace',
                                            color: 'var(--color-primary)',
                                            opacity: 0.8,
                                            display: 'block',
                                            marginBottom: '0.25rem'
                                        }}>{exp.period}</span>
                                        <h4 style={{
                                            fontSize: '1.1rem',
                                            fontWeight: '600',
                                            color: 'var(--color-text-main)'
                                        }}>{exp.role}</h4>
                                        <div style={{
                                            color: 'var(--color-text-muted)',
                                            fontSize: '0.9rem',
                                            fontWeight: '500',
                                            marginBottom: '0.5rem'
                                        }}>{exp.company}</div>
                                    </div>
                                    <p style={{
                                        color: 'var(--color-text-muted)',
                                        fontSize: '0.9rem',
                                        lineHeight: '1.5',
                                        opacity: 0.9
                                    }}>
                                        {exp.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
