const diff = {
    easy: <HTMLDivElement>document.getElementById("easy"),
    medium: <HTMLDivElement>document.getElementById("medium"),
    hard: <HTMLDivElement>document.getElementById("hard")
}
const select = <HTMLDivElement>document.getElementById("select-difficulty")

function chooseDifficulty(d: string) {
    diff[d].classList.add("expand")
    select.classList.add("expand-wrapper")
    progressBar.style.transform = `translateY(0%)`

    generateQuestion(d)
    
    setTimeout(() => {
        questionPage.classList.remove("none")
        diff[d].classList.add("difficulty-transition")

        otherDifficulties(d, "none")

        setTimeout(() => {
            select.classList.add("none")

            diff[d].classList.remove("expand")
            select.classList.remove("expand-wrapper")
            diff[d].classList.remove("difficulty-transition")

            otherDifficulties(d, "none", "remove")
        }, 2000)
    }, 1500)
}

function otherDifficulties(d: string, c: string, a: string = "add") {
    if (d === "easy") {
        if (a === "add") {
            diff.medium.classList.add(c)
            diff.hard.classList.add(c)
        } else if (a === "remove") {
            diff.medium.classList.remove(c)
            diff.hard.classList.remove(c)
        }
    } else if (d === "medium") {
        if (a === "add") {
            diff.easy.classList.add(c)
            diff.hard.classList.add(c)
        } else if (a === "remove") {
            diff.easy.classList.remove(c)
            diff.hard.classList.remove(c)
        }
    } else if (d === "hard") {
        if (a === "add") {
            diff.easy.classList.add(c)
            diff.medium.classList.add(c)
        } else if (a === "remove") {
            diff.easy.classList.remove(c)
            diff.medium.classList.remove(c)
        }
    }
}

diff.easy.onclick = () => {
    if (![...diff.easy.classList].includes("expand")) {
        return chooseDifficulty("easy")
    }
}
diff.medium.onclick = () => {
    if (![...diff.medium.classList].includes("expand")) {
        return chooseDifficulty("medium")
    }
}
diff.hard.onclick = () => {
    if (![...diff.hard.classList].includes("expand")) {
        return chooseDifficulty("hard")
    }
}