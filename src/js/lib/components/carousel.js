import $ from "../core";

$.prototype.carousel = function () {
	for (let i = 0; i < this.length; i++) {
		const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width.slice(0, -2);
		const slides = this[i].querySelectorAll('.carousel-item');
		const slidesField = this[i].querySelector('.carousel-slides');
		const dots = this[i].querySelectorAll('.carousel-indicators li');

		slidesField.style.width = 100 * slides.length + '%';
		slides.forEach(slide => {
			slide.style.width = width;
		});

		let offset = 0;
		let slideIndex = 0;

		$(this[i].querySelector('[data-slide="next"]')).click((e) => {
			e.preventDefault();
			if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
				offset = 0;
			} else {
				offset += +width.replace(/\D/g, '');
			}

			slidesField.style.transform = `translateX(-${offset}px)`;

			if (slideIndex == slides.length - 1) {
				slideIndex = 0;
			} else {
				slideIndex++;
			}

			dots.forEach(dot => dot.classList.remove('active'));
			dots[slideIndex].classList.add('active');
		});

		$(this[i].querySelector('[data-slide="prev"]')).click((e) => {
			e.preventDefault();
			if (offset == 0) {
				offset = +width.replace(/\D/g, '') * (slides.length - 1)
			} else {
				offset -= +width.replace(/\D/g, '');
			}

			slidesField.style.transform = `translateX(-${offset}px)`;

			if (slideIndex == 0) {
				slideIndex = slides.length - 1
			} else {
				slideIndex--;
			}

			dots.forEach(dot => dot.classList.remove('active'));
			dots[slideIndex].classList.add('active');
		});

		const sliderId = this[i].getAttribute('id');
		$(`#${sliderId} .carousel-indicators li`).click(e => {
			const slideTo = e.target.getAttribute('data-slide-to');

			slideIndex = slideTo;
			offset = +width.replace(/\D/g, '') * slideTo

			slidesField.style.transform = `translateX(-${offset}px)`;
			dots.forEach(dot => dot.classList.remove('active'));
			dots[slideIndex].classList.add('active');
		});
	}
};

//$('.carousel').carousel();


$.prototype.createCarousel = function (images = []) {
	for (let i = 0; i < this.length; i++) {
		this[i].innerHTML = `
		<ol class="carousel-indicators">
		</ol>
		<div class="carousel-inner">
			<div class="carousel-slides">
			</div>
		</div>
		<a href="#" class="carousel-prev" data-slide="prev">
				<span class="carousel-prev-icon">&lt;</span>
			</a>
			<a href="#" class="carousel-next" data-slide="next">
				<span class="carousel-next-icon">&gt;</span>
			</a>
		`;

		const dots = [],
			slides = [];

		images.forEach((image, k) => {
			const dot = document.createElement('li'),
				img = document.createElement('img'),
				item = document.createElement('div');

			item.classList.add('carousel-item');
			dot.setAttribute('data-slide-to', k);
			img.setAttribute('src', image.url);
			img.setAttribute('alt', image.alt);
			item.append(img);
			dots.push(dot);
			slides.push(item);
		});

		const carouselIndicators = this[i].querySelector('.carousel-indicators');
		carouselIndicators.append(...dots);
		const carouselSlides = this[i].querySelector('.carousel-slides');
		carouselSlides.append(...slides);

		$(this[i]).carousel();
	}
};