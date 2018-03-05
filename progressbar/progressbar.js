alert('hello')

// As the page loads, the bar should start depicting "loading Bar". 
//As it loads , use setInterval function to call the function that targets innerbar div.
//As the function is called, the bar would show progression

function move() {
    var elem = document.getElementById("innerbar"); 
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
        }
    }
}