const slider = document.querySelector('.slider');

slider.addEventListener('input', () => {
  const value = slider.value;
  slider.style.background = `linear-gradient(to right, #4CAF50 0%, #4CAF50 ${value}%, #ccc ${value}%, #ccc 100%)`;
});
