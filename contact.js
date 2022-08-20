const name = document.getElementById("contactName"),
email = document.getElementById("contactEmail"),
text = document.getElementById("contactTextArea");

const form = document.getElementById("contactInput");

const warn = document.getElementById("contactWarning");

let contador = 0;

var lastScrollTop = 0;

form.addEventListener("submit", e=>{
	let warning = ""
	let entrar = false
	let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
	warn.innerHTML = ""
	if (name.value.length < 3){
		openFulWarn()
		warning += `• El nombre no es válido.<br>`;
		entrar = true
	}
	if (!regexEmail.test(email.value)){
		openFulWarn()
		warning += `• El e-mail no es válido.<br>`;
		entrar = true
	}
	if (text.value.length < 50){
		openFulWarn()
		warning += `• El mensaje es muy corto.<br>`;
		entrar = true
	}
	if (entrar){
		e.preventDefault()
		openFulWarn()
		warn.innerHTML = warning
	}
	else {
		openFulWarn()
		warn.innerHTML = "¡Mensaje enviado!";
	}
})

function openFulWarn(){
	fulWarnBox.style.display = "flex"
	disableScroll();
}

function closeWarn(){
	fulWarnBox.style.display = "none";
	enableScroll();
}

function fulWarnClose(e){
	if (e.target !== this){
  		return;
  	}
  	else{
  		contador = 0;
		closeWarn();
	}
}

function disableScroll(){  
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
}

function enableScroll(){  
    window.onscroll = null;
}

// SCROLL BENCABEZADO

window.addEventListener("scroll", function(){
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st > lastScrollTop){
     header.classList.add("header");
   } else {
     header.classList.remove("header");
   }
   lastScrollTop = st;
}, false);

fulWarnBox.addEventListener("click",fulWarnClose);