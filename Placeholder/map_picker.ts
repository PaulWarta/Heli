function map_picker() {
  const smallMap = document.querySelector('.maps.small') as HTMLElement;
  const largeMap = document.querySelector('.maps.large') as HTMLElement;
  const tester = document.getElementById('MapSizeHelper') as HTMLElement;
  
  function adjustMap() {
    if (window.innerHeight < switch_value) {
      smallMap.style.display = "none";
      largeMap.style.display = "block";
    } else {
      smallMap.style.display = "block";
      largeMap.style.display = "none";
    }
  }

  let switch_value = parseInt(getComputedStyle(tester).height);
  adjustMap();

  window.addEventListener('resize', () => {
    switch_value = parseInt(getComputedStyle(tester).height);
    adjustMap();
  })
}


map_picker();


