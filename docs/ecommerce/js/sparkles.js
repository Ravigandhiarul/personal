// Sparkles Effect for Explore Selection Section
// Uses tsParticles for animated sparkle particles

function initSparkles() {
    // Check if tsParticles is loaded
    if (typeof tsParticles === 'undefined') {
        console.error('tsParticles library not loaded');
        return;
    }

    // Initialize sparkles particles
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
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: false,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#F18A00", // Sessions orange
            },
            move: {
                direction: "outside",
                enable: true,
                outModes: {
                    default: "out",
                },
                random: false,
                speed: 1.5,
                straight: false,
            },
            number: {
                density: {
                    enable: false,
                },
                value: 300,
            },
            position: {
                x: 50,
                y: 10,
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
        },
        detectRetina: true,
    });

    console.log('Sparkles initialized for Explore Selection section');
}

// Initialize sparkles when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit to ensure tsParticles is loaded
    setTimeout(initSparkles, 200);
});
