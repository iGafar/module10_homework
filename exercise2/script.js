const btn = document.querySelector('.button');

btn.onclick = function() {
  const width = window.screen.width;
  const height = window.screen.height;

  alert(`Размеры экрана: ${width} на ${height}`)
}