document.addEventListener('DOMContentLoaded', function() {
  // Get the modal
  const modal = document.getElementById('modal');

  // Get the preview image and enlarged image elements
  const previewImage = document.getElementById('preview-image');
  const enlargedImage = document.getElementById('enlarged-image');

  // When the user clicks on the preview image, open the modal
  previewImage.addEventListener('click', function() {
    modal.style.display = 'flex'; // Display the modal as flexbox
    modal.classList.add('modal-open'); // Add class to apply styles for open modal
    enlargedImage.src = this.src; // Set the source of the enlarged image

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
    modal.style.display = 'none'; // Close the modal
    modal.classList.remove('modal-open'); // Remove class for open modal
    enlargedImage.src = ''; // Reset the enlarged image src

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





