document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');

        if (body.classList.contains('dark-theme')) {
            themeToggle.textContent = '☀️ Light Mode';
        } else {
            themeToggle.textContent = '🌙 Dark Mode';
        }
    });

    // Avatar animation
    const avatar = document.getElementById('avatar');
    avatar.addEventListener('click', function() {
        this.classList.toggle('animated');
    });

    // Skills animation
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        skill.addEventListener('click', function() {
            this.classList.toggle('highlighted');
        });
    });

    // Print functionality
    const printButton = document.createElement('button');
    printButton.textContent = '🖨️ Print Resume';
    printButton.className = 'theme-toggle';
    printButton.style.top = '4rem';
    printButton.style.right = '1rem';
    printButton.addEventListener('click', function() {
        window.print();
    });
    document.body.appendChild(printButton);

    // Animate elements when they come into view
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.section, .experience, .project').forEach(section => {
        observer.observe(section);
    });

    // Easter egg - typewriter effect on intro
    const introText = document.querySelector('.intro p');
    const originalText = introText.textContent;
    introText.textContent = '';

    let i = 0;
    const typingEffect = setInterval(() => {
        if (i < originalText.length) {
            introText.textContent += originalText.charAt(i);
            i++;
        } else {
            clearInterval(typingEffect);
        }
    }, 30);
});
