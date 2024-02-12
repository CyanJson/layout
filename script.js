const collections = document.querySelectorAll(".collection");
const viewImg = document.querySelector(".view-img");
const pfp = document.querySelector(".pfp");

const sound = new Audio("/sounds/paper.mp3");

const img = [
    `url("/images/img2.jpg")`,
    `url("/images/img3.jpg")`,
    `url("/images/img4.jpg")`
]

for(let i = 0; i < img.length; i++){
    collections[i].style.background = img[i];
    collections[i].style.backgroundSize = "cover";
    collections[i].style.backgroundPosition = "center";

    collections[i].addEventListener('click', () => {
        sound.play();
        viewImg.style.display = "block";
        viewImg.style.background = img[i];
        viewImg.style.backgroundSize = "cover";
        viewImg.style.backgroundPosition = "center";
    });
}

viewImg.addEventListener('click', () => {
    viewImg.style.display = "none";
});

pfp.addEventListener('click', () => {
    sound.play();
    viewImg.style.display = "block";
    viewImg.style.background = `url("/images/img1.jpg")`;
    viewImg.style.backgroundSize = "cover";
    viewImg.style.backgroundPosition = "center";
});

