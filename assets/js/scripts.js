// Get the menu icon and navigation list elements
const menuIcon = document.querySelector('.menu-icons');
const navList = document.getElementById('navList');

// Add event listener to the menu icon for toggling navigation list visibility
menuIcon.addEventListener('click', function() {
  navList.classList.toggle('show');
});




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

