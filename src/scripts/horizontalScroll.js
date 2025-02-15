const scrollContainer = document.querySelector("main");

// Desktop scrolling
scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});

// Touch-based scrolling
let startX, startY, scrollLeft;

// Capture touch start position
scrollContainer.addEventListener("touchstart", (evt) => {
  startX = evt.touches[0].pageX;
  startY = evt.touches[0].pageY;
  scrollLeft = scrollContainer.scrollLeft;
});

// Convert vertical movement to horizontal scroll
scrollContainer.addEventListener("touchmove", (evt) => {
  evt.preventDefault(); // Prevent vertical scrolling
  const x = evt.touches[0].pageX;
  const y = evt.touches[0].pageY;

  const deltaX = startX - x;
  const deltaY = startY - y;

  // Move horizontally, even if scrolling vertically
  if (Math.abs(deltaY) > Math.abs(deltaX)) {
    scrollContainer.scrollLeft = scrollLeft + deltaY;
  }
});
