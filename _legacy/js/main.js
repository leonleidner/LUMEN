/**
 * LUMEN - Main Entry Point
 */

import { initScrollObserver } from './modules/scrollObserver.js';
import { initTextEffects } from './modules/textEffects.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('LUMEN: Initializing...');

    // Initialize Modules
    initScrollObserver();
    initTextEffects();

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
