var btnLeft = document.getElementById("left");
var btnRight = document.getElementById("right");
var imgContainer = document.querySelector(".image-container");
var images = document.querySelectorAll(".img");
var amountImages = images.length;
var idxCurrentImg = 0;
// let interval = setInterval(run, 2000);
// const resetInterval = (): void => {
//     clearInterval(interval);
//     interval = setInterval(run, 2000);
// }
// function run(): void {
//     idxCurrentImg++;
//     changeImage();
// }
function changeImage() {
    if (idxCurrentImg > amountImages - 1) {
        idxCurrentImg = 0;
        if (imgContainer) {
            imgContainer.style.transition = 'none';
            imgContainer.style.transform = "translateX(".concat(-500 * idxCurrentImg, "px)");
            setTimeout(function () {
                imgContainer.style.transition = 'transform 0.5s ease-in-out';
            }, 50);
        }
    }
    else if (idxCurrentImg < 0) {
        idxCurrentImg = amountImages - 1;
    }
    if (imgContainer) {
        imgContainer.style.transform = "translateX(".concat(-500 * idxCurrentImg, "px)");
    }
}
btnRight.addEventListener('click', function () {
    idxCurrentImg++;
    changeImage();
    // resetInterval();
});
btnLeft.addEventListener('click', function () {
    idxCurrentImg--;
    changeImage();
    // resetInterval();
});
