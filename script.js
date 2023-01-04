const volumeSlider = document.querySelector('#volume');
const whiteKeys = document.querySelectorAll('.keys-white');
const blackKeys = document.querySelectorAll('.keys-black');

const whiteKeysArray = Array.from(whiteKeys);
const blackKeysArray = Array.from(blackKeys);

//  for white keys
whiteKeysArray.forEach((element) => {
    const audio = new Audio(`tunes/${element.id}.wav`);
    element.addEventListener('click', () => {
        audio.volume = volumeSlider.value / 100;
        audio.play();
    })
})
 
// for black keys
blackKeysArray.forEach((element) => {
    const audio = new Audio(` tunes/${element.id}.wav `);
    element.addEventListener('click', () => {
        audio.volume = volumeSlider.value / 100;
        audio.play();
    })
})


document.addEventListener('keydown', (e) => {
    whiteKeysArray.forEach((element) => {
        if (element.id == e.key) {
            element.click();
            element.classList.add('active-white');

            setTimeout(() => {
                element.classList.remove('active-white');
            }, 150);
        }
    })

    blackKeysArray.forEach((element) => {
        if (element.id == e.key) {
            element.click();
            element.classList.add('active-black');

            setTimeout(() => {
                element.classList.remove('active-black');
            }, 150);

        }
    })
})