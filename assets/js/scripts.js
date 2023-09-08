const fadeImage = document.getElementById('fadeImage');
const textContainer = document.getElementById('textContainer');

fadeImage.addEventListener('click', function () {
    // Fade out the image
    fadeImage.style.opacity = 0;

    // Fade in the text container
    textContainer.style.opacity = 1;
});