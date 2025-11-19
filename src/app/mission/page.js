'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Mission() {
    useScrollAnimation();

    return (
        <main>
            <section className="section" style={{ paddingTop: '150px' }}>
                <div className="container">
                    <div className="section-header fade-in-up">
                        <span className="hero-subtitle">The What</span>
                        <h1>Our Mission</h1>
                        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                            LUMEN is not just a student club. We are a pre-professional accelerator for data scientists.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid-3">
                        <div className="card fade-in-up delay-100">
                            <h3 className="card-title">Core Pillars</h3>
                            <p>We focus on three key areas: Technical Mastery, Industry Connection, and Collaborative Innovation.</p>
                        </div>
                        <div className="card fade-in-up delay-200">
                            <h3 className="card-title">Who We Are</h3>
                            <p>A collective of ambitious students from diverse backgrounds—Business, IT, and Social Sciences—united by data.</p>
                        </div>
                        <div className="card fade-in-up delay-300">
                            <h3 className="card-title">What We Do</h3>
                            <p>We build real products, solve real problems, and publish real research. No toy projects allowed.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
