/**
 * Sessions Cannabis - Animated Background Paths
 * Vanilla JavaScript implementation of React BackgroundPaths component
 * 36 animated SVG bezier curves with GSAP
 */

class AnimatedPaths {
    constructor() {
        this.svg = document.querySelector('.paths-background');
        this.pathCount = 2; // Just 2 paths - one for each side of heart
        this.paths = [];
        this.animations = [];

        console.log('AnimatedPaths: Constructor called, SVG found:', !!this.svg);

        if (!this.svg) {
            console.error('AnimatedPaths: SVG container (.paths-background) not found in DOM');
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
     * Generate HEART-SHAPED path - 2 lines that bend to form a heart
     * Path 0: LEFT side - curves LEFT and DOWN
     * Path 1: RIGHT side - curves RIGHT and DOWN
     * More pronounced heart bend for dramatic effect
     */
    generateMathematicalPath(index, position, width, height) {
        const scaleX = width / 1500;
        const scaleY = height / 1200;

        const cardCenterX = 750; // Center X
        const cardCenterY = 600; // Center Y

        if (index === 0) {
            // LEFT SIDE OF HEART - Single path with dramatic curve
            // Starts at top center, curves LEFT to form left lobe, ends at bottom center

            // Start: TOP center (heart dip)
            const x1 = cardCenterX - 80;
            const y1 = 150;

            // Control point 1: Curve outward from center to form the dip
            const cp1x = 350;
            const cp1y = 100;

            // Control point 2: Peak of left lobe (wide curve)
            const cp2x = 150;
            const cp2y = 300;

            // Control point 3: Continue down the left side
            const cp3x = 80;
            const cp3y = 650;

            // Control point 4: Curve inward toward bottom point
            const cp4x = 250;
            const cp4y = 950;

            // Control point 5: Final approach to bottom center
            const cp5x = 500;
            const cp5y = 1080;

            // End: BOTTOM center point
            const x2 = cardCenterX;
            const y2 = 1100;

            return `M ${x1 * scaleX} ${y1 * scaleY} C ${cp1x * scaleX} ${cp1y * scaleY}, ${cp2x * scaleX} ${cp2y * scaleY}, ${cp3x * scaleX} ${cp3y * scaleY} S ${cp4x * scaleX} ${cp4y * scaleY}, ${cp5x * scaleX} ${cp5y * scaleY} S ${x2 * scaleX} ${y2 * scaleY}, ${x2 * scaleX} ${y2 * scaleY}`;

        } else {
            // RIGHT SIDE OF HEART - Single path with dramatic curve
            // Starts at top center, curves RIGHT to form right lobe, ends at bottom center

            // Start: TOP center (heart dip)
            const x1 = cardCenterX + 80;
            const y1 = 150;

            // Control point 1: Curve outward from center to form the dip
            const cp1x = 1150;
            const cp1y = 100;

            // Control point 2: Peak of right lobe (wide curve)
            const cp2x = 1350;
            const cp2y = 300;

            // Control point 3: Continue down the right side
            const cp3x = 1420;
            const cp3y = 650;

            // Control point 4: Curve inward toward bottom point
            const cp4x = 1250;
            const cp4y = 950;

            // Control point 5: Final approach to bottom center
            const cp5x = 1000;
            const cp5y = 1080;

            // End: BOTTOM center point
            const x2 = cardCenterX;
            const y2 = 1100;

            return `M ${x1 * scaleX} ${y1 * scaleY} C ${cp1x * scaleX} ${cp1y * scaleY}, ${cp2x * scaleX} ${cp2y * scaleY}, ${cp3x * scaleX} ${cp3y * scaleY} S ${cp4x * scaleX} ${cp4y * scaleY}, ${cp5x * scaleX} ${cp5y * scaleY} S ${x2 * scaleX} ${y2 * scaleY}, ${x2 * scaleX} ${y2 * scaleY}`;
        }
    }

    /**
     * Generate a path for given index
     */
    generateRandomPath(index, width, height) {
        // Direct index - no alternating or modulo (causes flickering)
        return this.generateMathematicalPath(index, 1, width, height);
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

        console.log('AnimatedPaths: Creating', this.pathCount, 'paths');

        // Generate 2 paths (left and right sides of heart)
        for (let i = 0; i < this.pathCount; i++) {
            const pathData = this.generateRandomPath(i, fixedWidth, fixedHeight);

            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', pathData);

            // Both paths same opacity and stroke width
            path.style.opacity = 0;
            path.style.strokeWidth = 2.5;

            this.svg.appendChild(path);
            this.paths.push(path);
        }

        console.log('AnimatedPaths: Created', this.paths.length, 'path elements');
    }

    /**
     * Animate a single path - draws from top to bottom to form heart
     * Starts when section becomes visible
     */
    animatePath(pathElement, index) {
        // Get path length for stroke animation
        const pathLength = pathElement.getTotalLength();

        // Set up stroke dash for drawing animation
        pathElement.style.strokeDasharray = pathLength;
        pathElement.style.strokeDashoffset = pathLength;

        // Both paths animate simultaneously with same timing
        const duration = 3; // 3 seconds to draw the heart
        const delay = 0; // No delay, both start together

        // SINGLE synchronized timeline that pauses initially
        const timeline = gsap.timeline({
            paused: true // Start paused, will be triggered by scroll
        });

        timeline
            // Draw the path and fade in simultaneously
            .to(pathElement, {
                strokeDashoffset: 0,
                opacity: 0.8,
                duration: duration,
                ease: 'power2.inOut'
            });

        this.animations.push(timeline);
    }

    /**
     * Animate all paths
     */
    animateAllPaths() {
        // Kill existing animations
        this.killAnimations();

        console.log('AnimatedPaths: Starting animations for', this.paths.length, 'paths');

        // Animate each path
        this.paths.forEach((path, index) => {
            this.animatePath(path, index);
        });

        console.log('AnimatedPaths: All animations started');
    }

    /**
     * Animate section when scrolled into view
     */
    animateOnScroll() {
        // Only animate if ScrollTrigger is available
        if (typeof ScrollTrigger === 'undefined') {
            console.warn('ScrollTrigger not available, starting animation immediately');
            // Start animations immediately if ScrollTrigger not available
            this.animations.forEach(anim => anim.play());
            return;
        }

        // Create ScrollTrigger to start path animations when section is visible
        ScrollTrigger.create({
            trigger: '#explore-selection',
            start: 'top 80%',
            onEnter: () => {
                console.log('AnimatedPaths: Section visible, starting heart animation');
                // Play both path animations simultaneously
                this.animations.forEach(anim => anim.restart());
            },
            once: true
        });
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
        console.error('AnimatedPaths: GSAP library not loaded - retrying in 200ms');
        setTimeout(initAnimatedPaths, 200);
        return;
    }

    // Check if ScrollTrigger is available (optional but recommended)
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    console.log('AnimatedPaths: Initializing with GSAP loaded');

    // Initialize animated paths
    const animatedPaths = new AnimatedPaths();

    // Store instance for potential cleanup
    window.sessionsAnimatedPaths = animatedPaths;

    console.log('AnimatedPaths: Initialized successfully with', animatedPaths.paths.length, 'paths');
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('AnimatedPaths: DOM ready, initializing...');
    // Small delay to ensure GSAP is loaded
    setTimeout(initAnimatedPaths, 100);
});

// Cleanup on page unload
window.addEventListener('beforeunload', function() {
    if (window.sessionsAnimatedPaths) {
        window.sessionsAnimatedPaths.destroy();
    }
});
