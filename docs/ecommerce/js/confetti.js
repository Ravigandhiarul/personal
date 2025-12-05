// Confetti Effect for Sessions Cannabis
// Triggers celebratory confetti on Add to Cart, Wishlist, and Purchase actions

/**
 * Sessions-branded confetti configuration
 */
const sessionsConfettiConfig = {
    particleCount: 100,
    spread: 70,
    gravity: 1.2,
    ticks: 200,
    colors: [
        '#F18A00',  // Sessions Orange
        '#ffffff',  // White
        '#fef3e5',  // Cream
        '#d67800'   // Dark Orange
    ],
    scalar: 1.2,
    zIndex: 9999
};

/**
 * Trigger confetti from a specific element (button)
 * Calculates origin point based on button position
 * @param {HTMLElement} element - The button element that was clicked
 */
function triggerConfettiFromElement(element) {
    if (typeof confetti === 'undefined') {
        console.warn('canvas-confetti library not loaded');
        return;
    }

    try {
        const rect = element.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;

        confetti({
            ...sessionsConfettiConfig,
            origin: {
                x: x / window.innerWidth,
                y: y / window.innerHeight
            }
        });
    } catch (error) {
        console.error('Confetti error:', error);
    }
}

/**
 * Trigger confetti from center of screen
 * Used for checkout/purchase completion
 */
function triggerConfettiFromCenter() {
    if (typeof confetti === 'undefined') {
        console.warn('canvas-confetti library not loaded');
        return;
    }

    try {
        confetti({
            ...sessionsConfettiConfig,
            origin: { x: 0.5, y: 0.5 }
        });
    } catch (error) {
        console.error('Confetti error:', error);
    }
}

/**
 * Trigger explosive confetti for major celebrations (checkout)
 * More particles and longer duration
 */
function triggerExplosiveConfetti() {
    if (typeof confetti === 'undefined') {
        console.warn('canvas-confetti library not loaded');
        return;
    }

    try {
        confetti({
            ...sessionsConfettiConfig,
            particleCount: 150,
            spread: 90,
            ticks: 300,
            origin: { x: 0.5, y: 0.5 }
        });
    } catch (error) {
        console.error('Confetti error:', error);
    }
}

// Export functions for use in other files
if (typeof window !== 'undefined') {
    window.triggerConfettiFromElement = triggerConfettiFromElement;
    window.triggerConfettiFromCenter = triggerConfettiFromCenter;
    window.triggerExplosiveConfetti = triggerExplosiveConfetti;
}

console.log('Confetti utility loaded - Sessions Cannabis theme');
