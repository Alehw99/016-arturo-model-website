var imgs = document.querySelectorAll("#gallery img");
var fs = document.getElementById('fs');
var fimg = document.getElementById('fimg');

FimgsInit();

function FimgsInit(){
	for(var i = 0; i < imgs.length; i++){
		imgs[i].addEventListener("click", Expand, true);
	}

	fimg.addEventListener("click", CloseFimg)

}

function Expand(e) {
	fs.style.display = 'flex';

	for(var i = 0; i < imgs.length; i++){
		if (e.currentTarget == imgs[i]) {
			console.log(String(imgs[i].src));
			fimg.src = imgs[i].src;
		}
	}
}

function CloseFimg() {
	fs.style.display = 'none';
}