// Snowfall Effect
document.addEventListener('DOMContentLoaded', () => {
    const numberOfSnowflakes = 30; // Number of snowflakes

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.textContent = '❄️'; // Snowflake character
        snowflake.classList.add('snowflake');

        // Randomize snowflake properties
        snowflake.style.left = `${Math.random() * 100}vw`; // Horizontal position
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Falling speed
        snowflake.style.fontSize = `${Math.random() * 1.2 + 1.2}rem`; // Snowflake size

        document.body.appendChild(snowflake);
    }
});

// Countdown Timer for Winter Solstice 2025
const countdownElement = document.getElementById('countdown');
const solsticeDate = new Date('2025-12-21T00:00:00').getTime(); // Winter Solstice date

setInterval(() => {
    const now = new Date().getTime();
    const distance = solsticeDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = distance >= 0
        ? `Countdown to Winter Solstice 2025: ${days}d ${hours}h ${minutes}m ${seconds}s ❄️`
        : "The Winter Solstice 2025 has arrived!";
}, 1000);

// Dark mode toggle with persistent theme
const themeSwitcher = document.getElementById('theme-switcher');
const header = document.getElementById('main-header');

// Initialize theme
const applyTheme = (theme) => {
    document.body.classList.toggle('dark-mode', theme === 'dark');
    header.style.backgroundColor = theme === 'dark'
        ? 'rgba(0, 0, 0, 0.6)'
        : 'rgba(255, 255, 255, 0.6)';
};

applyTheme(localStorage.getItem('theme') || 'light');

themeSwitcher.addEventListener('click', () => {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    header.style.backgroundColor = isDarkMode
        ? 'rgba(0, 0, 0, 0.6)'
        : 'rgba(255, 255, 255, 0.6)';
});

// Smooth scrolling with fallback
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.getAttribute('href'));
        if ('scrollBehavior' in document.documentElement.style) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo(0, targetElement.offsetTop);
        }
    });
});

// Adding hover effects dynamically to navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('mouseover', () => link.style.color = '#ff9800');
    link.addEventListener('mouseout', () => link.style.color = 'white');
});

// Back to Top functionality
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    backToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('gallery-modal');
    const openButton = document.getElementById('open-gallery');
    const closeButton = document.getElementById('close-modal');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let slideIndex = 0;
  
    // Show the modal and first slide
    openButton.addEventListener('click', () => {
      modal.style.display = 'block';
      showSlides(slideIndex);
    });
  
    // Close the modal
    closeButton.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    // Show next slide
    nextButton.addEventListener('click', () => {
      showSlides(++slideIndex);
    });
  
    // Show previous slide
    prevButton.addEventListener('click', () => {
      showSlides(--slideIndex);
    });
  
    // Show slide based on index
    function showSlides(index) {
      if (index >= slides.length) {
        slideIndex = 0;
      } else if (index < 0) {
        slideIndex = slides.length - 1;
      } else {
        slideIndex = index;
      }
  
      slides.forEach(slide => (slide.style.display = 'none'));
      slides[slideIndex].style.display = 'block';
    }
  
    // Add swipe support
    let touchStartX = 0;
    let touchEndX = 0;
  
    modal.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    });
  
    modal.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });
  
    function handleSwipe() {
      if (touchEndX < touchStartX - 50) {
        showSlides(++slideIndex); // Swipe left
      } else if (touchEndX > touchStartX + 50) {
        showSlides(--slideIndex); // Swipe right
      }
    }
  });
  