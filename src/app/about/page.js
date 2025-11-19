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

            {/* Team Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header fade-in-up delay-100">
                        <h2>Meet the Founders</h2>
                        <p>The minds behind LUMEN.</p>
                    </div>
                    <div className="grid-3">
                        {/* Founder 1 */}
                        <div className="card fade-in-up delay-200" style={{ textAlign: 'center' }}>
                            <div style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--color-surface-light)',
                                margin: '0 auto 20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem',
                                color: 'var(--color-primary)'
                            }}>
                                F1
                            </div>
                            <h3 className="card-title">Founder Name</h3>
                            <p style={{ color: 'var(--color-primary)', marginBottom: '10px' }}>Role / Position</p>
                            <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                                Short bio describing their background, expertise, and vision for the initiative.
                            </p>
                        </div>

                        {/* Founder 2 */}
                        <div className="card fade-in-up delay-300" style={{ textAlign: 'center' }}>
                            <div style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--color-surface-light)',
                                margin: '0 auto 20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem',
                                color: 'var(--color-primary)'
                            }}>
                                F2
                            </div>
                            <h3 className="card-title">Founder Name</h3>
                            <p style={{ color: 'var(--color-primary)', marginBottom: '10px' }}>Role / Position</p>
                            <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                                Short bio describing their background, expertise, and vision for the initiative.
                            </p>
                        </div>

                        {/* Founder 3 */}
                        <div className="card fade-in-up delay-400" style={{ textAlign: 'center' }}>
                            <div style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                backgroundColor: 'var(--color-surface-light)',
                                margin: '0 auto 20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '2rem',
                                color: 'var(--color-primary)'
                            }}>
                                F3
                            </div>
                            <h3 className="card-title">Founder Name</h3>
                            <p style={{ color: 'var(--color-primary)', marginBottom: '10px' }}>Role / Position</p>
                            <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                                Short bio describing their background, expertise, and vision for the initiative.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
