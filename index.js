// VARIABLES Y CONSTANTES

const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg"),
imgContainer = document.getElementById("imgContainer");

const header = document.getElementById("header");

const x = document.getElementById("x");

let contador = 0;



// IMAGEN MODAL

function openFulImg(reference){
	fulImgBox.style.display = "flex"
	fulImg.src = reference;
	x.style.display = "flex"
	disableScroll();
}

function fulImgZoom(){
	if (contador == 0){
		fulImg.classList.replace("img_original", "img_ampliada");
		fulImgBox.classList.replace("ful_img", "ful_img_ampliado");
		imgContainer.classList.replace("img_container", "img_container_ampliado");
		contador = 1;
	}
	else {
		fulImg.classList.replace("img_ampliada", "img_original");
		fulImgBox.classList.replace("ful_img_ampliado", "ful_img");
		imgContainer.classList.replace("img_container_ampliado", "img_container");
		contador = 0;
	}
}



// CERRAR IMAGEN MODAL

function fulImgClose(e){
	if (e.target !== this){
  		return;
  	}
  	else{
  		fulImg.classList.replace("img_ampliada", "img_original");
  		fulImgBox.classList.replace("ful_img_ampliado", "ful_img");
  		imgContainer.classList.replace("img_container_ampliado", "img_container");
  		contador = 0;
		closeImg();
	}
}

function closeImg(){
	fulImgBox.style.display = "none";
	x.style.display = "none"
	fulImg.classList.replace("img_ampliada", "img_original");
	fulImgBox.classList.replace("ful_img_ampliado", "ful_img");
	imgContainer.classList.replace("img_container_ampliado", "img_container");
	contador = 0;
	enableScroll();
}



// DESACTIVAR EL SCROLL DURANTE IMAGEN MODAL

function disableScroll(){
	document.getElementById("body").style.overflow = "hidden";
}

function enableScroll(){
    document.getElementById("body").style.removeProperty("overflow");
}



// SCROLL BENCABEZADO

var lastScrollTop = 0;

window.addEventListener("scroll", function(){
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st > lastScrollTop){
     header.classList.add("header");
   } else {
     header.classList.remove("header");
   }
   lastScrollTop = st;
}, false);



// EVENTOS

fulImg.addEventListener("click",fulImgZoom,true);

imgContainer.addEventListener("click",fulImgClose);

x.addEventListener("click",closeImg)