let clickCount = 0
const title = <HTMLDivElement>document.querySelector(".title")
const special = <HTMLDivElement>document.getElementById("special-difficulty")

title.onclick = () => {
    clickCount += 1
    setTimeout(() => {
        clickCount = 0
    }, 5000) // 5 seconds

    if (clickCount === 5) {
        home.classList.add("animation")
        setTimeout(() => {
            special.classList.remove("none")
        }, 1000)
        setTimeout(() => {
            home.classList.remove("animation")
            home.classList.add("none")
        }, 2000)
    }
}

diff_special.hyperspecific.onclick = () => {
    if (![...diff_special.hyperspecific.classList].includes("expand")) {
        home.classList.add("none")
        return chooseDifficulty("hyperspecific", true)
    }
}
diff_special.all.onclick = () => {
    if (![...diff_special.all.classList].includes("expand")) {
        home.classList.add("none")
        return chooseDifficulty("all", true)
    }
}