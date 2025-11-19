'use client';

import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import HeroAnimation from '@/components/HeroAnimation';

export default function Projects() {
    useScrollAnimation();

    const projects = [
        {
            id: 1,
            title: 'LUMEN Website',
            description: 'The official website for the LUMEN Data Science Initiative, built with Next.js and modern CSS.',
            tags: ['Next.js', 'React', 'CSS'],
            githubLink: 'https://github.com/leonleidner/LUMEN',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                </svg>
            )
        },
        {
            id: 2,
            title: 'DataViz Dashboard',
            description: 'Interactive dashboard for visualizing complex datasets using D3.js and React.',
            tags: ['D3.js', 'Data Visualization', 'Analytics'],
            githubLink: '#',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
            )
        },
        {
            id: 3,
            title: 'NLP Sentiment Analyzer',
            description: 'A machine learning model to analyze sentiment in social media posts using Python and Transformers.',
            tags: ['Python', 'NLP', 'Machine Learning'],
            githubLink: '#',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            )
        },
        {
            id: 4,
            title: 'Predictive Maintenance',
            description: 'IoT solution for predicting equipment failures before they happen using sensor data.',
            tags: ['IoT', 'Predictive Analytics', 'Python'],
            githubLink: '#',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
                </svg>
            )
        },
        {
            id: 5,
            title: 'Computer Vision API',
            description: 'REST API for object detection and image classification powered by TensorFlow.',
            tags: ['TensorFlow', 'API', 'Computer Vision'],
            githubLink: '#',
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                    <circle cx="12" cy="13" r="4"></circle>
                </svg>
            )
        }
    ];

    return (
        <main>
            {/* Header */}
            <section className="section" style={{ paddingTop: '150px', paddingBottom: '50px' }}>
                <div className="container">
                    <div className="section-header fade-in-up">
                        <span className="hero-subtitle">The Work</span>
                        <h1>Projects</h1>
                        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                            Explore the open-source projects and initiatives driven by the LUMEN community.
                        </p>
                    </div>
                </div>
            </section>

            <HeroAnimation />

            {/* Projects Grid */}
            <section className="section">
                <div className="container">
                    <div className="grid-3">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                className={`card fade-in-up delay-${(index + 1) * 100} group hover:border-teal-500/30`}
                                style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                            >
                                <div style={{
                                    marginBottom: '1.5rem',
                                    color: 'var(--color-primary)',
                                    padding: '1rem',
                                    background: 'rgba(45, 212, 191, 0.1)',
                                    borderRadius: '12px',
                                    width: 'fit-content',
                                    transition: 'all 0.3s ease'
                                }} className="group-hover:bg-teal-500/20 group-hover:scale-110 group-hover:rotate-3">
                                    {project.icon}
                                </div>

                                <h3 className="card-title group-hover:text-teal-400 transition-colors">{project.title}</h3>
                                <p style={{ flexGrow: 1, marginBottom: '1.5rem' }}>{project.description}</p>

                                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                                    {project.tags.map(tag => (
                                        <span key={tag} style={{
                                            fontSize: '0.75rem',
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: '999px',
                                            background: 'rgba(255, 255, 255, 0.05)',
                                            color: 'var(--color-text-muted)',
                                            border: '1px solid rgba(255, 255, 255, 0.1)'
                                        }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary"
                                    style={{ width: '100%', marginTop: 'auto' }}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 11.61 6.44 11.86a3.37 3.37 0 0 0-.94 2.61V22"></path>
                                    </svg>
                                    View on GitHub
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
