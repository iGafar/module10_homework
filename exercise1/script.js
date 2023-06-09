const btn = document.querySelector('.button');
const svgFirst = document.querySelector('.svg-first')
const svgSecond = document.querySelector('.svg-second');

btn.addEventListener('click', function(){
  if (svgFirst.style.display == 'none'){
    svgFirst.style.display = 'block';
    svgSecond.style.display = 'none';
  } else {
    svgFirst.style.display = 'none';
    svgSecond.style.display = 'block';
  }
});