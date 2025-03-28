document.addEventListener('DOMContentLoaded', function () {
    // Update copyright year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainMenu = document.querySelector('.main-menu');

    if (mobileMenuToggle && mainMenu) {
        mobileMenuToggle.addEventListener('click', function () {
            mainMenu.classList.toggle('show');
        });
    }

    // Dropdown functionality
    document.querySelectorAll('.dropdown > a').forEach(dropdownLink => {
        dropdownLink.addEventListener('click', function (e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = this.parentElement;
                const dropdownMenu = dropdown.querySelector('.dropdown-menu');

                // Close other dropdowns
                document.querySelectorAll('.dropdown-menu').forEach(menu => {
                    if (menu !== dropdownMenu) {
                        menu.classList.remove('show');
                    }
                });

                dropdownMenu.classList.toggle('show');
            }
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown') && window.innerWidth <= 768) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.classList.remove('show');
            });
        }
    });

    // Make project cards clickable
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', function () {
            const link = this.querySelector('a');
            if (link) {
                window.location.href = link.href;
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Update URL without jumping
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                } else {
                    location.hash = targetId;
                }
            }
        });
    });
    const projectData = {
        'ap-compsci': {
            title: 'AP Computer Science A Projects',
            subtitle: 'Java Programming Projects',
            text: 'These projects were developed as part of my AP Computer Science A course. They demonstrate my proficiency in Java programming, object-oriented design, and algorithm development.'
        },
        'cybersecurity': {
            title: 'Cybersecurity Projects',
            subtitle: 'Security Analysis and Protection',
            text: 'My cybersecurity projects focus on identifying vulnerabilities, implementing security measures, and understanding encryption techniques.'
        },
        'engineering-design': {
            title: 'Introduction to Engineering Design',
            subtitle: 'Engineering Projects',
            text: 'Projects from my Introduction to Engineering Design course showcasing problem-solving and design thinking.'
        },
        'robotics': {
            title: 'Advanced Robotics Engineering',
            subtitle: 'Robotics and Automation',
            text: 'Projects demonstrating my skills in robotics, automation, and mechanical design.'
        },
        'personal': {
            title: 'Personal Projects',
            subtitle: 'Independent Learning',
            text: 'Projects I\'ve worked on independently to expand my skills and explore new technologies.'
        }
    };

    img.onerror = function () {
        this.src = 'assets/placeholder.jpg';
    };
});