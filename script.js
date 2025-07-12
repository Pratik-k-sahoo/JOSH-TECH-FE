var swiper = new Swiper(".mySwiper", {
	autoplay: {
		delay: 5000,
	},
	keyboard: {
		enabled: true,
		onlyInViewport: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
	