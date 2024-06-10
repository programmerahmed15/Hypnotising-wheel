const wheel = document.getElementById('wheel');
const spinButton = document.getElementById('spinButton');
const stopButton = document.getElementById('stopButton');

let rotation = 0;
let spinning = false;
let animationFrameId;

function spin() {
    rotation += 30; // Increase this value to spin faster
    wheel.style.transform = `rotate(${rotation}deg)`;
    animationFrameId = requestAnimationFrame(spin);
}

spinButton.addEventListener('click', () => {
    if (!spinning) {
        spinning = true;
        spin();
    }
});

stopButton.addEventListener('click', () => {
    if (spinning) {
        spinning = false;
        cancelAnimationFrame(animationFrameId);
    }
});
