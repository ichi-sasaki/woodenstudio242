const modalOpen = document.querySelector(".ham") //指定した要素を取得
const modalClose = document. querySelector(".close")
const modalNavMenu = document. querySelector("")

modalOpen.addEventListener("click", () => {
    // console.log("check click!");
    gsap.fromTo{
        ".modal",
        0.5,
        {
            opacity: 0
        },
        {
            opacity: 1,
            display: "block"
        }
    }
})

modalClose.addEventListener("click", () => {
    // console.log("check click!");
    gsap.fromTo{
        ".modal",
        0.5,
        {
            opacity: 1
        },
        {
            opacity: 0,
            display: "none"
        }
    }
})

modalNavMenu.addEventListener("click", () => {
    // console.log("check click!");
    gsap.fromTo{
        ".modal",
        0.5,
        {
            opacity: 1
        },
        {
            opacity: 0,
            display: "none"
        }
    }
})
