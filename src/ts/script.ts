const home = <HTMLDivElement>document.getElementById("home")
const homePlay = <HTMLButtonElement>document.getElementById("home-play")

homePlay.onclick = () => {
    home.classList.add("animation")
    setTimeout(() => {
        select.classList.remove("none")
    }, 1000)
    setTimeout(() => {
        home.classList.remove("animation")
        home.classList.add("none")
    }, 2000)
}

generateQuestion("easy")

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

function randomInRange(min: number, max: number, round: boolean = true) {
    if (round === true) return Math.round(Math.random() * (max - min) + min)
    else return Math.random() * (max - min) + min
}