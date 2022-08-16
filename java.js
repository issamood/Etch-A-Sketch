//global selectors
const pixelScreen = document.querySelector('.pixelScreen');
const resetBtn = document.querySelector('.resetBtn');
const sizeBtn = document.querySelector('.sizeBtn')

//Create default canvas
let pixelAmount = 32;
setCanvasSize(pixelAmount);
createCanvas(pixelAmount);

//Set screen size
function setCanvasSize(canvasSize){
    const screenSize = document.querySelector('.pixelScreen');
    screenSize.style.maxWidth = ((10*canvasSize) + "px");
    screenSize.style.maxHeight = ((10*canvasSize) + "px");
}

//Creates canvas based on how much pixels is inputted
function createCanvas(canvasSize){
    for (let i = 0; i < canvasSize*canvasSize; i++){
        const pixel = document.createElement('div');
        pixel.setAttribute('id',i.toString());
        pixel.classList.add('pixel');
    
        //Applies border radius to corner pixels
        if (i === 0){
            pixel.classList.add('topLeftPixel')
        }
        else if (i === canvasSize - 1){
            pixel.classList.add('topRightPixel')
        }
        else if (i === ((canvasSize * (canvasSize-1)))){
            pixel.classList.add('botLeftPixel')
        }
        else if (i === (canvasSize * canvasSize)-1){
            pixel.classList.add('botRightPixel')
        }

        pixel.addEventListener('mouseover', function(e){
            pixel.classList.add('hover')
        })
        //Send to screen!
        pixelScreen.appendChild(pixel)
    }
}

//When user overs mouse over a pixel div, adds a hover class which changes bg-color to black

//Reset Button Functionality
resetBtn.addEventListener('click', function(e){
    const pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => {
        pixel.classList.remove('hover');
    })
});

//Canvas Size Button Functionality
//delete grid
sizeBtn.addEventListener('click', function(e){
    const pixels = document.querySelectorAll('.pixel');
    let badInput = true;
    while(badInput){
        pixelAmount = prompt('Please enter a number for canvas width and height (max: 100x100): ')
        if (pixelAmount > 100){
            alert('Please enter a size less than 100');
        }
        else if (pixelAmount > 0 && pixelAmount <= 100){
            badInput = false;
        }
        else{
            alert('Input error, try again')
        }
    }
    pixels.forEach(pixel => {
        pixel.remove();
    })
    setCanvasSize(pixelAmount);
    createCanvas(pixelAmount);
})
//prompt user for new size
//create new grid