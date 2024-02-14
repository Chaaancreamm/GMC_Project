document.addEventListener('DOMContentLoaded', function() {
  // Get the modal
  const modal = document.getElementById('modal');

  // Get the preview image and enlarged image elements
  const previewImage = document.getElementById('preview-image');
  const enlargedImage = document.getElementById('enlarged-image');

  // When the user clicks on the preview image, open the modal
  previewImage.addEventListener('click', function() {
    modal.style.display = 'flex'; 
    modal.classList.add('modal-open'); 
    enlargedImage.src = this.src; 

    // Disable body scrolling
    document.body.style.overflow = 'hidden';
  });

  // When the user clicks on the close button or outside the modal, close the modal
  window.addEventListener('click', function(event) {
    if (event.target == modal || event.target.classList.contains('close')) {
      closeModal();
    }
  });

  // Close the modal when the user clicks on the close button
  const closeButton = document.querySelector('.close');
  closeButton.addEventListener('click', closeModal);

  // Get all small images
  const smallImages = document.querySelectorAll('.gallery-image');

  // Add click event listener to each small image
  smallImages.forEach(function(smallImage) {
    smallImage.addEventListener('click', function() {
      // Get the source of the clicked small image
      const src = this.getAttribute('src');

      // Update the preview image with the clicked image source
      previewImage.setAttribute('src', src);
    });
  });

  function closeModal() {
    modal.style.display = 'none'; 
    modal.classList.remove('modal-open'); 
    enlargedImage.src = '';

    // Enable body scrolling
    document.body.style.overflow = 'auto';
  }

  // When the Escape key is pressed, close the modal
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
});


const images = [
  "./assets/images/products/Sodium Cyanide.png",
  "./assets/images/products/cyanide_1.jpg",
  "./assets/images/products/cyanide_2.jpg",
  "./assets/images/products/cyanide_3.jpg"
];

let currentIndex = 0;
const smallImages = document.querySelectorAll('.gallery-image');
const container = document.querySelector('.img_small');
const imageWidth = smallImages[0].offsetWidth;
const numImages = smallImages.length;

function nextImage() {
  currentIndex = (currentIndex + 1) % numImages;
  scrollToImage(currentIndex, 'next');
}

function prevImage() {
  currentIndex = (currentIndex - 1 + numImages) % numImages;
  scrollToImage(currentIndex, 'prev');
}

function scrollToImage(index, direction) {
  const scrollAmount = index * imageWidth;

  container.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
}
