const colors = [
  "#FF8B59",
  "#E7408E",
  "#A993DE",
  "#76C2ED",
  "#63F172",
  "#EC5151",
  "#E8EB4B"
];

const randomColor = colors[Math.floor(Math.random() * colors.length)];

document.documentElement.style.setProperty('--brand-color', randomColor);