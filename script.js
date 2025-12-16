/**
 * Portfolio Website - Interactive JavaScript
 * Handles smooth scrolling, navigation highlighting, and interactive elements
 */

// ============================================================================
// SMOOTH SCROLL BEHAVIOR
// ============================================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================================================
// NAVBAR ACTIVE LINK HIGHLIGHTING
// ============================================================================

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === currentSection) {
            link.classList.add('active');
        }
    });
});

// ============================================================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ============================================================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all project cards
document.querySelectorAll('.project-card').forEach(card => {
    observer.observe(card);
});

// ============================================================================
// PARALLAX EFFECT ON SCROLL
// ============================================================================

const heroSection = document.querySelector('.hero');

if (heroSection) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const parallaxElements = heroSection.querySelectorAll('.hero::before, .hero::after');
        
        // Subtle parallax effect
        heroSection.style.backgroundPosition = `0 ${scrollPosition * 0.5}px`;
    });
}

// ============================================================================
// PROJECT CARD FILTER (Optional - for future use)
// ============================================================================

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter projects
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.classList.add('in-view');
                }, 10);
            } else {
                card.classList.remove('in-view');
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ============================================================================
// SCROLL TO TOP BUTTON
// ============================================================================

const scrollTopButton = document.createElement('button');
scrollTopButton.id = 'scroll-top-btn';
scrollTopButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopButton.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #0066ff, #00d4ff);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 999;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0, 102, 255, 0.3);
    font-size: 1.2rem;
`;

document.body.appendChild(scrollTopButton);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollTopButton.style.display = 'flex';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollTopButton.addEventListener('mouseenter', () => {
    scrollTopButton.style.transform = 'scale(1.1)';
});

scrollTopButton.addEventListener('mouseleave', () => {
    scrollTopButton.style.transform = 'scale(1)';
});

// ============================================================================
// PRELOAD IMAGES
// ============================================================================

function preloadImages() {
    const images = document.querySelectorAll('[style*="background-image"]');
    
    images.forEach(element => {
        const backgroundImage = element.style.backgroundImage;
        const url = backgroundImage.match(/url\(["']?([^"']*)["']?\)/)[1];
        
        const img = new Image();
        img.src = url;
    });
}

// Preload images when page loads
window.addEventListener('load', preloadImages);

// ============================================================================
// LAZY LOADING FOR IMAGES
// ============================================================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('data-src');
                
                if (src) {
                    img.src = src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================================================
// FORM VALIDATION (if contact form is added)
// ============================================================================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ============================================================================
// KEYBOARD NAVIGATION
// ============================================================================

document.addEventListener('keydown', (e) => {
    // Escape key to close modals (if any)
    if (e.key === 'Escape') {
        // Handle escape key functionality
    }
    
    // Alt + S to scroll to projects
    if (e.altKey && e.key === 's') {
        e.preventDefault();
        document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' });
    }
    
    // Alt + C to scroll to contact
    if (e.altKey && e.key === 'c') {
        e.preventDefault();
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    }
});

// ============================================================================
// PERFORMANCE OPTIMIZATION
// ============================================================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================================================
// ANALYTICS TRACKING (Optional)
// ============================================================================

// Track project clicks
document.querySelectorAll('.project-link').forEach((link, index) => {
    link.addEventListener('click', () => {
        console.log(`Project ${index + 1} clicked`);
        // Send to analytics service if needed
    });
});

// Track button clicks
document.querySelectorAll('.btn').forEach((btn, index) => {
    btn.addEventListener('click', () => {
        console.log(`Button ${index + 1} clicked`);
        // Send to analytics service if needed
    });
});

// ============================================================================
// DARK MODE TOGGLE (Optional - for future implementation)
// ============================================================================

function initDarkMode() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    if (darkModeToggle) {
        // Check for saved mode preference or default to 'dark'
        const currentMode = localStorage.getItem('theme-mode') || 'dark';
        
        darkModeToggle.addEventListener('click', () => {
            const newMode = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('theme-mode', newMode);
        });
        
        // Apply saved preference
        if (currentMode === 'light') {
            document.body.classList.add('dark-mode');
        }
    }
}

// ============================================================================
// PAGE LOAD COMPLETE
// ============================================================================

window.addEventListener('load', () => {
    console.log('Portfolio website loaded successfully');
    document.body.classList.add('loaded');
});

// ============================================================================
// SERVICE WORKER REGISTRATION (Optional - for PWA)
// ============================================================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Uncomment to enable service worker
        // navigator.serviceWorker.register('/sw.js')
        //     .then(reg => console.log('Service Worker registered'))
        //     .catch(err => console.log('Service Worker registration failed'));
    });
}

// ============================================================================
// ACCESSIBILITY ENHANCEMENTS
// ============================================================================

// Add focus visible styles
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// ============================================================================
// CUSTOM CURSOR (Optional)
// ============================================================================

const cursor = document.createElement('div');
cursor.id = 'custom-cursor';
cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid #0066ff;
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    display: none;
    opacity: 0.5;
`;

// Uncomment to enable custom cursor
// document.body.appendChild(cursor);

// document.addEventListener('mousemove', (e) => {
//     cursor.style.left = (e.clientX - 10) + 'px';
//     cursor.style.top = (e.clientY - 10) + 'px';
//     cursor.style.display = 'block';
// });

// document.addEventListener('mouseleave', () => {
//     cursor.style.display = 'none';
// });

console.log('Portfolio JavaScript initialized');
