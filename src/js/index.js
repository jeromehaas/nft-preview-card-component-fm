import lottieWeb from 'lottie-web';

class Card {

	constructor() {
		this.name = 'nft-card';
		this.elements = {
			preview: {
				banner: document.querySelector('.card__preview .preview__banner'),
				eye: document.querySelector('.card__preview .preview__eye'),
			}
		};
		this.lotties = {
			eye: {
				container: document.querySelector('.card__preview .preview__eye'),
				element: null
			}
		};
		this.init();
	}

	init = () => {
		this.addEventListener();
		this.createEye();
	};

	createEye = () => {
		this.lotties.eye.element = lottieWeb.loadAnimation({
			container: this.lotties.eye.container,
			renderer: 'svg',
			loop: true,
			autoplay: true,
			path: '/assets/lotties/lottie-eye.json'
		});
		this.lotties.eye.element.setSpeed(0.5);
	};

	addEventListener = () => {
		this.elements.preview.banner.addEventListener('mouseenter', () => this.showBanner());
		this.elements.preview.banner.addEventListener('mouseleave', () => this.hideBanner());
	};

	showBanner = () => {
		this.elements.preview.banner.style.opacity = 0.5;
		this.elements.preview.eye.style.opacity = 1;
	};

	hideBanner = () => {
		this.elements.preview.banner.style.opacity = 0;
		this.elements.preview.eye.style.opacity = 0;
	};

}

new Card();