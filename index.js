const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg"),
imgContainer = document.getElementById("imgContainer");

let contador = 0;

function openFulImg(reference){
	fulImgBox.style.display = "flex"
	fulImg.src = reference;
	disableScroll();
}

function closeImg(){
	fulImgBox.style.display = "none";
	fulImg.classList.replace("img_ampliada", "img_original");
	fulImgBox.classList.replace("ful_img_ampliado", "ful_img");
	imgContainer.classList.replace("img_container_ampliado", "img_container");
	contador = 0;
	enableScroll();
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

fulImg.addEventListener("click",fulImgZoom,true);

imgContainer.addEventListener("click",fulImgClose);

function disableScroll(){  
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
}

function enableScroll(){  
    window.onscroll = null;
}