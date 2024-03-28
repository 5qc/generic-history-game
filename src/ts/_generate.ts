const questionPage = <HTMLDivElement>document.getElementById("question")
const buttons: NodeListOf<HTMLButtonElement> = questionPage.querySelectorAll(".answers button")
const congrats = <HTMLDivElement>document.getElementById("congrats")
const progressBar = <HTMLDivElement>document.getElementById("progress-bar")
const bar = <HTMLDivElement>progressBar.querySelector("div")

let score = 0 // correct questions
let questionNo = 0
const maxQuestions = 10 // how many questions to run in a single game.

let gameQuestions: string[] = []

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
    let ic = [...[...data][r]]
    questionPage.querySelector(".question").innerHTML = q[0]

    if (questionNo === 0) gameQuestions.push(questionPage.querySelector(".question").innerHTML)

    ic.shift()
    ic.shift()
    ic = shuffle(ic)
    while (ic.length > 3) ic.pop()

    q.shift()
    q[0] += "!!c"
    q = shuffle([q[0], ...ic])

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

                    // code to do at the end of the game
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

                                    // reset stuff
                                    score = 0
                                    questionNo = 0;
                                    (<HTMLSpanElement>document.getElementById("score")).innerText = score.toString()
                                    updateProgressBar()
                                    gameQuestions = []

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
                        /*
                            code to run if we have not reached the end of the game yet.
                        */
                        setTimeout(() => {
                            function generateWrapper(d: string) {
                                // this function checks other questions that have already been answered.
                                // if the generated question has not been answered yet, run it.
                                generateQuestion(d)
                                const q = document.querySelector(".question").innerHTML

                                console.log(gameQuestions, q, gameQuestions.includes(q))

                                if (gameQuestions.includes(q)) generateWrapper(d)
                                else gameQuestions.push(q)
                            }
                            generateWrapper(difficulty)
    
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