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

const playPauseBtn = document.getElementById("play-pause");
const playback = document.getElementById("video-playback");

playPauseBtn.addEventListener("click", (e) => {
	playback.play();
	playPauseBtn.classList.add("hidden");
});

playback.addEventListener("click", () => {
	if (playPauseBtn.classList.contains("hidden")) {
		playback.pause();
		playPauseBtn.classList.remove("hidden");
	} else {
		playback.play();
		playPauseBtn.classList.add("hidden");
	}
});

const observer = new IntersectionObserver(
	([e]) => {
		if (e.isIntersecting) {
			// playback.play();
		} else {
			playPauseBtn.classList.remove("hidden");
			playback.pause();
		}
	},
	{ threshold: 0.5 }
);

observer.observe(playback);

document.addEventListener("visibilitychange", () => {
	if (document["hidden"]) {
		playPauseBtn.classList.remove("hidden");
		playback.pause();
	}
});

let pricingItems = document.getElementsByClassName("pricing-item");
const holderBtn = document.querySelectorAll(".pricing-btn-holder button");
[...pricingItems].forEach((item) => {
	item.addEventListener("click", () => {
		const btn = item.querySelector(".pricing-btn-holder button");
		[...holderBtn].forEach((b) => {
			b.classList.remove("btn-secondary");
			b.classList.add("btn-primary");
		});
		[...pricingItems].forEach((pricingItem) =>
			pricingItem.classList.remove("pricing-item-active")
		);
		item.classList.add("pricing-item-active");
		btn.classList.remove("btn-primary");
		btn.classList.add("btn-secondary");
	});
});

const modalBtn = document.getElementById("modal-btn");
const contactForm = document.getElementById("contact-form-id");
const confirmationModal = document.getElementById("confirmation-modal");
modalBtn.addEventListener("click", () => {
	confirmationModal.classList.add("hidden");
	document.body.style.overflow = "auto";
	contactForm.reset();
});

const handleFormSubmit = (e) => {
	e.preventDefault();
	const email = document
		.getElementsByTagName("input")
		["contact-email"].value.trim();
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		alert("Invalid email");
		return false;
	}
	confirmationModal.classList.remove("hidden");
	document.body.style.overflow = "hidden";
};
