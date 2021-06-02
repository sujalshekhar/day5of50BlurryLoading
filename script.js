const text = document.querySelector('.text');

let counter = 0;

const set = setInterval(() => {
    counter++;
    text.innerHTML = `${counter}%`;
    if(counter==100) {
        clearInterval(set);
    }

    text.style.opacity = scale(counter,0,100,1,0);

    document.querySelector('.bg').style.filter = `blur(${scale(counter,0,100,30,0)}px)`;

},30);


function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}