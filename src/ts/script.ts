const home = <HTMLDivElement>document.getElementById("home")
const homePlay = <HTMLButtonElement>document.getElementById("home-play")

const select = <HTMLDivElement>document.getElementById("select-difficulty")

if (location.hash.trim()) {
    const xy = location.hash.replace(/^\#/g, "");
    (<HTMLButtonElement>document.getElementById("home-play")).setAttribute("data", xy)

    let xyz = []
    for (let i = 0; i < locationData.locations.length; i++) {
        const z = locationData.locations[i]
        if (z[1] === xy) xyz = z
    }

    const n = xyz[0].split(", ")[0] + " history game";
    (<HTMLSpanElement>document.querySelector(".title > span")).innerText = n
    document.querySelector("title").innerText = n

    location.hash = ""
}

homePlay.onclick = () => {
    home.classList.add("animation")
    
    setTimeout(() => {
        if (homePlay.getAttribute("data")) {
            progressBar.style.transform = `translateY(0%)`
            generateQuestion("LOCATION", homePlay.getAttribute("data"))

            setTimeout(() => {
                const r = randomInRange(1, 6, 4)

                questionPage.classList.remove("none")
                questionPage.classList.add(`transition${r}`)
                questionPage.classList.add("backwards")

                setTimeout(() => {
                    questionPage.classList.remove(`transition${r}`)
                    questionPage.classList.remove("backwards")
                }, 2500)
            }, 1000)
        } else {
            select.classList.remove("none")
        }
    }, 1000)

    setTimeout(() => {
        home.classList.remove("animation")
        home.classList.add("none")
    }, 2000)
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex: number

    while (currentIndex > 0) {

        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ]
    }

    return array
}

function randomInRange(min: number, max: number, exclude?: number) {
    const n = Math.round(Math.random() * (max - min) + min)
    return n === exclude ? randomInRange(min, max, exclude) : n
}