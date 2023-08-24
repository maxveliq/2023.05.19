red = document.getElementById('red');
blue = document.getElementById('blue');
green = document.getElementById('green');
yellow = document.getElementById('yellow');
texxt = document.getElementById('texxt');

function redfunc() {
    b = document.getElementById("body")
    b.className = 'bodyRed'
    texxt.innerHTML = 'Red'
}

red.addEventListener("click", redfunc)