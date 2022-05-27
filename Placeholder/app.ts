function setKontaktTriggers() {
	let notFirstRound = false;
	const trigger1 = document.getElementById('KontaktContainer') as HTMLElement;
	const trigger2 = document.querySelector('#HamburgerMenu > a[destination=kontakt]') as HTMLElement;
	const elementList = document.querySelectorAll('.kontaktOpener') as NodeListOf<HTMLElement>;
	const kontaktSection = document.getElementById('KontaktSection') as HTMLElement;
	const hamburger = document.getElementById('Hamburger') as HTMLElement;

	function cbf() {
		elementList.forEach(e => {
			e.classList.toggle('kontaktOpen');
			if (notFirstRound) e.classList.toggle('kontaktClosed');
		});
		notFirstRound = true;
	}
	function cbf_open() {
		if (kontaktSection.classList.contains('kontaktOpen')) {
			hamburger.click();
		} else {
			console.log('Test');
			elementList.forEach(e => {
				e.classList.toggle('kontaktOpen');
				if (notFirstRound) e.classList.toggle('kontaktClosed');
			});
			notFirstRound = true;
		}
	}
	trigger1.addEventListener('click', cbf);
	trigger2.addEventListener('click', cbf_open);
}

function hamburgerDisappear() {
	const hamburger = document.getElementById('HamburgerContainer') as HTMLElement;
	const home = document.querySelector('#HamburgerMenu > a[destination=home]') as HTMLElement;
	const datenschtz = document.querySelector('#HamburgerMenu > a[destination=datenschutz]') as HTMLElement;
	const impressum = document.querySelector('#HamburgerMenu > a[destination=impressum]') as HTMLElement;
	const kontaktButton = document.getElementById('KontaktContainer') as HTMLElement;

	home.addEventListener('click', () => kontaktButton.click());
	datenschtz.addEventListener('click', () => window.location.href = './Impressum/index.html');
	impressum.addEventListener('click', () => window.location.href = './Datenschutz/index.html');
	hamburger.addEventListener('click', () => {hamburger.classList.toggle('open');});
}

function main() {
	setKontaktTriggers();
	hamburgerDisappear();
}

main()