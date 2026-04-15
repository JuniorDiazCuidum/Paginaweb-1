// ====================================
// NAVIGATION FUNCTIONALITY
// ====================================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Navbar scroll effect
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ====================================
// SMOOTH SCROLLING
// ====================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ====================================
// FORM VALIDATION & SUBMISSION
// ====================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();
    
    // Validation flags
    let isValid = true;
    let errors = [];
    
    // Name validation
    if (name.length < 2) {
        isValid = false;
        errors.push('Por favor ingresa un nombre válido (al menos 2 caracteres)');
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        isValid = false;
        errors.push('Por favor ingresa un correo electrónico válido');
    }
    
    // Phone validation (optional but if provided, should be valid)
    if (phone && phone.length > 0) {
        const phoneRegex = /^[\d\s\-\(\)\+]+$/;
        if (!phoneRegex.test(phone) || phone.replace(/\D/g, '').length < 10) {
            isValid = false;
            errors.push('Por favor ingresa un número de teléfono válido (al menos 10 dígitos)');
        }
    }
    
    // Service validation
    if (!service) {
        isValid = false;
        errors.push('Por favor selecciona un servicio');
    }
    
    // Message validation
    if (message.length < 10) {
        isValid = false;
        errors.push('Por favor proporciona más detalles sobre tus necesidades (al menos 10 caracteres)');
    }
    
    // Display errors or submit
    if (!isValid) {
        alert('Por favor corrige los siguientes errores:\n\n' + errors.join('\n'));
        return;
    }
    
    // Success handling
    showSuccessMessage();
    contactForm.reset();
});

function showSuccessMessage() {
    // Create success message element
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <div style="
            background: linear-gradient(135deg, #8B9D83, #A8B9A0);
            color: white;
            padding: 1.5rem 2rem;
            border-radius: 12px;
            text-align: center;
            margin-top: 1rem;
            animation: slideInUp 0.5s ease;
            box-shadow: 0 4px 16px rgba(139, 157, 131, 0.3);
        ">
            <h4 style="margin: 0 0 0.5rem 0; font-family: 'Cormorant Garamond', serif; font-size: 1.5rem;">
                ¡Mensaje Enviado Exitosamente! ✓
            </h4>
            <p style="margin: 0; opacity: 0.95;">
                Gracias por contactarnos. Responderemos en 24 horas.
            </p>
        </div>
    `;
    
    // Insert after form
    contactForm.parentNode.insertBefore(successDiv, contactForm.nextSibling);
    
    // Remove after 5 seconds
    setTimeout(() => {
        successDiv.style.opacity = '0';
        successDiv.style.transform = 'translateY(-20px)';
        successDiv.style.transition = 'all 0.5s ease';
        setTimeout(() => successDiv.remove(), 500);
    }, 5000);
}

// ====================================
// SCROLL ANIMATIONS
// ====================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all service cards, testimonials, and pricing cards
document.querySelectorAll('.service-card, .testimonial, .pricing-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ====================================
// VIDEO PLAYER PLACEHOLDER
// ====================================

const playButton = document.querySelector('.play-button');

playButton.addEventListener('click', () => {
    // In a real implementation, this would open a video modal or iframe
    alert('El reproductor de video se abriría aquí.\n\nEn producción, esto enlazaría a tu video de demostración del servicio en YouTube, Vimeo, o una solución auto-hospedada.');
});

// ====================================
// CTA BUTTON ACTIONS
// ====================================

// All "Book Now" and "Schedule Service" buttons
const ctaButtons = document.querySelectorAll('.nav-cta, .btn-primary, .pricing-btn');

ctaButtons.forEach(button => {
    // Skip the form submit button
    if (button.classList.contains('form-submit')) return;
    
    button.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Scroll to contact section
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            const offsetTop = contactSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Focus on name input after scroll
            setTimeout(() => {
                document.getElementById('name').focus();
            }, 800);
        }
    });
});

// ====================================
// UTILITY: Active Navigation Link
// ====================================

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ====================================
// PERFORMANCE: Debounce Scroll Events
// ====================================

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

// Apply debouncing to scroll-heavy operations
const debouncedScroll = debounce(() => {
    // Any heavy scroll operations can go here
}, 100);

window.addEventListener('scroll', debouncedScroll);

// ====================================
// ACCESSIBILITY ENHANCEMENTS
// ====================================

// Keyboard navigation for mobile menu
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Focus trap in mobile menu when open
const focusableElements = 'a[href], button, textarea, input, select';
let firstFocusableElement, lastFocusableElement;

navMenu.addEventListener('keydown', (e) => {
    if (!navMenu.classList.contains('active')) return;
    
    const focusable = navMenu.querySelectorAll(focusableElements);
    firstFocusableElement = focusable[0];
    lastFocusableElement = focusable[focusable.length - 1];
    
    if (e.key === 'Tab') {
        if (e.shiftKey) {
            if (document.activeElement === firstFocusableElement) {
                lastFocusableElement.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastFocusableElement) {
                firstFocusableElement.focus();
                e.preventDefault();
            }
        }
    }
});

// ====================================
// INITIALIZATION
// ====================================

console.log('🏠 Sitio web Espacios Serenos cargado exitosamente');
console.log('✓ Navegación activa');
console.log('✓ Validación de formulario habilitada');
console.log('✓ Animaciones de scroll listas');
console.log('✓ Características de accesibilidad habilitadas');