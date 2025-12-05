/**
 * Sessions Cannabis - Animated Background Paths
 * Vanilla JavaScript implementation of React BackgroundPaths component
 * 36 animated SVG bezier curves with GSAP
 */

class AnimatedPaths {
    constructor() {
        this.svg = document.querySelector('.paths-background');
        this.pathCount = 18; // Reduced from 36 to 18 for performance
        this.paths = [];
        this.animations = [];

        if (!this.svg) {
            console.error('AnimatedPaths: SVG container not found');
            return;
        }

        this.init();
    }

    /**
     * Seeded random number generator for consistent path generation
     */
    seededRandom(seed) {
        const x = Math.sin(seed++) * 10000;
        return x - Math.floor(x);
    }

    /**
     * Generate flowing curved path using mathematical formula
     * Based on React BackgroundPaths component pattern
     * Coordinates translated to positive space to fix flickering
     */
    generateMathematicalPath(i, position, width, height) {
        // Offsets to translate negative coordinates into positive space
        const offsetX = 400;
        const offsetY = 200;

        // Scale factors to adapt to current dimensions
        const scaleX = width / 1500; // Adjusted for wider coordinate space
        const scaleY = height / 1200; // Adjusted for taller coordinate space

        // Original formula with positive offset
        // position alternates: 1 for forward flow, -1 for reverse flow
        const startX = ((-380 + i * 5 * position) + offsetX) * scaleX;
        const startY = ((-189 + i * 6) + offsetY) * scaleY;

        const cp1X = ((-380 + i * 5 * position) + offsetX) * scaleX;
        const cp1Y = ((-189 + i * 6) + offsetY) * scaleY;

        const cp2X = ((-312 + i * 5 * position) + offsetX) * scaleX;
        const cp2Y = ((216 - i * 6) + offsetY) * scaleY;

        const cp3X = ((152 + i * 5 * position) + offsetX) * scaleX;
        const cp3Y = ((343 - i * 6) + offsetY) * scaleY;

        const cp4X = ((616 + i * 5 * position) + offsetX) * scaleX;
        const cp4Y = ((470 - i * 6) + offsetY) * scaleY;

        const endX = ((684 + i * 5 * position) + offsetX) * scaleX;
        const endY = ((875 - i * 6) + offsetY) * scaleY;

        // Simplified to single bezier curve for better performance
        return `M ${startX} ${startY} C ${cp2X} ${cp2Y} ${cp4X} ${cp4Y} ${endX} ${endY}`;
    }

    /**
     * Generate a path for given index
     */
    generateRandomPath(index, width, height) {
        // Alternate between forward and reverse flow
        const position = index % 2 === 0 ? 1 : -1;
        const i = index % 9; // Use modulo to create 9 unique patterns repeated

        return this.generateMathematicalPath(i, position, width, height);
    }

    /**
     * Create all path elements
     */
    createPaths() {
        // Use FIXED viewBox for stability and performance
        // This prevents resize recalculation and flickering
        const fixedWidth = 1500;
        const fixedHeight = 1200;

        // Set FIXED SVG viewBox
        this.svg.setAttribute('viewBox', `0 0 ${fixedWidth} ${fixedHeight}`);

        // Clear existing paths
        this.svg.innerHTML = '';
        this.paths = [];

        // Generate 18 paths with fixed dimensions
        for (let i = 0; i < this.pathCount; i++) {
            const pathData = this.generateRandomPath(i, fixedWidth, fixedHeight);

            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', pathData);

            // Varying opacity and stroke width based on index
            // Increased multipliers for 18 paths to match visual density of 36
            const strokeOpacity = 0.15 + i * 0.04;
            const strokeWidth = 1.0 + i * 0.15;

            path.style.opacity = strokeOpacity;
            path.style.strokeWidth = strokeWidth;

            this.svg.appendChild(path);
            this.paths.push(path);
        }
    }

