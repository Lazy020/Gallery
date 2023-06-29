let currentImageIndex = 0; // Índice da imagem atual

function openImage(element) {
  const modal = document.getElementById('modal')
  const modalImage = document.getElementById('modal-image')
  const totalImages = document.getElementById('total-images')

  const galleryImages = document.querySelectorAll('.single-galeria img')
  const clickedImageIndex = Array.from(galleryImages).indexOf(element)
  
  currentImageIndex = clickedImageIndex
  modalImage.src = element.src
  modal.style.display = 'block'
  
  modal.addEventListener('click', showNextImage)
  createModalNavButtons()
  
  totalImages.textContent = galleryImages.length
}

function showNextImage() {
  const modalImage = document.getElementById('modal-image')
  const galleryImages = document.querySelectorAll('.single-galeria img')
  const numImages = galleryImages.length
  
  currentImageIndex = (currentImageIndex + 1) % numImages
  modalImage.src = galleryImages[currentImageIndex].src
}

function showPrevImage() {
  const modalImage = document.getElementById('modal-image')
  const galleryImages = document.querySelectorAll('.single-galeria img')
  const numImages = galleryImages.length
  
  currentImageIndex = (currentImageIndex - 1 + numImages) % numImages
  modalImage.src = galleryImages[currentImageIndex].src
}

function createModalNavButtons() {
  const modal = document.getElementById('modal')
  
  const modalNav = document.createElement('div')
  modalNav.classList.add('modal-nav')
  modalNav.innerHTML = `
    <span class="modal-nav-btn prev" onclick="showPrevImage()">&lt;</span>
    <span class="modal-nav-btn next" onclick="showNextImage()">&gt;</span>
  `;
  modal.appendChild(modalNav)
}

function closeImage() {
  const modal = document.getElementById('modal')
  
  modal.style.display = 'none'
  modal.removeEventListener('click', showNextImage)
  removeModalNavButtons()
}

function removeModalNavButtons() {
  const modal = document.getElementById('modal')
  const modalNav = document.querySelector('.modal-nav')
  
  if (modalNav) {
    modal.removeChild(modalNav);
  }
}
