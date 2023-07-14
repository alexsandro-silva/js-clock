var minutes = 0
var seconds = 0
var millis = 0;
var isOn = false;
var interval;

const display = document.getElementById('display');
const startButton = document.getElementById('start-stop');
const resetButton = document.getElementById('reset');

// functions
const formatDigits = (value) => {
    return value < 10 ? `0${value}` : value;
}

const start = () => {
    isOn = true;
    startButton.classList.remove('button-start');
    startButton.classList.add('button-stop');
    startButton.innerText = 'Parar';
    resetButton.disabled = isOn;
    
    interval = setInterval(() => {
        millis++;
        if (millis === 100) {
            millis = 0;
            seconds++;
        }
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        }
        display.innerHTML = `${formatDigits(minutes)}:${formatDigits(seconds)}.${formatDigits(millis)}`;
    }, 10);
};

const stop = () => {
    isOn = false;
    clearInterval(interval);
    startButton.classList.remove('button-stop');
    startButton.classList.add('button-start');
    startButton.innerText = 'Iniciar';
    resetButton.disabled = isOn;
};

// button events
startButton.addEventListener('click', () => {
    if (isOn) {
        stop();
        return;
    }

    start();
});

resetButton.addEventListener('click', () => {
    minutes = seconds = millis = 0;
    display.innerHTML = '00:00.00'
});