"use strict";
function main() {
    let kontakt = "closed";
    let hamburgerMenu = "closed";
    const kontaktTargets = document.querySelectorAll(".kontaktOpener");
    const hamburgerTargets = document.querySelectorAll("#HamburgerContainer");
    let notFirstTime = false;
    function setKontakt(newState) {
        kontakt = newState;
        kontaktTargets.forEach((e)=>{
            if (newState == "open") {
                if (notFirstTime) e.classList.remove("kontaktClosed");
                e.classList.add("kontaktOpen");
                notFirstTime = true;
            } else {
                if (notFirstTime) e.classList.add("kontaktClosed");
                e.classList.remove("kontaktOpen");
            }
        });
    }
    function setHamburgerMenu(newState) {
        hamburgerMenu = newState;
        hamburgerTargets.forEach((e)=>{
            if (newState == "open") e.classList.add("open");
            else e.classList.remove("open");
        });
    }
    const kontaktButton = document.getElementById("KontaktContainer");
    const hamburgerButton = document.getElementById("HamburgerContainer");
    const homeButton = document.querySelector("#HamburgerMenu > a[destination=home]");
    const menuKontaktButton = document.querySelector("#HamburgerMenu > a[destination=kontakt]");
    const datenschutzButton = document.querySelector("#HamburgerMenu > a[destination=datenschutz]");
    const impressumButton = document.querySelector("#HamburgerMenu > a[destination=impressum]");
    kontaktButton.addEventListener("click", ()=>{
        if (kontakt == "closed") setKontakt("open");
        else setKontakt("closed");
        setHamburgerMenu("closed");
    });
    hamburgerButton.addEventListener("click", ()=>{
        if (hamburgerMenu == "open") setHamburgerMenu("closed");
        else setHamburgerMenu("open");
    });
    homeButton.addEventListener("click", ()=>{
        setKontakt("closed");
    });
    menuKontaktButton.addEventListener("click", ()=>{
        setKontakt("open");
    });
    datenschutzButton.addEventListener("click", ()=>{
        window.location.href = "/Datenschutz";
    });
    impressumButton.addEventListener("click", ()=>{
        window.location.href = "/Impressum";
    });
}
main();

//# sourceMappingURL=index.43309174.js.map
