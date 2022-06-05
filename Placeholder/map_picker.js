"use strict";
function map_picker() {
    const smallMap = document.querySelector('.maps.small');
    const largeMap = document.querySelector('.maps.large');
    const tester = document.getElementById('MapSizeHelper');
    const textContainer = document.querySelector('main > h1');
    const header = document.querySelector('header');
    function adjustMap() {
        let switch_value = calcSwitchValue();
        if (window.innerHeight < switch_value) {
            smallMap.style.display = "none";
            largeMap.style.display = "block";
        }
        else {
            smallMap.style.display = "block";
            largeMap.style.display = "none";
        }
        setTimeout(() => {
            window.addEventListener('resize', () => {
                adjustMap();
            }, { once: true });
        }, 20);
    }
    function calcSwitchValue() {
        return textContainer.offsetHeight + parseInt(getComputedStyle(textContainer).marginTop) + header.offsetHeight + 0.86 * window.innerWidth;
    }
    adjustMap();
    window.addEventListener('resize', adjustMap, { once: true });
}
map_picker();
