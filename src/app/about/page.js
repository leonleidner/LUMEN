'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import HeroAnimation from '@/components/HeroAnimation';
import FounderModal from '@/components/FounderModal';
import { useState } from 'react';

export default function About() {
    useScrollAnimation();
    const [selectedFounder, setSelectedFounder] = useState(null);

    const founders = [
        {
            id: 1,
            initials: 'LL',
            name: 'Leon Leidner',
            role: 'Lead AI Engineer',
            image: 'src/public/images/leon.png',
            bio: 'Short bio describing their background, expertise, and vision for the initiative.',
            experience: [
                {
                    period: '09/2025 - Present',
                    role: 'Intern AI Engineer',
                    company: 'Siemens AG',
                    description: 'Internship at Siemens AG as an AI Engineer.'
                },
                {
                    period: '03/2025 - 09/2025',
                    role: 'Intern IT Management Consultant',
                    company: 'PwC',
                    description: 'Internship at PwC as an IT Management Consultant.'
                },
                {
                    period: '03/2023 - 03/2025',
                    role: 'Intern Data Science',
                    company: 'Deutsches Forschungszentrum für Künstliche Intelligenz',
                    description: 'Conducted statistical analysis and built dashboards to drive business decisions.'
                }
            ]
        },
        {
            id: 2,
            initials: 'F2',
            name: 'Founder Name',
            role: 'Role / Position',
            bio: 'Short bio describing their background, expertise, and vision for the initiative.',
            experience: [
                {
                    period: '2022 - Present',
                    role: 'AI Research Scientist',
                    company: 'Research Institute',
                    description: 'Conducting cutting-edge research in computer vision and publishing papers in top conferences.'
                },
                {
                    period: '2020 - 2022',
                    role: 'Data Engineer',
                    company: 'Big Data Solutions',
                    description: 'Built scalable data pipelines and infrastructure to handle petabytes of data.'
                }
            ]
        },
        {
            id: 3,
            initials: 'F3',
            name: 'Founder Name',
            role: 'Role / Position',
            bio: 'Short bio describing their background, expertise, and vision for the initiative.',
            experience: [
                {
                    period: '2023 - Present',
                    role: 'Product Manager (Data)',
                    company: 'SaaS Unicorn',
                    description: 'Defining the product roadmap for data-driven features and collaborating with engineering teams.'
                },
                {
                    period: '2021 - 2023',
                    role: 'Business Intelligence Lead',
                    company: 'E-commerce Giant',
                    description: 'Led the BI team to provide actionable insights and optimize marketing spend.'
                }
            ]
        }
    ];

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

            <HeroAnimation />

            {/* Team Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header fade-in-up delay-100">
                        <h2>Meet the Founders</h2>
                        <p>The minds behind LUMEN.</p>
                    </div>
                    <div className="grid-3">
                        {founders.map((founder, index) => (
                            <div
                                key={founder.id}
                                className={`card fade-in-up delay-${(index + 2) * 100} cursor-pointer hover:border-teal-500/30 transition-all duration-300 group`}
                                style={{ textAlign: 'center' }}
                                onClick={() => setSelectedFounder(founder)}
                            >
                                <div style={{
                                    width: '120px',
                                    height: '120px',
                                    borderRadius: '50%',
                                    backgroundColor: 'transparent', // Changed from var(--color-surface-light) to transparent
                                    margin: '0 auto 20px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2rem',
                                    color: 'var(--color-primary)',
                                    transition: 'transform 0.3s ease',
                                    overflow: 'hidden',
                                    position: 'relative'
                                }} className="group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(45,212,191,0.3)]">
                                    {founder.image ? (
                                        <img
                                            src={founder.image}
                                            alt={founder.name}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                    ) : (
                                        founder.initials
                                    )}
                                </div>
                                <h3 className="card-title group-hover:text-teal-400 transition-colors">{founder.name}</h3>
                                <p style={{ color: 'var(--color-primary)', marginBottom: '10px' }}>{founder.role}</p>
                                <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                                    {founder.bio}
                                </p>
                                <div className="mt-4 text-sm text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                                    View Experience →
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FounderModal
                isOpen={!!selectedFounder}
                onClose={() => setSelectedFounder(null)}
                founder={selectedFounder || {}}
            />
        </main>
    );
}
