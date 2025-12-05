/**
 * Sessions Cannabis - Particle Animation Configuration
 * Sparkle effect for hero section with Sessions orange theme
 */

// Initialize particles when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initSessionsParticles();
});

async function initSessionsParticles() {
    // Check if tsparticles is loaded
    if (typeof tsParticles === 'undefined') {
        console.error('tsParticles library not loaded');
        return;
    }

    // Skip particles on very small mobile devices for performance
    if (window.innerWidth < 480) {
        console.log('Particles disabled on small mobile devices');
        return;
    }

    try {
        await tsParticles.load("tsparticles", {
            background: {
                color: {
                    value: "transparent" // Transparent to show light background
                }
            },
            fullScreen: {
                enable: false,
                zIndex: 1
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: false // Disabled for cleaner effect
                    },
                    onHover: {
                        enable: false
                    },
                    resize: true
                }
            },
            particles: {
                number: {
                    value: 150, // Increased density
                    density: {
                        enable: true,
                        area: 800
                    }
                },
                color: {
                    value: "#F18A00" // Sessions orange
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: {
                        min: 0.5,
                        max: 1
                    },
                    animation: {
                        enable: true,
                        speed: 2,
                        minimumValue: 0.3,
                        sync: false,
                        startValue: "random",
                        destroy: "none"
                    }
                },
                size: {
                    value: {
                        min: 1,
                        max: 2.5
                    }
                },
                links: {
                    enable: false
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    random: true,
                    straight: false,
                    outModes: {
                        default: "out"
                    }
                }
            },
            detectRetina: true,
            pauseOnBlur: true,
            pauseOnOutsideViewport: true
        });

        console.log('Sessions particles initialized successfully');
    } catch (error) {
        console.error('Error initializing particles:', error);
    }
}

// Optional: Destroy particles on page unload to prevent memory leaks
window.addEventListener('beforeunload', function() {
    if (typeof tsParticles !== 'undefined') {
        const container = tsParticles.domItem(0);
        if (container) {
            container.destroy();
        }
    }
});
