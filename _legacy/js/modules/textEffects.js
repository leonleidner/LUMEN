/**
 * LUMEN - Text Effects Module
 * Handles typing animations and text reveals
 */

export class TypeWriter {
    constructor(element, text, speed = 50) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.index = 0;
        this.isTyping = false;
    }

    start() {
        if (this.isTyping) return;
        this.isTyping = true;
        this.element.textContent = '';
        this.type();
    }

    type() {
        if (this.index < this.text.length) {
            this.element.textContent += this.text.charAt(this.index);
            this.index++;
            setTimeout(() => this.type(), this.speed);
        } else {
            this.isTyping = false;
        }
    }
}

export function initTextEffects() {
    const typeElements = document.querySelectorAll('[data-type-text]');

    typeElements.forEach(el => {
        const text = el.getAttribute('data-type-text');
        const writer = new TypeWriter(el, text);

        // Optional: Trigger on view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    writer.start();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(el);
    });
}
