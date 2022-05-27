"use strict";
function setKontaktTriggers() {
    let notFirstRound = false;
    const trigger1 = document.getElementById('KontaktContainer');
    const trigger2 = document.querySelector('#HamburgerMenu > a[destination=kontakt]');
    const elementList = document.querySelectorAll('.kontaktOpener');
    const kontaktSection = document.getElementById('KontaktSection');
    const hamburger = document.getElementById('Hamburger');
    function cbf() {
        elementList.forEach(e => {
            e.classList.toggle('kontaktOpen');
            if (notFirstRound)
                e.classList.toggle('kontaktClosed');
        });
        notFirstRound = true;
    }
    function cbf_open() {
        if (kontaktSection.classList.contains('kontaktOpen')) {
            hamburger.click();
        }
        else {
            console.log('Test');
            elementList.forEach(e => {
                e.classList.toggle('kontaktOpen');
                if (notFirstRound)
                    e.classList.toggle('kontaktClosed');
            });
            notFirstRound = true;
        }
    }
    trigger1.addEventListener('click', cbf);
    trigger2.addEventListener('click', cbf_open);
}
function hamburgerDisappear() {
    const hamburger = document.getElementById('HamburgerContainer');
    const home = document.querySelector('#HamburgerMenu > a[destination=home]');
    const datenschtz = document.querySelector('#HamburgerMenu > a[destination=datenschutz]');
    const impressum = document.querySelector('#HamburgerMenu > a[destination=impressum]');
    const kontaktButton = document.getElementById('KontaktContainer');
    home.addEventListener('click', () => kontaktButton.click());
    datenschtz.addEventListener('click', () => window.location.href = './Datenschutz/index.html');
    impressum.addEventListener('click', () => window.location.href = './Impressum/index.html');
    hamburger.addEventListener('click', () => { hamburger.classList.toggle('open'); });
}
function main() {
    setKontaktTriggers();
    hamburgerDisappear();
}
main();
