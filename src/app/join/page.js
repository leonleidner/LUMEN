'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Link from 'next/link';

export default function Join() {
    useScrollAnimation();

    return (
        <main>
            {/* Header */}
            <section className="section" style={{ paddingTop: '150px', paddingBottom: '50px' }}>
                <div className="container">
                    <div className="section-header fade-in-up">
                        <span className="hero-subtitle">Get Involved</span>
                        <h1>Join the Movement</h1>
                        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                            Whether you are a student, alumni, or professor, there is a place for you at LUMEN. Connect with us and help shape the future of Data Science.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Options */}
            <section className="section">
                <div className="container">
                    <div className="grid-2">
                        {/* Student Connection */}
                        <div className="card fade-in-up delay-100">
                            <h3 className="card-title">For Students</h3>
                            <p style={{ marginBottom: '20px' }}>
                                Interested in joining our workshops, hackathons, or becoming a team member? Join our community channels to stay updated.
                            </p>
                            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                                <a href="#" className="btn btn-primary">Join Discord</a>
                                <a href="#" className="btn btn-secondary">WhatsApp Group</a>
                            </div>
                        </div>

                        {/* General Contact */}
                        <div className="card fade-in-up delay-200">
                            <h3 className="card-title">Contact Us</h3>
                            <p style={{ marginBottom: '20px' }}>
                                Have questions or want to collaborate? Send us an email or connect with us on LinkedIn.
                            </p>
                            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                                <a href="mailto:contact@lumen-initiative.de" className="btn btn-primary">Email Us</a>
                                <a href="#" className="btn btn-secondary">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ or Additional Info could go here */}
            <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <div className="fade-in-up delay-300">
                        <h2>Ready to start?</h2>
                        <p style={{ margin: '20px 0' }}>
                            We are looking for passionate individuals to join our core team.
                        </p>
                        <Link href="/about" className="btn btn-primary">Meet the Team</Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
