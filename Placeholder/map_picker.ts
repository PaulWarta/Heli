function map_picker() {
  const smallMap = document.querySelector('.maps.small') as HTMLElement;
  const largeMap = document.querySelector('.maps.large') as HTMLElement;
  const tester = document.getElementById('MapSizeHelper') as HTMLElement;
  const textContainer = document.querySelector('main > h1') as HTMLElement;
  const header = document.querySelector('header') as HTMLElement;
  
  function adjustMap() {
    let switch_value = calcSwitchValue();
    if (window.innerHeight < switch_value) {
      smallMap.style.display = "none";
      largeMap.style.display = "block";
    } else {
      smallMap.style.display = "block";
      largeMap.style.display = "none";
    }
    setTimeout(() => {
      window.addEventListener('resize', () => {
        adjustMap();
      }, { once: true })
    }, 20);
  }
  
  function calcSwitchValue(): number {
    return textContainer.offsetHeight + parseInt(getComputedStyle(textContainer).marginTop) + header.offsetHeight + 0.86 * window.innerWidth;
  }
  adjustMap();
  window.addEventListener('resize', adjustMap, { once: true })
}


map_picker();