    /**
     * Animate a single path with MERGED drawing and opacity in ONE timeline
     * Reduces animation load from 36 timelines to 18
     */
    animatePath(pathElement, index) {
        // Get path length for stroke animation
        const pathLength = pathElement.getTotalLength();

        // Set up stroke dash for drawing animation
        pathElement.style.strokeDasharray = pathLength;
        pathElement.style.strokeDashoffset = pathLength;

        // Random duration and delay for variety
        const duration = 20 + (this.seededRandom(index * 456.789) * 10);
        const delay = this.seededRandom(index * 321.654) * 3;

        // Get base opacity for this path
        const baseOpacity = 0.15 + index * 0.04;
        const minOpacity = baseOpacity * 0.6;
        const maxOpacity = baseOpacity * 1.5;

        // SINGLE merged timeline with both drawing and opacity
        const timeline = gsap.timeline({ repeat: -1, delay: delay });

        timeline
            // Phase 1: Draw in while fading up
            .to(pathElement, {
                strokeDashoffset: 0,
                opacity: maxOpacity,
                duration: duration * 0.4,
                ease: 'none',
            })
            // Phase 2: Fade down slightly
            .to(pathElement, {
                opacity: minOpacity,
                duration: duration * 0.3,
                ease: 'sine.inOut',
            })
            // Phase 3: Fade back up
            .to(pathElement, {
                opacity: maxOpacity,
                duration: duration * 0.3,
                ease: 'sine.inOut',
            });

        this.animations.push(timeline); // Only ONE timeline per path
    }

    /**
     * Animate all paths
     */
    animateAllPaths() {
        // Kill existing animations
        this.killAnimations();

        // Animate each path
        this.paths.forEach((path, index) => {
            this.animatePath(path, index);
        });
    }

    /**
     * Animate section when scrolled into view
     */
    animateOnScroll() {
        // Only animate if ScrollTrigger is available
        if (typeof ScrollTrigger === 'undefined') return;

        // Simple fade-in for the section
        gsap.fromTo('#explore-selection',
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '#explore-selection',
                    start: 'top 80%',
                    once: true,
                }
            }
        );
    }

    /**
     * Kill all animations
     */
    killAnimations() {
        this.animations.forEach(animation => {
            if (animation) animation.kill();
        });
        this.animations = [];

        // Kill all tweens on paths
        this.paths.forEach(path => {
            gsap.killTweensOf(path);
        });
    }

    /**
     * Handle window resize
     * Fixed viewBox means NO regeneration needed - CSS handles scaling
     */
    handleResize() {
        // Do nothing - paths scale naturally with fixed viewBox
        // This eliminates resize thrashing and flickering
    }

    /**
     * Initialize
     */
    init() {
        // Check if GSAP is loaded
        if (typeof gsap === 'undefined') {
            console.error('GSAP library not loaded');
            return;
        }

        // Create paths
        this.createPaths();

        // Animate paths
        this.animateAllPaths();

        // Animate section on scroll
        this.animateOnScroll();

        // Handle resize
        window.addEventListener('resize', () => this.handleResize());

        // Performance: Pause animations when section not in view
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.resumeAnimations();
                    } else {
                        this.pauseAnimations();
                    }
                });
            }, { threshold: 0.1 });

            const section = document.querySelector('#explore-selection');
            if (section) {
                observer.observe(section);
            }
        }
    }

    /**
     * Pause all animations
     */
    pauseAnimations() {
        this.animations.forEach(animation => {
            if (animation) animation.pause();
        });
    }

    /**
     * Resume all animations
     */
    resumeAnimations() {
        this.animations.forEach(animation => {
            if (animation) animation.resume();
        });
    }

    /**
     * Destroy instance
     */
    destroy() {
        this.killAnimations();
        window.removeEventListener('resize', () => this.handleResize());
    }
}

/**
 * Initialize animated paths on page load
 */
function initAnimatedPaths() {
    // Wait for GSAP and DOM
    if (typeof gsap === 'undefined') {
        console.error('GSAP library not loaded');
        return;
    }

    // Check if ScrollTrigger is available (optional but recommended)
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    // Initialize animated paths
    const animatedPaths = new AnimatedPaths();

    // Store instance for potential cleanup
    window.sessionsAnimatedPaths = animatedPaths;
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Small delay to ensure GSAP is loaded
    setTimeout(initAnimatedPaths, 100);
});

// Cleanup on page unload
window.addEventListener('beforeunload', function() {
    if (window.sessionsAnimatedPaths) {
        window.sessionsAnimatedPaths.destroy();
    }
});
