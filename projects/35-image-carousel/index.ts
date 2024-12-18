const btnLeft = document.getElementById("left") as HTMLButtonElement;
const btnRight = document.getElementById("right") as HTMLButtonElement;
const imgContainer: HTMLDivElement | null = document.querySelector(".image-container");
const images: NodeListOf<HTMLImageElement> = document.querySelectorAll(".img");

const amountImages: number = images.length;
let idxCurrentImg: number = 0;

let interval = setInterval(run, 2000);
const resetInterval = (): void => {
    clearInterval(interval);
    interval = setInterval(run, 2000);
}

function run(): void {
    idxCurrentImg++;
    changeImage();
}

function changeImage(): void {
    if (idxCurrentImg > amountImages - 1) {
        idxCurrentImg = 0;
    } else if (idxCurrentImg < 0) {
        idxCurrentImg = amountImages - 1;
    }

    if (imgContainer) {
        imgContainer.style.transform = `translateX(${-500 * idxCurrentImg}px)`;
    }
}

btnRight.addEventListener('click', (): void => {
    idxCurrentImg++;
    changeImage();
    resetInterval();
});

btnLeft.addEventListener('click', (): void => {
    idxCurrentImg--;
    changeImage();
    resetInterval();
});
