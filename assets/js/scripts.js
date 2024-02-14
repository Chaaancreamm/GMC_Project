document.addEventListener("DOMContentLoaded", function() {
  // Toggle menu icons
  const openMenuIcon = document.querySelector('.menu-icons.open');
  if (openMenuIcon) {
    openMenuIcon.addEventListener('click', function() {
      document.querySelector('.menu-icons.open').style.display = 'none';
      document.querySelector('.menu-icons.close').style.display = 'block';
    });
  }

  const closeMenuIcon = document.querySelector('.menu-icons.close');
  if (closeMenuIcon) {
    closeMenuIcon.addEventListener('click', function() {
      document.querySelector('.menu-icons.close').style.display = 'none';
      document.querySelector('.menu-icons.open').style.display = 'block';
    });
  }

  // Add class to footer on DOMContentLoaded
  const footer = document.querySelector("footer");
  if (footer) {
    footer.classList.add("footer-visible");
  }

  // Intersection Observer for about section
  const aboutSection = document.querySelector('.image-section');
  if (aboutSection) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelector('.overlay-text').classList.add('active', 'animate'); 
        } else {
          entry.target.querySelector('.overlay-text').classList.remove('active', 'animate'); 
        }
      });
    }, {
      threshold: 0.5 
    });

    observer.observe(aboutSection);
  }
});
