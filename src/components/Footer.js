import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link href="/" className="logo">
                            LUMEN<span style={{ color: 'var(--color-primary)' }}>.</span>
                        </Link>
                        <p>Hochschule für Wirtschaft und Gesellschaft Ludwigshafen</p>
                    </div>
                    <div className="footer-col">
                        <h4>Initiative</h4>
                        <ul className="footer-links">
                            <li><Link href="/mission">Mission</Link></li>
                            <li><Link href="/vision">Vision</Link></li>
                            <li><Link href="/program">Program</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Resources</h4>
                        <ul className="footer-links">
                            <li><Link href="#">Blog</Link></li>
                            <li><Link href="#">Events</Link></li>
                            <li><Link href="#">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Legal</h4>
                        <ul className="footer-links">
                            <li><Link href="#">Imprint</Link></li>
                            <li><Link href="#">Privacy</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
