let currentImageIndex = 0 // Índice da imagem atual

function openImage(element) {
  const modal = document.getElementById('modal')
  const modalImage = document.getElementById('modal-image')
  const totalImages = document.getElementById('total-images')
  const galleryImages = document.querySelectorAll('.single-galeria img')
  const clickedImageIndex = Array.from(galleryImages).indexOf(element)

  currentImageIndex = clickedImageIndex
  modalImage.src = element.src
  modal.style.display = 'block'

  createModalNavButtons()

  totalImages.textContent = galleryImages.lengt
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

  currentImageIndex = (currentImageIndex - 1 + numImages) % numImages;
  modalImage.src = galleryImages[currentImageIndex].src
}

function createModalNavButtons() {
  const modal = document.getElementById('modal')

  const modalNav = document.createElement('div')
  modalNav.classList.add('modal-nav')
  modalNav.innerHTML = `
    <span class="modal-nav-btn prev">&lt;</span>
    <span class="modal-nav-btn next">&gt;</span>
  `
  modal.appendChild(modalNav)

  const prevButton = modalNav.querySelector('.prev')
  const nextButton = modalNav.querySelector('.next')
  prevButton.addEventListener('click', showPrevImage)
  nextButton.addEventListener('click', showNextImage)
}

function closeImage() {
  const modal = document.getElementById('modal')

  modal.style.display = 'none'
  removeModalNavButtons()
}


