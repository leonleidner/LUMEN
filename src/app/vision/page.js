'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Vision() {
    useScrollAnimation();

    return (
        <main>
            <section className="section" style={{ paddingTop: '150px' }}>
                <div className="container">
                    <div className="section-header fade-in-up">
                        <span className="hero-subtitle">The Why</span>
                        <h1>Our Vision</h1>
                        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                            The gap between academic theory and industry reality is widening. We exist to close it.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid-3">
                        <div className="card fade-in-up delay-100">
                            <h3 className="card-title">The Gap</h3>
                            <p>Universities teach concepts. Companies need skills. We provide the bridge that transforms students into professionals.</p>
                        </div>
                        <div className="card fade-in-up delay-200">
                            <h3 className="card-title">Our Philosophy</h3>
                            <p>Learning by doing. We believe that the only way to truly understand Data Science is to apply it to messy, real-world data.</p>
                        </div>
                        <div className="card fade-in-up delay-300">
                            <h3 className="card-title">Future Outlook</h3>
                            <p>We envision a future where every graduate is data-literate and ready to lead in an AI-driven world.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
