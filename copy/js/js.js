"use strict";

// Visible width and height
// var viewportWidth = window.innerWidth;
// var viewportHeight = window.innerHeight;

// ###################################################
// Modal image #######################################
// ###################################################
var modal = document.getElementById('modal');
var modalImg = document.getElementById("modal-img");

modal.onclick = function() {
  modal.style.display = "none";
}

// Modal images initialisation
var zoomImgList = document.getElementsByClassName("zoom-img");
var i;
for (i = 0; i < zoomImgList.length; i++) {
  zoomImgList[i].onclick = function(){
    modal.style.display = "flex";
    modalImg.src = this.src;
  }
}
// ###################################################
// ###################################################
// ###################################################
