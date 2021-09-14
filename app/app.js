window.addEventListener("load", () => {
	//Grab components
	const navbar = document.querySelector(".navbar");

	const hamburger = document.querySelector(".hamburger");
	const sideNav = document.querySelector(".side-navbar");

	const searchBtn = document.querySelector(".mobile-search-btn");
	const searchBar = document.querySelector(".search");

	const fullscBtn = document.querySelector(".btn-fullscreen");

	//Slide side navbar
	hamburger.addEventListener("click", () => {
		console.log("click");
		hamburger.classList.toggle("open");
		sideNav.classList.toggle("open");
	});

	//Show search bar
	searchBtn.addEventListener("click", () => {
		searchBar.classList.toggle("open");
	});

	fullscBtn.addEventListener("click", () => {
		navbar.classList.toggle("hide");
	});
});
