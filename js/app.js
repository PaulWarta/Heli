"use strict";
function main() {
    // horizontalerSchieber(document.getElementById('KartenBereich') as HTMLElement);
    // svgScaler();
    // textHeroAnimation();
    scrollHandler();
}
function scrollHandler() {
    let scrollPos = 0;
    let timer;
    let scrollHeight = 0;
    let path = svgScaler(true);
    const heli = document.getElementById('Heli');
    heli.setAttribute('style', `offset-path: path("${path}");`);
    window.addEventListener('wheel', handler);
    function handler(e) {
        scrollHeight += e.deltaY;
        if (scrollHeight > 180) {
            scroll(1);
            stopListener();
        }
        else if (scrollHeight < -180) {
            scroll(-1);
            stopListener();
        }
        function stopListener() {
            scrollHeight = 0;
            window.removeEventListener('wheel', handler);
            setTimeout(() => {
                window.addEventListener('wheel', handler);
            }, 700);
        }
    }
    function scroll(direction) {
        scrollPos += direction;
        const karte = document.getElementById('KartenBereich');
        let kartenRatio = Math.round(karte.getBoundingClientRect().width / window.innerWidth);
        const textBlock = document.querySelectorAll('#TextBereichHero span');
        switch (scrollPos) {
            case 0:
            case 1:
            case 2:
            case 3:
                karte.style.transform = `translateX(-${((kartenRatio - 1) * 100 * scrollPos) / (kartenRatio * 3)}%)`;
                heli.setAttribute('style', `offset-path: path("${path}"); offset-distance: ${((scrollPos * 100) / 3) * 0.94 + 3}%;`);
                textBlock.forEach(e => e.style.transform = `translateY(-${scrollPos * 25}%)`);
                break;
            default:
                break;
        }
    }
}
function textHeroAnimation() {
}
function svgScaler(returnNewPath = false) {
    const originalWidth = 508;
    const originalHeight = 98;
    const kartenBereich = document.getElementById('KartenBereich');
    let skalar = window.innerWidth / originalWidth;
    let scale = Math.round(((kartenBereich.getBoundingClientRect().width) / window.innerWidth));
    document.getElementById('Heli').style.transform = `translateX(-8px) scale(${scale * 100}%)`;
    let path = "M 2,2 c 0,0 26.486302,0.31484 58.434286,26.72423 16.2449975,13.42872 6.3148917,22.91238 0.287729,22.76229 -4.687215,-0.11672 -9.346084,-2.99962 -9.015463,-11.2268 0.416315,-10.35963 20.9660819,-18.71318 34.530927,-19.73196 16.532452,-1.24166 100.500482,14.92307 102.061852,29.93814 1.26416,12.15691 -37.455971,14.74401 -38.103091,2.04124 -0.750595,-14.73396 55.941501,-21.08976 87.773201,-18.71134 55.71432,4.16289 62.84478,43.2067 77.2268,40.48454 17.53249,-3.31847 35.31836,-15.70384 55.11341,-12.58764 17.96607,2.82827 39.2406,41.40375 63.95876,37.76289 47.8739,-7.05158 34.83219,-81.89181 58.17526,-83.01031 7.80605,-0.37403 7.92284,8.60521 7.92284,8.60521 l 9.63348,-23.0505";
    let newPath = path.replace(/[0-9.]+/g, (match) => { return '' + parseFloat(match) * skalar * (scale - 0.02); });
    if (returnNewPath)
        return newPath;
    // // Der kommentierte Code zeichnet den MotionPath
    // let newElement = document.createElement('div');
    // newElement.setAttribute('id', 'TestPfad');
    // newElement.innerHTML = `<svg width="100%" height="100%"><path stroke="#000" stroke-width="2" d="${newPath}"></path></svg>`;
    // kartenBereich.appendChild(newElement);
    window.addEventListener('resize', function handler() {
        // kartenBereich.removeChild(newElement);
        window.removeEventListener('resize', handler);
        setTimeout(() => {
            return svgScaler();
        }, 100);
    });
    document.getElementById('Heli').setAttribute('style', `offset-path: path("${newPath}")`);
}
main();
