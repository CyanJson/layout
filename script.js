const collections = document.querySelectorAll(".collection");
const viewImg = document.querySelector(".view-img");
const pfp = document.querySelector(".pfp");

const img = [
    `url("img2.jpg")`,
    `url("img3.jpg")`,
    `url("img4.jpg")`
]

for(let i = 0; i < img.length; i++){
    collections[i].style.background = img[i];
    collections[i].style.backgroundSize = "cover";
    collections[i].style.backgroundPosition = "center";

    collections[i].addEventListener('click', () => {
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
    viewImg.style.display = "block";
    viewImg.style.background = `url("img1.jpg")`;
    viewImg.style.backgroundSize = "cover";
    viewImg.style.backgroundPosition = "center";
});

