'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function About() {
    useScrollAnimation();

    return (
        <main>
            {/* Header */}
            <section className="section" style={{ paddingTop: '150px', paddingBottom: '50px' }}>
                <div className="container">
                    <div className="section-header fade-in-up">
                        <span className="hero-subtitle">Our Mission</span>
                        <h1>Democratizing Data Science</h1>
                        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                            We believe that data literacy is the literacy of the 21st century. LUMEN exists to bridge the gap between academic theory and the fast-paced reality of the tech industry.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section">
                <div className="container">
                    <div className="grid-3">
                        <div className="card fade-in-up delay-100">
                            <h3 className="card-title">Excellence</h3>
                            <p>We strive for the highest quality in our workshops, events, and projects. We don't just learn; we master.</p>
                        </div>
                        <div className="card fade-in-up delay-200">
                            <h3 className="card-title">Community</h3>
                            <p>We are a diverse group of students, alumni, and professors united by a passion for data.</p>
                        </div>
                        <div className="card fade-in-up delay-300">
                            <h3 className="card-title">Innovation</h3>
                            <p>We push boundaries and explore the cutting edge of AI and Machine Learning technologies.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
