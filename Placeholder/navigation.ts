type State = 'open' | 'closed'

function main() {
	let kontakt: State = 'closed';
	let hamburgerMenu: State = 'closed';

	const kontaktTargets = document.querySelectorAll('.kontaktOpener') as NodeListOf<HTMLElement>;
	const hamburgerTargets = document.querySelectorAll('#HamburgerContainer') as NodeListOf<HTMLElement>;
	let notFirstTime = false;

	function setKontakt(newState: State) {
		kontakt = newState;
		kontaktTargets.forEach(e => {
			if (newState == 'open') {
				if (notFirstTime) e.classList.remove('kontaktClosed');
				e.classList.add('kontaktOpen');
				notFirstTime = true;
			} else {
				if (notFirstTime) e.classList.add('kontaktClosed');
				e.classList.remove('kontaktOpen');
			}
		});
	}

	function setHamburgerMenu(newState: State) {
		hamburgerMenu = newState;
		hamburgerTargets.forEach(e => {
			if (newState == 'open') {
				e.classList.add('open');
			} else {
				e.classList.remove('open');
			}
		});
	}

	const kontaktButton = document.getElementById('KontaktContainer') as HTMLElement;
	const hamburgerButton = document.getElementById('HamburgerContainer') as HTMLElement;
	const homeButton = document.querySelector('#HamburgerMenu > a[destination=home]') as HTMLElement;
	const menuKontaktButton = document.querySelector('#HamburgerMenu > a[destination=kontakt]') as HTMLElement;
	const datenschutzButton = document.querySelector('#HamburgerMenu > a[destination=datenschutz]') as HTMLElement;
	const impressumButton = document.querySelector('#HamburgerMenu > a[destination=impressum]') as HTMLElement;

	kontaktButton.addEventListener('click', () => {
		if (kontakt == 'closed') {
			setKontakt('open')
		}
		else {
			setKontakt('closed')
		}
		setHamburgerMenu('closed')
	});
	hamburgerButton.addEventListener('click', () => {
		if (hamburgerMenu == 'open') {
			setHamburgerMenu('closed');
		} else {
			setHamburgerMenu('open');
		}
	})
	homeButton.addEventListener('click', () => {
		setKontakt('closed');
	})
	menuKontaktButton.addEventListener('click', () => {
		setKontakt('open');
	});
	datenschutzButton.addEventListener('click', () => {
		window.location.href = '/Datenschutz';
	});
	impressumButton.addEventListener('click', () => {
		window.location.href = '/Impressum';
	});
}

main()