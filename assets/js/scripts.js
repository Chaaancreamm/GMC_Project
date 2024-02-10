
document.querySelector('.menu-icons.open').addEventListener('click', function() {
    document.querySelector('.menu-icons.open').style.display = 'none';
    document.querySelector('.menu-icons.close').style.display = 'block';
  
  });
  
  document.querySelector('.menu-icons.close').addEventListener('click', function() {
    document.querySelector('.menu-icons.close').style.display = 'none';
    document.querySelector('.menu-icons.open').style.display = 'block';
  });
  

  let popup = document.getElementById("popup");

  function openPopup() {
    popup.classList.add("open-popup");
  }

  function closePopup() {
    popup.classList.remove("close-popup");
  }