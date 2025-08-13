document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    const contactCards = document.querySelectorAll('.contact-card');
    contactCards.forEach(card => {
        card.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });

    const body = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    const savedDarkMode = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedDarkMode === 'true' || (savedDarkMode === null && systemPrefersDark)) {
        body.classList.add('dark');
    }
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            body.classList.toggle('dark');
            const isDark = body.classList.contains('dark');
            localStorage.setItem('darkMode', isDark);
            
            const sunIcon = this.querySelector('.fa-sun');
            const moonIcon = this.querySelector('.fa-moon');
            
            if (isDark) {
                sunIcon.classList.add('hidden');
                moonIcon.classList.remove('hidden');
            } else {
                sunIcon.classList.remove('hidden');
                moonIcon.classList.add('hidden');
            }
        });
        
        // Set initial icon state
        const sunIcon = darkModeToggle.querySelector('.fa-sun');
        const moonIcon = darkModeToggle.querySelector('.fa-moon');
        
        if (body.classList.contains('dark')) {
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        } else {
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        }
    }

    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }

    const mobileLinks = document.querySelectorAll('#mobile-menu a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });

    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    const sections = document.querySelectorAll('section[id]');
    const navLinksArray = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinksArray.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    const navbar = document.querySelector('nav');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white/95', 'dark:bg-gray-900/95', 'backdrop-blur-sm');
        } else {
            navbar.classList.remove('bg-white/95', 'dark:bg-gray-900/95', 'backdrop-blur-sm');
        }
    });

    const scrollToTopBtn = document.getElementById('scroll-to-top');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    const skillBars = document.querySelectorAll('.bg-blue-600, .bg-green-600, .bg-purple-600, .bg-pink-600');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        
        const skillObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        bar.style.width = width;
                        bar.style.transition = 'width 1.5s ease-out';
                    }, 200);
                    skillObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        skillObserver.observe(bar.parentElement.parentElement);
    });


    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full`;
        
        if (type === 'success') {
            notification.classList.add('bg-green-500', 'text-white');
        } else if (type === 'error') {
            notification.classList.add('bg-red-500', 'text-white');
        } else {
            notification.classList.add('bg-blue-500', 'text-white');
        }
        
        notification.textContent = message;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }, 5000);
    }

    const profileImage = document.querySelector('img[alt="Prashant Sah"]');
    if (profileImage) {
        profileImage.classList.add('profile-image');
    }

    const projectCards = document.querySelectorAll('.bg-white.rounded-lg.shadow-lg, .dark\\:bg-gray-700.rounded-lg.shadow-lg');
    projectCards.forEach(card => {
        card.classList.add('project-card');
    });

    const skillCards = document.querySelectorAll('.bg-white.dark\\:bg-gray-800.p-6.rounded-lg');
    skillCards.forEach(card => {
        card.classList.add('skill-card');
    });

    const experienceCards = document.querySelectorAll('.bg-white.dark\\:bg-gray-800.p-6.rounded-lg');
    experienceCards.forEach(card => {
        card.classList.add('experience-card');
    });

    const heroTitle = document.querySelector('#home h1');
    if (heroTitle) {
        const text = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        heroTitle.style.opacity = '1';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 500);
    }

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroSection = document.querySelector('#home');
        if (heroSection) {
            const rate = scrolled * -0.5;
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
                    if (this.textContent.includes('Download') || this.id === 'dark-mode-toggle' || this.id === 'scroll-to-top') {
            return;
            }
            
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
            this.disabled = true;
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
            }, 2000);
        });
    });

    const socialIcons = document.querySelectorAll('.fab');
    socialIcons.forEach(icon => {
        icon.classList.add('social-icon');
    });

    const formInputs = document.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.classList.add('contact-form');
    });

    const animatedButtons = document.querySelectorAll('button:not(#dark-mode-toggle):not(#scroll-to-top)');
    animatedButtons.forEach(button => {
        button.classList.add('animated-button');
    });
});

function downloadResume() {
    const downloadBtn = document.querySelector('button[onclick="downloadResume()"]');
    const originalText = downloadBtn ? downloadBtn.innerHTML : null;

    if (downloadBtn) {
        downloadBtn.disabled = true;
        downloadBtn.innerHTML = '<i class="fas fa-clock"></i> Coming soon';
    }

    showNotification('Resume will be uploaded soon.', 'info');

    setTimeout(() => {
        if (downloadBtn && originalText !== null) {
            downloadBtn.innerHTML = originalText;
            downloadBtn.disabled = false;
        }
    }, 1500);
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full`;
    
    if (type === 'success') {
        notification.classList.add('bg-green-500', 'text-white');
    } else if (type === 'error') {
        notification.classList.add('bg-red-500', 'text-white');
    } else {
        notification.classList.add('bg-blue-500', 'text-white');
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 5000);
} 