const scrollContainer = document.querySelector("main");

// Desktop scrolling
scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollBy({
    left: evt.deltaY > 0 ? 50 : -50, // Scrolls smoothly in small increments
    behavior: "auto",
  });
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
    scrollContainer.scrollBy({
      left: deltaY * 1.5, // Adjust sensitivity
      behavior: "auto",
    });
  }
});
