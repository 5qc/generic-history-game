const questionPage = <HTMLDivElement>document.getElementById("question")
const buttons: NodeListOf<HTMLButtonElement> = questionPage.querySelectorAll(".answers button")
const congrats = <HTMLDivElement>document.getElementById("congrats")
const progressBar = <HTMLDivElement>document.getElementById("progress-bar")
const bar = <HTMLDivElement>progressBar.querySelector("div")

let score = 0
let questionNo = 0
const maxQuestions = 2

function generateQuestion(difficulty: string) {
    let data: QuestionData
    switch (difficulty) { // get all questions in selected difficulty
        case "easy": data = [...easyQuestions]; break
        case "medium": data = [...mediumQuestions]; break
        case "hard": data = [...hardQuestions]; break
        default: data = [...easyQuestions, ...mediumQuestions, ...hardQuestions]; break
    }

    for (let b of buttons) {
        b.classList.remove("incorrect")
        b.classList.remove("correct")
    }

    const r = Math.floor(Math.random() * data.length)
    let q = [...[...data][r]]
    questionPage.querySelector(".question").innerHTML = q[0]

    q.shift()
    q[0] += "!!c"
    q = shuffle(q)

    let correct: number
    for (let i = 0; i < q.length; i++) {
        if (q[i].endsWith("!!c")) {
            buttons[i].innerHTML = q[i].replace(/!!c$/g, "")
            buttons[i].setAttribute("data", "1")

            correct = i
        } else {
            buttons[i].innerHTML = q[i]
            buttons[i].setAttribute("data", "0")
        }

        buttons[i].setAttribute("click", "1")
    }

    let isCorrect = false
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = () => {
            if (buttons[i].getAttribute("click") === "1") { // if chosen answer is correct
                if (buttons[i].getAttribute("data") === "1") {
                    buttons[i].classList.add("correct")
                    isCorrect = true
                } else { // if they're incorrect
                    buttons[i].classList.add("incorrect")
                    buttons[correct].classList.add("correct")
                }
    
                for (let b of buttons) b.setAttribute("click", "0")

                setTimeout(() => {
                    // pick a random transition
                    const r = randomInRange(1, 5)
                    const l = [document.querySelector(".question"), ...buttons]

                    questionPage.classList.add(`transition${r}`) // choose transition

                    // add score + update progress bar if you chose the correct answer
                    questionNo += 1
                    updateProgressBar()
                    if (isCorrect) {
                        score += 1;
                        (<HTMLSpanElement>document.getElementById("score")).innerText = score.toString()
                    }

                    // if the game is complete
                    if (questionNo === maxQuestions) {
                        (<HTMLDivElement>document.getElementById("final-score")).innerText = `score was ${score}`

                        setTimeout(() => {
                            congrats.classList.remove("none")
                            congrats.classList.add("fade-in")
                            questionPage.setAttribute("class", "none")
                            progressBar.style.transform = `translateY(-250%)`

                            setTimeout(() => {
                                congrats.classList.remove("fade-in")

                                setTimeout(() => {
                                    congrats.classList.add("fade-out")

                                    score = 0
                                    questionNo = 0;
                                    (<HTMLSpanElement>document.getElementById("score")).innerText = score.toString()
                                    updateProgressBar()

                                    setTimeout(() => {
                                        congrats.classList.add("none")
                                        congrats.classList.remove("fade-out")

                                        home.classList.remove("none")
                                        home.classList.add("fade-in")
                                        setTimeout(() => {
                                            home.classList.remove("fade-in")
                                        }, 1000)
                                    }, 1000)
                                }, 2500)
                            }, 1000)
                        }, r !== 4 ? 2000 : 930)
                    } else {
                        setTimeout(() => {
                            function generateWrapper(d: string) {
                                const previous = document.querySelector(".question").innerHTML
    
                                generateQuestion(d)
                                if (document.querySelector(".question").innerHTML === previous) {
                                    generateWrapper(d)
                                }
                            }
                            generateWrapper(difficulty) // generate new question
    
                            // @ts-ignore
                            if (r !== 4) {
                                questionPage.style.display = "none"
                                setTimeout(() => {
                                    questionPage.style.display = "flex"
                                    questionPage.classList.add("backwards")
                                }, 100)
                            }
    
                            setTimeout(() => {
                                questionPage.classList.remove("backwards")
                                questionPage.classList.remove(`transition${r}`) // @ts-ignore
                            }, r !== 4 ? 2000 : 500) // @ts-ignore
                        }, r !== 4 ? 1500 : 910)
                    }
                }, 1000)
            }
        }
    }
}

function updateProgressBar() {   
    bar.style.width = `${(questionNo / maxQuestions) * 100}%`
}