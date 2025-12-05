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
     * Generate HEART-SHAPED path that flows AROUND the cards (not through them)
     * Cards are centered in the layout, paths form heart shape around them
     * Left side flows up, right side flows down, meeting at bottom center
     */
    generateMathematicalPath(index, position, width, height) {
        const scaleX = width / 1500;
        const scaleY = height / 1200;

        const totalPaths = this.pathCount;
        const halfPaths = totalPaths / 2;

        // Determine if this path is on LEFT or RIGHT side of heart
        const isLeftSide = index < halfPaths;
        const sideIndex = isLeftSide ? index : index - halfPaths;

        // Progress along the side (0 to 1)
        const progress = sideIndex / (halfPaths - 1);

        // Card area to avoid (center of viewBox)
        const cardCenterX = 750; // Center X
        const cardCenterY = 600; // Center Y
        const cardAreaWidth = 600; // Width to stay away from
        const cardAreaHeight = 400; // Height to stay away from

        if (isLeftSide) {
            // LEFT SIDE OF HEART - REVERSED: flows from TOP center, curves LEFT and DOWN, ends at bottom
            // User scrolls DOWN → sees heart form naturally from top to bottom

            // Start: TOP center (heart dip - where it ended before)
            const x1 = cardCenterX - 100 - sideIndex * 5;
            const y1 = 200 + sideIndex * 5;

            // Control point 1: Round the top of left lobe (REVERSED from cp4)
            const cp1x = 400 + sideIndex * 15;
            const cp1y = 150 - sideIndex * 10;

            // Control point 2: Peak of left lobe (REVERSED from cp3)
            const cp2x = 200 + sideIndex * 10;
            const cp2y = 350 - sideIndex * 15;

            // Control point 3: Arc down the left side (REVERSED from cp2)
            const cp3x = 100 - sideIndex * 10;
            const cp3y = 700 - sideIndex * 25;

            // Control point 4: Curve inward to bottom point (REVERSED from cp1)
            const cp4x = 300 - sideIndex * 15;
            const cp4y = 1050 - sideIndex * 20;

            // End: BOTTOM center point (heart bottom point - where it started before)
            const x2 = cardCenterX - 50;
            const y2 = 1100 - sideIndex * 15;

            return `M ${x1 * scaleX} ${y1 * scaleY} C ${cp1x * scaleX} ${cp1y * scaleY}, ${cp2x * scaleX} ${cp2y * scaleY}, ${cp3x * scaleX} ${cp3y * scaleY} S ${cp4x * scaleX} ${cp4y * scaleY}, ${x2 * scaleX} ${y2 * scaleY}`;

        } else {
            // RIGHT SIDE OF HEART - REVERSED: flows from TOP center, curves RIGHT and DOWN, ends at bottom
            // User scrolls DOWN → sees heart form naturally from top to bottom

            // Start: TOP center (heart dip - where it ended before)
            const x1 = cardCenterX + 100 + sideIndex * 5;
            const y1 = 200 + sideIndex * 5;

            // Control point 1: Round the top of right lobe (REVERSED from cp4)
            const cp1x = 1100 - sideIndex * 15;
            const cp1y = 150 - sideIndex * 10;

            // Control point 2: Peak of right lobe (REVERSED from cp3)
            const cp2x = 1300 - sideIndex * 10;
            const cp2y = 350 - sideIndex * 15;

            // Control point 3: Arc down the right side (REVERSED from cp2)
            const cp3x = 1400 + sideIndex * 10;
            const cp3y = 700 - sideIndex * 25;

            // Control point 4: Curve inward to bottom point (REVERSED from cp1)
            const cp4x = 1200 + sideIndex * 15;
            const cp4y = 1050 - sideIndex * 20;

            // End: BOTTOM center point (heart bottom point - where it started before)
            const x2 = cardCenterX + 50;
            const y2 = 1100 - sideIndex * 15;

            return `M ${x1 * scaleX} ${y1 * scaleY} C ${cp1x * scaleX} ${cp1y * scaleY}, ${cp2x * scaleX} ${cp2y * scaleY}, ${cp3x * scaleX} ${cp3y * scaleY} S ${cp4x * scaleX} ${cp4y * scaleY}, ${x2 * scaleX} ${y2 * scaleY}`;
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

        // Generate 18 paths with fixed dimensions
        for (let i = 0; i < this.pathCount; i++) {
            const pathData = this.generateRandomPath(i, fixedWidth, fixedHeight);

            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', pathData);

            // Linear opacity and stroke width progression (matches animation)
            const strokeOpacity = 0.30 + (i / this.pathCount) * 0.42; // 0.30 to 0.72
            const strokeWidth = 1.0 + (i / this.pathCount) * 0.85; // 1.0 to 1.85

            path.style.opacity = strokeOpacity;
            path.style.strokeWidth = strokeWidth;

            this.svg.appendChild(path);
            this.paths.push(path);
        }

        console.log('AnimatedPaths: Created', this.paths.length, 'path elements');
    }

    /**
     * Animate a single path with synchronized timing - NO FLICKERING
     * Fixed duration and predictable staggering for smooth flow
     */
    animatePath(pathElement, index) {
        // Get path length for stroke animation
        const pathLength = pathElement.getTotalLength();

        // Set up stroke dash for drawing animation
        pathElement.style.strokeDasharray = pathLength;
        pathElement.style.strokeDashoffset = pathLength;

        // FIXED duration and predictable delay (eliminates flickering)
        const duration = 25; // Consistent for all paths
        const delay = index * 0.15; // Predictable stagger (0.15s per path)

        // Linear opacity progression (not random)
        const baseOpacity = 0.30 + (index / this.pathCount) * 0.42; // 0.30 to 0.72
        const minOpacity = baseOpacity * 0.6;
        const maxOpacity = baseOpacity * 1.5;

        // SINGLE synchronized timeline
        const timeline = gsap.timeline({
            repeat: -1,
            delay: delay,
            repeatDelay: 0 // No gap between loops
        });

        timeline
            // Phase 1: Fade in while drawing begins
            .to(pathElement, {
                opacity: baseOpacity,
                duration: 1,
                ease: 'power2.in'
            })
            // Phase 2: Draw the full path
            .to(pathElement, {
                strokeDashoffset: 0,
                opacity: maxOpacity,
                duration: duration * 0.35,
                ease: 'none'
            }, '-=0.5')
            // Phase 3: Hold at full brightness
            .to(pathElement, {
                duration: duration * 0.30,
                ease: 'none'
            })
            // Phase 4: Fade out gradually
            .to(pathElement, {
                opacity: 0,
                duration: duration * 0.25,
                ease: 'power2.out'
            })
            // Phase 5: Reset for next loop
            .set(pathElement, {
                strokeDashoffset: pathLength,
                opacity: 0
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
