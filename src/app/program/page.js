'use client';

import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import HeroAnimation from '@/components/HeroAnimation';

export default function Program() {
    useScrollAnimation();
    const [activeTab, setActiveTab] = useState('campus');

    const campusContent = [
        {
            title: 'Education & Academy',
            subtitle: 'The Foundation',
            items: [
                {
                    title: 'Bootcamps',
                    description: 'A "Data Science 101" weekend for new members (Python Basics, Pandas, Git).'
                },
                {
                    title: 'Tool Workshops',
                    description: 'Specific deep dives often missed in university studies. Examples: "Advanced Tableau/PowerBI", "Cloud Basics (AWS/Azure)", "SQL Deep Dive".'
                },
                {
                    title: 'Paper Reading Groups',
                    description: 'Joint discussion of current AI research papers (for tech enthusiasts).'
                }
            ]
        },
        {
            title: 'Practice & Competition',
            subtitle: 'The Practice',
            items: [
                {
                    title: 'Internal Hackathons',
                    description: '24h coding events to solve a specific problem (great for teambuilding).'
                },
                {
                    title: 'Kaggle Nights',
                    description: 'Meeting up in the evening for pizza and working together on a public Kaggle dataset.'
                },
                {
                    title: 'Data Dives',
                    description: 'Analysis of "fun data" (e.g., Spotify data, Bundesliga statistics) to generate portfolio projects for CVs.'
                }
            ]
        },
        {
            title: 'Career & Networking',
            subtitle: 'The Career',
            items: [
                {
                    title: 'Company Visits',
                    description: 'Excursions to data teams of major companies in the Rhine-Neckar region (BASF, SAP, Startups).'
                },
                {
                    title: 'Fireside Chats',
                    description: 'Alumni or industry experts share insights from their daily work as Data Scientists.'
                },
                {
                    title: 'CV Checks',
                    description: 'Helping each other optimize CVs specifically for Data Science roles.'
                }
            ]
        }
    ];

    const consultingContent = [
        {
            title: 'Strategy & Consulting',
            subtitle: 'The Entry',
            items: [
                {
                    title: 'Data Maturity Assessment',
                    description: 'An audit to check how "data-mature" a company is and where potential lies.'
                },
                {
                    title: 'Use Case Workshops',
                    description: 'Design Thinking workshops with clients to find out: "Where can AI actually help in your department?"'
                },
                {
                    title: 'Tool Evaluation',
                    description: 'Consulting on the question: "Should we use PowerBI, Tableau, or Looker?" (Vendor Selection).'
                }
            ]
        },
        {
            title: 'BI & Analytics',
            subtitle: 'The Foundation',
            items: [
                {
                    title: 'Dashboarding',
                    description: 'Creation of interactive dashboards (PowerBI/Tableau) for Controlling, HR, or Marketing. This is the most common and easiest entry point.'
                },
                {
                    title: 'Automation',
                    description: 'Replacing manual Excel processes with Python scripts (VBA replacement).'
                },
                {
                    title: 'Process Mining',
                    description: 'Analysis of process data (logs) to find bottlenecks in workflows (highly relevant for Logistics/Supply Chain in LU).'
                }
            ]
        },
        {
            title: 'Data Science & AI Development',
            subtitle: 'The "Rocket Science"',
            items: [
                {
                    title: 'Rapid Prototyping / PoCs',
                    description: 'Development of MVPs (Minimum Viable Products). Example: An internal support chatbot based on RAG.'
                },
                {
                    title: 'Customer Analytics',
                    description: 'Customer segmentation (Clustering), Churn Prediction (who will cancel soon?), or Market Basket Analysis.'
                },
                {
                    title: 'Web Scraping & Data Collection',
                    description: 'Collecting data from the web for market analysis.'
                }
            ]
        }
    ];

    return (
        <main>
            <section className="section" style={{ paddingTop: '150px' }}>
                <div className="container">
                    <div className="section-header fade-in-up">
                        <span className="hero-subtitle">The How</span>
                        <h1>Two Tracks. One Goal.</h1>
                        <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                            Choose your path. Master the skills. Make an impact.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="fade-in-up delay-100" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
                        <button
                            onClick={() => setActiveTab('campus')}
                            className={`btn ${activeTab === 'campus' ? 'btn-glow' : 'btn-primary'}`}
                            style={{ minWidth: '200px' }}
                        >
                            LUMEN Campus
                        </button>
                        <button
                            onClick={() => setActiveTab('consulting')}
                            className={`btn ${activeTab === 'consulting' ? 'btn-glow' : 'btn-primary'}`}
                            style={{ minWidth: '200px' }}
                        >
                            LUMEN Consulting
                        </button>
                    </div>
                </div>
            </section>

            <HeroAnimation />

            <section className="section">
                <div className="container">
                    <div className="grid-3">
                        {(activeTab === 'campus' ? campusContent : consultingContent).map((category, index) => (
                            <div key={index} className={`card fade-in-up delay-${(index + 1) * 100}`}>
                                <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
                                    <span style={{ color: 'var(--color-primary)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: '600' }}>
                                        {category.subtitle}
                                    </span>
                                    <h3 className="card-title" style={{ marginTop: '0.5rem', marginBottom: 0 }}>{category.title}</h3>
                                </div>
                                <ul style={{ listStyle: 'none' }}>
                                    {category.items.map((item, i) => (
                                        <li key={i} style={{ marginBottom: '1.5rem' }}>
                                            <h4 style={{ fontSize: '1rem', color: 'var(--color-text-main)', marginBottom: '0.5rem' }}>{item.title}</h4>
                                            <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>{item.description}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
