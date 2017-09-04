'use strict';

// Visible width and height
// var viewportWidth = window.innerWidth;
// var viewportHeight = window.innerHeight;

// ###################################################
// Modal #############################################
// ###################################################

// Modal structure
var modal = document.getElementById('modal');
var modalImg = document.getElementById('modal-img');
var modalPrev = document.getElementById('modal-prev');
var modalNext = document.getElementById('modal-next');

// Close function
modalImg.onclick = function() {
  modal.style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Single images
var zoomImgList = document.getElementsByClassName('zoom-img');
for (var i = 0; i < zoomImgList.length; i++) {
  zoomImgList[i].onclick = function(){
    modal.style.display = 'flex';
    modalImg.src = this.src;
  }
}

// Galleries
var currentGallery = undefined;
var currentImg = undefined;
var currentGalleryIndex = undefined;
var currentImgIndex = undefined;
var galleryList = document.getElementsByTagName('gallery');
for (var i = 0; i < galleryList.length; i++) {
  var gallery = galleryList[i];
  var galleryImages = gallery.getElementsByTagName('img');
  for (var j = 0; j < galleryImages.length; j++) {
    galleryImages[j].currentGallery = galleryList[i];
    galleryImages[j].currentGalleryIndex = i;
    galleryImages[j].currentImgIndex = j;
    galleryImages[j].onclick = function(){
      modal.style.display = 'flex';
      modalImg.src = this.src;
      currentImg = this;
      currentGallery = this.currentGallery;
      currentGalleryIndex = this.currentGalleryIndex;
      currentImgIndex = this.currentImgIndex;
    }
  }
}

// Scroll slides function
function scrollSlides(scroll) {
  var currentImgNumber = currentImgIndex + 1;
  var currentGalleryImages = currentGallery.getElementsByTagName('img')
  var currentGallerySize = currentGalleryImages.length;
  currentImgNumber += scroll;
  if (currentImgNumber < 1) {
    while (currentImgNumber < 1) {
      currentImgNumber += currentGallerySize;
    }
  } else if (currentImgNumber > currentGallerySize) {
    while (currentImgNumber > currentGallerySize) {
      currentImgNumber -= currentGallerySize;
    }
  }
  currentImgIndex = currentImgNumber - 1;
  currentImg = currentGallery.getElementsByTagName('img')[currentImgIndex];
  modalImg.src = currentImg.src;
}
modalPrev.onclick = function(){
  scrollSlides(-1);
}
modalNext.onclick = function(){
  scrollSlides(+1);
}
document.onkeydown = function(e) {
  if (modal.style.display != 'none') {
    switch (e.keyCode) {
      case 37:
        scrollSlides(-1);
        break;
      case 39:
        scrollSlides(+1);
        break;
    }
  }
};
// ###################################################
// Proof class #######################################
// ###################################################

var linkList = document.getElementsByTagName('a');
if(linkList) {
  for (var i = 0; i < linkList.length; i++) {
    if (linkList[i].innerHTML == '') {
      linkList[i].className += linkList[i].className ? ' proof' : 'proof';
    }
  }
}
