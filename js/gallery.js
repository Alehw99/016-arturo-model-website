var gallery = document.getElementById('gallery');

ImgsRsz();

window.addEventListener("resize", ImgsRsz);

function ImgsRsz() {

	var s;

	gallery.style.height = "100%";
	gallery.style.width = "100%";

	if (gallery.offsetWidth > gallery.offsetHeight) {s = String(gallery.offsetHeight) + 'px';}
	else if (gallery.offsetWidth < gallery.offsetHeight) {s = String(gallery.offsetWidth) + 'px';}

	
	gallery.style.height = s;
	gallery.style.width = s;
}
