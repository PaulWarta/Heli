"use strict";
function map_picker() {
    const smallMap = document.querySelector('.maps.small');
    const largeMap = document.querySelector('.maps.large');
    const tester = document.getElementById('Tester');
    function adjustMap() {
        if (window.innerHeight < switch_value) {
            smallMap.style.display = "none";
            largeMap.style.display = "block";
        }
        else {
            smallMap.style.display = "block";
            largeMap.style.display = "none";
        }
    }
    let switch_value = parseInt(getComputedStyle(tester).height);
    adjustMap();
    window.addEventListener('resize', () => {
        switch_value = parseInt(getComputedStyle(tester).height);
        adjustMap();
    });
}
map_picker();
