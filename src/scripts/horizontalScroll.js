const scrollContainer = document.querySelector("main");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
});

// Touch-based scrolling
let isDown = false;
let startX;
let scrollLeft;

scrollContainer.addEventListener("touchstart", (evt) => {
  isDown = true;
  startX = evt.touches[0].pageX - scrollContainer.offsetLeft;
  scrollLeft = scrollContainer.scrollLeft;
});

scrollContainer.addEventListener("touchmove", (evt) => {
  if (!isDown) return;
  evt.preventDefault(); // Prevent vertical scrolling
  const x = evt.touches[0].pageX - scrollContainer.offsetLeft;
  const walk = (startX - x) * 1.5; // Adjust sensitivity if needed
  scrollContainer.scrollLeft = scrollLeft + walk;
});

scrollContainer.addEventListener("touchend", () => {
  isDown = false;
});
