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
    
    const savedDarkMode = localStorage.getItem('darkMode');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedDarkMode === 'true' || (savedDarkMode === null && systemPrefersDark)) {
        body.classList.add('dark');
    }
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            body.classList.toggle('dark');
            const isDark = body.classList.contains('dark');
            localStorage.setItem('darkMode', isDark);
            
            console.log('Dark mode toggled:', isDark);
            
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
    }
    
    if (darkModeToggle) {
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
    const originalText = downloadBtn.innerHTML;
    
    downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
    downloadBtn.disabled = true;
    
    const resumeContent = `
Prashant Sah
Data Science Enthusiast | Full Stack Developer | Python Programmer

CONTACT INFORMATION
Email: prashantsah2061@gmail.com
Phone: (862)-409-1631
Location: Bloomfield, NJ
LinkedIn: linkedin.com/in/prashantsah
GitHub: github.com/prashantsah2061

PROFESSIONAL SUMMARY
I'm a passionate student and self-taught developer currently exploring the fields of data science and web development. I love building meaningful tools that solve real-world problems. Currently working toward a data science internship by Summer 2026 while building practical tools to showcase my skills.

EDUCATION
Bachelor's of Science, Computer Science
Caldwell University • Caldwell, NJ
August 2023 - May 2027

Achievements:
• Dean's List, Honors Award Recipient
• Presidential Scholarship Recipient
• St. Thomas Aquinas Scholarship Recipient

Core Courses: Data Structures, Web Development, Machine Learning, Databases

EXPERIENCE
Peer Tutor | Academic Success Center
Caldwell University • Caldwell, NJ
September 2024 - Present
• Provided academic support to students in Computer Science courses, including programming, algorithms, and data structures
• Customized tutoring approaches to match individual learning styles and foster independent problem-solving skills
• Promoted critical thinking by guiding students through debugging strategies and conceptual understanding
• Contributed to improved academic performance across the department

Media Services Tech (IT Department)
Caldwell University • Caldwell, NJ
Current
• Responsible for the setup, configuration, and support of audio-visual (AV) systems during campus-wide events, lectures, and classroom activities
• Worked closely with faculty and staff to ensure seamless technical operations, including projector systems, microphones, and live recordings
• Diagnosed and resolved real-time tech issues, playing a key role in maintaining the university's IT infrastructure for academic and public events

Barnes & Noble Campus Store Team Member
Caldwell University • Caldwell, NJ
July 2024 - Present
• Assisted students and faculty with retail, textbook selection, and order fulfillment, ensuring accurate and timely distribution of course materials
• Collaborated with professors to align inventory with current syllabi and course needs
• Delivered excellent customer service while managing daily store operations, POS systems, and inventory restocking during peak academic periods

Teaching Assistant – CS 196
Caldwell University • Caldwell, NJ
Spring 2025 - Present
• Assisted in teaching CS 196: Introduction to Programming, supporting over 25 students through lab sessions, office hours, and one-on-one mentoring
• Helped explain core concepts in Python programming, debugging, logic building, and algorithmic thinking
• Collaborated with faculty to grade assignments, design practice problems, and enhance course material for better student engagement and understanding

PROJECTS
California Housing Price Predictor
• A regression-based ML model that predicts house prices using California census data
• Technologies: Python, Scikit-learn, Pandas, Matplotlib
• GitHub: github.com/prashantsah2061

Room Rental Platform
• A full-stack app for users to post, browse, and book rooms with secure authentication
• Technologies: React, Node.js, MongoDB
• Status: In development — deployed soon

Wildfire Risk Prediction Tool
• An ML + mapping tool that predicts wildfire zones in Nepal using NASA FIRMS and weather APIs
• Technologies: Python, Folium, NASA API
• Status: In progress — map using Folium

Tic-Tac-Toe Game with Speech Integration
• Developed a voice-controlled Tic-Tac-Toe game using Kivy, enabling players to make moves by speaking numbers
• Technologies: Python, Kivy, Speech Recognition (Google API), PyInstaller
• Features: Hands-free gameplay using speech-to-text recognition, interactive UI designed with Kivy, single-player mode with AI and multiplayer mode, implemented noise filtering for improved speech accuracy, packaged into an executable for easy distribution

TECHNICAL SKILLS
Programming Languages: Python, JavaScript, HTML, CSS
Data Science: Scikit-learn, Pandas, Matplotlib
Tools: Git & GitHub, VS Code, Jupyter
Domains: Web Development, Machine Learning, Data Visualization

LANGUAGES
• English (Native)
• Hindi (Fluent)
• Spanish (Intermediate)

CERTIFICATIONS & AWARDS
• Dean's List, Honors Award Recipient
• Presidential Scholarship Recipient
• St. Thomas Aquinas Scholarship Recipient
    `;
    
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Prashant_Sah_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    
    setTimeout(() => {
        downloadBtn.innerHTML = originalText;
        downloadBtn.disabled = false;
        
        showNotification('Resume downloaded successfully!', 'success');
    }, 1000);
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