'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Program() {
    useScrollAnimation();

    return (
        <main>
            <section className="section" style={{ paddingTop: '150px' }}>
                <div className="container">
                    <div className="section-header fade-in-up">
                        <span className="hero-subtitle">The How</span>
                        <h1>Our Program</h1>
                        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                            A rigorous curriculum of workshops, guest lectures, and hands-on challenges designed to accelerate your growth.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid-3">
                        <div className="card fade-in-up delay-100">
                            <h3 className="card-title">Workshops</h3>
                            <p>Deep dives into Python, PyTorch, Scikit-Learn, and modern MLOps stacks. From "Hello World" to "Deploy Model".</p>
                        </div>
                        <div className="card fade-in-up delay-200">
                            <h3 className="card-title">Guest Talks</h3>
                            <p>Fireside chats with Data Scientists from companies like Google, SAP, and BASF. Learn from the best.</p>
                        </div>
                        <div className="card fade-in-up delay-300">
                            <h3 className="card-title">Hackathons</h3>
                            <p>48-hour intense coding marathons. Build a prototype, pitch it to judges, and win prizes.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
