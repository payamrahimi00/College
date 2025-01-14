// انتخاب عنصر نشانگر سفارشی
const customCursor = document.querySelector('.custom-cursor');

// حرکت نشانگر با حرکت ماوس
document.addEventListener('mousemove', (e) => {
  customCursor.style.left = `${e.clientX}px`;
  customCursor.style.top = `${e.clientY}px`;
});

// افکت کوچک و بزرگ شدن نشانگر هنگام کلیک
document.addEventListener('mousedown', () => {
  customCursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
});

document.addEventListener('mouseup', () => {
  customCursor.style.transform = 'translate(-50%, -50%) scale(1)';
});
