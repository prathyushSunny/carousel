
let slides = document.querySelectorAll(".carousel-parent");

let imgWidth = 0;

function slider() {

    console.log("hi")

    if(imgWidth >= 0) {
        imgWidth += 100;
    }

    slides.forEach((item , index) => {
        item.style.transform = `translateX(${-imgWidth}%)`;
    })

}


let corousel = setInterval(slider,3000);