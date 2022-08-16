//Create 16x16 grid of square divs
const pixelScreen = document.querySelector('.pixelScreen');

let pixelAmount = 16;


//Set screen size
pixelScreen.style.width = ((50*pixelAmount) + "px")
pixelScreen.style.Height = ((50*pixelAmount) + "px")
pixelScreen.style.maxWidth = ((50*pixelAmount) + "px")
pixelScreen.style.maxHeight = ((50*pixelAmount) + "px")

//Creates pixels
for (let i = 0; i < pixelAmount*pixelAmount; i++){
    const pixel = document.createElement('div');
    pixel.setAttribute('id',i.toString());
    pixel.classList.add('pixel');

    //Applies border radius to corner pixels
    if (i === 0){
        pixel.classList.add('topLeftPixel')
    }
    else if (i === pixelAmount - 1){
        pixel.classList.add('topRightPixel')
    }
    else if (i === ((pixelAmount * (pixelAmount-1)))){
        pixel.classList.add('botLeftPixel')
    }
    else if (i === (pixelAmount * pixelAmount)-1){
        pixel.classList.add('botRightPixel')
    }

    //When user overs mouse over a pixel div, adds a hover class which changes bg-color to black
    pixel.addEventListener('mouseover', function(e){
        pixel.classList.add('hover')
    })

    //Send to screen!
    pixelScreen.appendChild(pixel)
}

//Reset Button Functionality
const resetBtn = document.querySelector('.resetBtn');
const pixels = document.querySelectorAll('.pixel');

resetBtn.addEventListener('click', function(e){
    pixels.forEach(pixel => {
        pixel.classList.remove('hover');
    })
});