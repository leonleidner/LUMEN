'use client';

import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTypeWriter } from '@/hooks/useTypeWriter';
import HeroAnimation from '@/components/HeroAnimation';

export default function Home() {
    useScrollAnimation();
    const { displayText, elementRef } = useTypeWriter(' Data Reality');

    return (
        <main>
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <span className="hero-subtitle fade-in-up delay-100">Student Initiative</span>
                    <h1 className="fade-in-up delay-200">
                        Bridging Theory and <br />
                        <span
                            ref={elementRef}
                            className="text-gradient-animated"
                        >
                            {displayText}
                            <span className="cursor">|</span>
                        </span>
                    </h1>
                    <p className="fade-in-up delay-300" style={{ fontSize: '1.25rem', marginTop: '1.5rem', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
                        We are the catalyst for the next generation of data leaders. Connecting students with industry pioneers through workshops, hackathons, and networking.
                    </p>
                    <div className="hero-buttons fade-in-up delay-400">
                        <Link href="/#join" className="btn btn-glow">Become a Member</Link>
                        <Link href="/about" className="btn btn-primary">Learn More</Link>
                    </div>
                </div>
            </section>

            <HeroAnimation />

            {/* Features Section */}
            <section className="section" id="features">
                <div className="container">
                    <div className="section-header fade-in-up">
                        <h2>Empowering Future Innovators</h2>
                        <p>We provide the platform, tools, and network you need to excel in the world of Data Science and AI.</p>
                    </div>

                    <div className="grid-3">
                        {/* Card 1 */}
                        <div className="card fade-in-up delay-100">
                            <div className="card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20M12 12l4.24-4.24M12 12l-4.24 4.24" /></svg>
                            </div>
                            <h3 className="card-title">Workshops & Training</h3>
                            <p>Hands-on sessions on Python, R, Machine Learning, and Deep Learning led by experts.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="card fade-in-up delay-200">
                            <div className="card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                            </div>
                            <h3 className="card-title">Industry Networking</h3>
                            <p>Exclusive access to events with partners from top tech companies and research institutes.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="card fade-in-up delay-300">
                            <div className="card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                            </div>
                            <h3 className="card-title">Hackathons</h3>
                            <p>Solve real-world data challenges, compete for prizes, and showcase your skills.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
