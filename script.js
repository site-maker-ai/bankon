// ===== MOBILE MENU TOGGLE =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animate hamburger icon
        hamburger.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== SMOOTH SCROLLING =====
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

// ===== CONTACT FORM HANDLING =====
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
let csrfToken = '';

// Sayfa yüklendiğinde CSRF token al
async function getCsrfToken() {
    try {
        const response = await fetch('get_csrf_token.php');
        const data = await response.json();
        csrfToken = data.csrf_token;
    } catch (error) {
        console.error('CSRF token alınamadı:', error);
    }
}

// Sayfa yüklendiğinde token'ı al
if (contactForm) {
    getCsrfToken();
}

// Form validasyonu
function validateForm(formData) {
    const errors = [];
    
    // Ad Soyad kontrolü
    const name = formData.get('name').trim();
    if (name.length < 2 || name.length > 100) {
        errors.push('Ad Soyad 2-100 karakter arasında olmalıdır');
    }
    
    // E-posta kontrolü
    const email = formData.get('email').trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push('Geçerli bir e-posta adresi giriniz');
    }
    
    // Telefon kontrolü (opsiyonel ama doldurulduysa)
    const phone = formData.get('phone').trim();
    if (phone && phone.length > 0) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(phone)) {
            errors.push('Geçerli bir telefon numarası giriniz');
        }
    }
    
    // Konu kontrolü
    const subject = formData.get('subject');
    if (!subject || subject === '') {
        errors.push('Lütfen bir konu seçiniz');
    }
    
    // Mesaj kontrolü
    const message = formData.get('message').trim();
    if (message.length < 10) {
        errors.push('Mesajınız en az 10 karakter olmalıdır');
    }
    if (message.length > 5000) {
        errors.push('Mesajınız en fazla 5000 karakter olabilir');
    }
    
    // XSS önleme - tehlikeli karakterler kontrolü
    const dangerousPattern = /<script|javascript:|onerror=|onload=/i;
    const allFields = [name, email, phone, message];
    for (const field of allFields) {
        if (dangerousPattern.test(field)) {
            errors.push('Geçersiz karakter tespit edildi');
            break;
        }
    }
    
    return errors;
}

// Form gönderimi
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Formu devre dışı bırak (çift gönderim önleme)
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Gönderiliyor...';
        
        // Form verilerini al
        const formData = new FormData(contactForm);
        
        // CSRF token ekle
        formData.append('csrf_token', csrfToken);
        
        // Client-side validasyon
        const validationErrors = validateForm(formData);
        if (validationErrors.length > 0) {
            showMessage(validationErrors.join('<br>'), 'error');
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
            return;
        }
        
        try {
            // Sunucuya gönder
            const response = await fetch('contact_handler.php', {
                method: 'POST',
                body: formData,
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            });
            
            const data = await response.json();
            
            if (data.success) {
                showMessage(data.message, 'success');
                contactForm.reset();
                
                // Yeni CSRF token al
                await getCsrfToken();
                
                // 5 saniye sonra mesajı gizle
                setTimeout(() => {
                    hideMessage();
                }, 5000);
            } else {
                showMessage(data.message || 'Bir hata oluştu. Lütfen tekrar deneyin.', 'error');
            }
        } catch (error) {
            console.error('Form gönderim hatası:', error);
            showMessage('Bağlantı hatası oluştu. Lütfen internet bağlantınızı kontrol edin ve tekrar deneyin.', 'error');
        } finally {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });
}

function showMessage(message, type) {
    if (formMessage) {
        formMessage.innerHTML = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        
        // Mesaja scroll
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function hideMessage() {
    if (formMessage) {
        formMessage.style.display = 'none';
    }
}

// Real-time karakter sayacı (opsiyonel)
const messageTextarea = document.getElementById('message');
if (messageTextarea) {
    const charCounter = document.createElement('div');
    charCounter.style.cssText = 'text-align: right; font-size: 0.9rem; color: #666; margin-top: 5px;';
    messageTextarea.parentNode.insertBefore(charCounter, messageTextarea.nextSibling);
    
    messageTextarea.addEventListener('input', function() {
        const length = this.value.length;
        const maxLength = 5000;
        charCounter.textContent = `${length} / ${maxLength} karakter`;
        
        if (length > maxLength) {
            charCounter.style.color = '#c62828';
        } else if (length > maxLength * 0.9) {
            charCounter.style.color = '#ff8c00';
        } else {
            charCounter.style.color = '#666';
        }
    });
}

// ===== SCROLL ANIMATION =====
// Add fade-in animation for elements when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements with animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .product-category, .value-card, .product-category-detail, .info-item');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// ===== NAVBAR SCROLL EFFECT =====
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ===== LOGO IMAGE HANDLING =====
// If logo image doesn't exist, add fallback text
window.addEventListener('load', function() {
    const logoImg = document.getElementById('logo-img');
    if (logoImg) {
        logoImg.onerror = function() {
            // If image fails to load, replace with text
            this.style.display = 'none';
            const logoDiv = this.parentElement;
            logoDiv.innerHTML = '<h2 style="color: #2D5F3F; margin: 0;">BANKON</h2>';
        };
    }
});

// ===== UTILITY: Prevent form resubmission on page refresh =====
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

console.log('Bankon Website loaded successfully! 🎉');
