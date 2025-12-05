/**
 * Sessions Cannabis - Text Rotation Component
 * Vanilla JavaScript implementation of Framer Motion text rotation
 * Character-by-character stagger animation with spring physics
 */

class TextRotate {
    constructor(config) {
        this.container = document.querySelector(config.selector);
        this.words = config.words || [];
        this.rotationInterval = config.rotationInterval || 2000;
        this.staggerDuration = config.staggerDuration || 0.025;
        this.staggerFrom = config.staggerFrom || 'last';

        // Animation config (matches Framer Motion spring)
        this.transition = {
            duration: 0.6,
            ease: 'power2.out', // Approximates spring(damping: 30, stiffness: 400)
        };

        this.currentIndex = 0;
        this.isAnimating = false;

        this.init();
    }

    init() {
        if (!this.container || this.words.length === 0) {
            console.error('TextRotate: Invalid configuration');
            return;
        }

        // Show first word
        this.showWord(this.words[0], true);

        // Start rotation
        this.startRotation();
    }

    /**
     * Split text into individual character spans
     */
    splitTextIntoChars(text) {
        return text.split('').map(char => {
            // Preserve spaces
            if (char === ' ') {
                return '<span class="char" style="display: inline-block; width: 0.3em;">&nbsp;</span>';
            }
            return `<span class="char" style="display: inline-block;">${char}</span>`;
        }).join('');
    }

    /**
     * Animate word in (entrance animation)
     */
    animateIn(chars, isFirst = false) {
        // Stagger from last to first
        const orderedChars = this.staggerFrom === 'last' ? [...chars].reverse() : chars;

        gsap.fromTo(orderedChars,
            {
                y: '100%',
                opacity: 0,
            },
            {
                y: '0%',
                opacity: 1,
                duration: this.transition.duration,
                ease: this.transition.ease,
                stagger: {
                    each: this.staggerDuration,
                    from: this.staggerFrom === 'last' ? 'end' : 'start',
                },
                delay: isFirst ? 0.3 : 0, // Slight delay on page load
                onComplete: () => {
                    this.isAnimating = false;
                }
            }
        );
    }

    /**
     * Animate word out (exit animation)
     */
    animateOut(chars, onComplete) {
        const orderedChars = this.staggerFrom === 'last' ? [...chars].reverse() : chars;

        gsap.to(orderedChars, {
            y: '-120%',
            opacity: 0,
            duration: this.transition.duration,
            ease: this.transition.ease,
            stagger: {
                each: this.staggerDuration,
                from: this.staggerFrom === 'last' ? 'end' : 'start',
            },
            onComplete: () => {
                if (onComplete) onComplete();
            }
        });
    }

    /**
     * Show a specific word
     */
    showWord(word, isFirst = false) {
        // Set word content with character spans
        this.container.innerHTML = this.splitTextIntoChars(word);

        // Get all character elements
        const chars = this.container.querySelectorAll('.char');

        // Animate in
        this.animateIn(chars, isFirst);
    }

    /**
     * Transition to next word
     */
    transitionToNextWord() {
        if (this.isAnimating) return;

        this.isAnimating = true;

        // Get current characters
        const currentChars = this.container.querySelectorAll('.char');

        // Animate out current word
        this.animateOut(currentChars, () => {
            // Move to next word
            this.currentIndex = (this.currentIndex + 1) % this.words.length;

            // Show next word
            this.showWord(this.words[this.currentIndex]);
        });
    }

    /**
     * Start automatic rotation
     */
    startRotation() {
        this.rotationTimer = setInterval(() => {
            this.transitionToNextWord();
        }, this.rotationInterval);
    }

    /**
     * Stop rotation (cleanup)
     */
    stopRotation() {
        if (this.rotationTimer) {
            clearInterval(this.rotationTimer);
            this.rotationTimer = null;
        }
    }

    /**
     * Destroy instance
     */
    destroy() {
        this.stopRotation();
        if (this.container) {
            gsap.killTweensOf(this.container.querySelectorAll('.char'));
        }
    }
}

/**
 * Initialize text rotation on page load
 */
function initTextRotation() {
    // Wait for GSAP to load
    if (typeof gsap === 'undefined') {
        console.error('GSAP library not loaded');
        return;
    }

    // Initialize rotation
    const textRotate = new TextRotate({
        selector: '.text-rotate-word',
        words: ['Premium', 'Elevated', 'Trusted', 'Local', 'Expert'],
        staggerFrom: 'last',
        staggerDuration: 0.025,
        rotationInterval: 2000,
    });

    // Store instance for potential cleanup
    window.sessionsTextRotate = textRotate;
}

// Initialize when DOM is ready and GSAP is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure GSAP is loaded
    setTimeout(initTextRotation, 100);
});

// Cleanup on page unload
window.addEventListener('beforeunload', function() {
    if (window.sessionsTextRotate) {
        window.sessionsTextRotate.destroy();
    }
});
