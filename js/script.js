
document.querySelector(".toggle").addEventListener('click', function () {
	document.querySelector("nav").classList.toggle("save");
	document.querySelector("#brand").classList.toggle("white");
	document.querySelector(".toggle").classList.toggle("white");
})

let numOfCampus = document.querySelectorAll(".image").length;
for (let i = 0; i < numOfCampus; i++) {
	document.querySelectorAll(".image")[i].addEventListener('click', function () {
		document.querySelectorAll(".hv")[i].classList.toggle("app");
	});

	document.querySelectorAll(".image")[i].addEventListener('mouseenter', function () {
		document.querySelectorAll(".hv")[i].classList.add("app");
	});

	document.querySelectorAll(".image")[i].addEventListener('mouseleave', function () {
		document.querySelectorAll(".hv")[i].classList.remove("app");
	});
	
}



