var rotateDiv = document.getElementById('rot');
var rotateIcons = document.getElementById('rot-icons');
var clickRotateDiv = document.getElementById('click-rot');

var angle = 0;
let currentIndex1 = 0;
let currentIndex2 = 0;

const links_1 = document.querySelectorAll('.frame-text-1 .link');
const totalLinks_1 = links_1.length;

const links_2 = document.querySelectorAll('.frame-text-2 .link');
const totalLinks_2 = links_2.length;

clickRotateDiv.onclick = function() {
  angle += 60;
  rotateDiv.style.transform = 'rotate(' + angle + 'deg)';
  clickRotateDiv.style.transform = 'rotate(' + angle + 'deg)';

  links_1.forEach(link => link.classList.remove('active', 'exit'));
  links_1[currentIndex1].classList.add('exit');
  currentIndex1 = (currentIndex1 + 1) % totalLinks_1;
  links_1[currentIndex1].classList.add('active');

  links_2.forEach(link => link.classList.remove('active', 'exit'));
  links_2[currentIndex2].classList.add('exit');
  currentIndex2 = (currentIndex2 + 1) % totalLinks_2;
  links_2[currentIndex2].classList.add('active');

};

var step = 2;
var color1 = 'rgba(0,0,0,0.5)';
var color2 = 'rgba(0,0,0,0.1)';

var gradient = ' conic-gradient(';
for (var i = 0; i < 360; i += step) {
  var color = i % (2 * step) === 0 ? color1 : color2;
  gradient += color + ' ' + i + 'deg, ';
}
gradient = gradient.slice(0, -2) + '), rgb(85 93 108)'; 

rotateDiv.style.background = gradient;
