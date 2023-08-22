const container = document.getElementById("container");
const starArr = document.querySelectorAll(".star");

var fill = 0

container.addEventListener("click", (e) => {
    let clickStar = e.target.dataset.index;

    for (let i = 0; i < fill; i++) {
        starArr[i].classList.remove("star-filled")
    }

    for (let i = 0; i < clickStar; i++) {
        starArr[i].classList.add("star-filled")
    }

    fill = clickStar
    document.getElementById("count").innerHTML = `Rating Count: ${fill}`
})

container.addEventListener("mouseover", (e) => {
    let clickStar = e.target.dataset.index;

    for (let i = 0; i < 5; i++) {
        starArr[i].classList.remove("star-filled")
    }

    for (let i = 0; i < clickStar; i++) {
        starArr[i].classList.add("star-filled")
    }
})

container.addEventListener("mouseleave", (e) => {
    for (let i = 0; i < 5; i++) {
        starArr[i].classList.remove("star-filled")
    }

    for (let i = 0; i < fill; i++) {
        starArr[i].classList.add("star-filled")
    }
})