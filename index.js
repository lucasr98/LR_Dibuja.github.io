// VARIABLES Y CONSTANTES

const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg"),
imgContainer = document.getElementById("imgContainer");
const header = document.getElementById("header");
const x = document.getElementById("x");
const imagenes = document.querySelectorAll(".grid-item__item");
const modalButtons = document.querySelectorAll(".modal__buttons");

let contador = 0;

// IMAGEN MODAL

function openFulImg(reference){
	fulImgBox.style.display = "flex";
	fulImg.src = reference;
	x.style.display = "flex";
	modalButtons.forEach(button =>{
		button.style.display = "flex";
	})
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
		closeImg();
	}
}

function closeImg(){
	fulImgBox.style.display = "none";
	fulImg.classList.replace("img_ampliada", "img_original");
	fulImgBox.classList.replace("ful_img_ampliado", "ful_img");
	imgContainer.classList.replace("img_container_ampliado", "img_container");
	x.style.display = "none";
	modalButtons.forEach(button =>{
		button.style.display = "none";
	})
	contador = 0;
	enableScroll();
}



// DESACTIVAR EL SCROLL DURANTE IMAGEN MODAL

function disableScroll(){
	body.style.overflow = "hidden";
	imgContainer.style.overflowY = "scroll";
}

function enableScroll(){
    body.style.removeProperty("overflow");
    imgContainer.style.removeProperty("overflow-y");
}



// ANTERIOR Y SIGUIENTE IMÁGEN

function nextPrevControler(e){

	if(e.target.id == "arrowRight"){

		let sigImg;

		if(fulImg.src == imagenes[imagenes.length-1].src){
			sigImg = 0
		}
		else{
			for(let i = 0; i < imagenes.length; i++){
				if(fulImg.src == imagenes[i].src){
					sigImg = i + 1;
				}
			}
		}

		fulImg.src = imagenes[sigImg].src;

	}
	else if(e.target.id == "arrowLeft"){

		let prevImg;

		if(fulImg.src == imagenes[0].src){
			prevImg = imagenes.length - 1;
		}
		else{
			for(let i = 0; i < imagenes.length; i++){
				if(fulImg.src == imagenes[i].src){
					prevImg = i - 1;
				}
			}
		}

		fulImg.src = imagenes[prevImg].src;

	}

	if(fulImg.classList.contains("img_ampliada")){
		fulImg.classList.replace("img_ampliada", "img_original");
		fulImgBox.classList.replace("ful_img_ampliado", "ful_img");
		imgContainer.classList.replace("img_container_ampliado", "img_container");
		contador = 0
	}

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

x.addEventListener("click",closeImg);

modalButtons.forEach(button =>{
	button.addEventListener("click",nextPrevControler)
})

document.addEventListener("click", (e)=>{
	const imagen = e.target;
	if(imagen.className === "grid_item__mask"){
		return openFulImg(imagen.parentNode.childNodes[1].src);
	}
})



var elem = document.querySelector('.grid');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
	gutter: 18,
	fitWidth: true,
	horizontalOrder: true
});