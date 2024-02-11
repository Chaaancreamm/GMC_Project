// Toggle menu icons
document.querySelector('.menu-icons.open').addEventListener('click', function() {
  document.querySelector('.menu-icons.open').style.display = 'none';
  document.querySelector('.menu-icons.close').style.display = 'block';
});

document.querySelector('.menu-icons.close').addEventListener('click', function() {
  document.querySelector('.menu-icons.close').style.display = 'none';
  document.querySelector('.menu-icons.open').style.display = 'block';
});


// Add class to footer on DOMContentLoaded
document.addEventListener("DOMContentLoaded", function() {
  const footer = document.querySelector("footer");
  footer.classList.add("footer-visible");
});

// Intersection Observer for about section
document.addEventListener("DOMContentLoaded", function() {
  const aboutSection = document.querySelector('.image-section');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelector('.overlay-text').classList.add('active', 'animate'); // Add 'animate' class
      } else {
        entry.target.querySelector('.overlay-text').classList.remove('active', 'animate'); // Remove 'active' and 'animate' classes when out of view
      }
    });
  }, {
    threshold: 0.5 
  });

  observer.observe(aboutSection);
});
