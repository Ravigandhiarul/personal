// Sparkles Effect for Explore Selection Section
// Uses tsParticles with emitters for point-source particle generation

function initSparkles() {
    // Check if tsParticles is loaded
    if (typeof tsParticles === 'undefined') {
        console.error('tsParticles library not loaded');
        return;
    }

    console.log('Initializing sparkles with emitters...');

    // Initialize sparkles particles with emitter
    tsParticles.load("sparkles-explore", {
        background: {
            color: {
                value: "transparent",
            },
        },
        fullScreen: {
            enable: false,
            zIndex: 0,
        },
        fpsLimit: 120,

        // EMITTERS: Spawn particles from center of gradient line
        emitters: {
            position: {
                x: 50,      // 50% from left (horizontally centered)
                y: 6        // Adjusted down to align with gradient line
            },
            rate: {
                delay: 0.05,    // Spawn every 0.05 seconds
                quantity: 3     // 3 particles per spawn
            },
            size: {
                width: 10,      // Small emission area width
                height: 5       // Small emission area height (point source)
            },
            particles: {
                // Particle-specific config for emitted particles
                move: {
                    direction: "bottom",    // Move downward
                    enable: true,
                    outModes: {
                        default: "destroy",  // Remove when out of bounds
                    },
                    speed: {
                        min: 1,
                        max: 3,
                    },
                    straight: false,
                    angle: {
                        offset: 0,
                        value: 90,           // 90 degrees = downward
                    },
                },
            }
        },

        interactivity: {
            events: {
                onClick: {
                    enable: false,
                },
                onHover: {
                    enable: false,
                },
                resize: true,
            },
        },

        particles: {
            color: {
                value: "#F18A00", // Sessions orange
            },
            move: {
                direction: "bottom",
                enable: true,
                outModes: {
                    default: "destroy",
                },
                random: true,
                speed: {
                    min: 1,
                    max: 3,
                },
                straight: false,
                angle: {
                    offset: 0,
                    value: 90,
                },
            },
            number: {
                density: {
                    enable: false,
                },
                value: 0,  // Start with 0 particles, emitter will create them
            },
            opacity: {
                value: {
                    min: 0.1,
                    max: 1,
                },
                animation: {
                    enable: true,
                    speed: 3,
                    sync: false,
                    startValue: "random",
                    destroy: "none",
                },
            },
            shape: {
                type: "circle",
            },
            size: {
                value: {
                    min: 0.4,
                    max: 1.5,
                },
            },
            life: {
                duration: {
                    sync: false,
                    value: 4,  // Particles live for 4 seconds before fading
                },
                count: 1,
            },
        },
        detectRetina: true,
    }).then((container) => {
        console.log('Sparkles initialized successfully');
        console.log('Container:', container);
        console.log('Emitter position: x=50%, y=6%');
        console.log('Gradient line at: top=55px, left=50%');
    }).catch((error) => {
        console.error('Failed to initialize sparkles:', error);
    });
}

// Initialize sparkles when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit to ensure tsParticles is loaded
    setTimeout(initSparkles, 200);
});
