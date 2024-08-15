const questionPage = <HTMLDivElement>document.getElementById("question")
const buttons: NodeListOf<HTMLButtonElement> = questionPage.querySelectorAll(".answers button")
const congrats = <HTMLDivElement>document.getElementById("congrats")
const progressBar = <HTMLDivElement>document.getElementById("progress-bar")
const bar = <HTMLDivElement>progressBar.querySelector("div")

let score = 0 // correct questions
let questionNo = 0
let maxQuestions = Number(numberOfQuestions.value) // how many questions to run in a single game.

let gameQuestions: string[] = []

/*
    the main function
*/
function generateQuestion(difficulty: string, location?: string) {
    // change max number of questions based on difficulty
    checkThoseDifficulties()
    if (checkDifficulties[difficulty] === false) {
        switch(difficulty) {
            case "easy": maxQuestions = easyQuestions.length; break
            case "medium": maxQuestions = mediumQuestions.length; break
            case "hard": maxQuestions = hardQuestions.length; break
            case "hyperspecific": maxQuestions = hyperspecificQuestions.length; break

            case "LOCATION": maxQuestions = locationQuestions[location].length; break
        }

        // if previous is false, display notice letting user
        // know that there is not as many questions as
        // they wanted
        if (questionNo === 0) {
            setTimeout(() => {
                showNotice("questions", maxQuestions)
            }, difficulty === "LOCATION" ? 2750 : 3500)
        }
    }

    // get all questions in selected difficulty
    let data: QuestionData
    switch (difficulty) {
        // regular difficulties
        case "easy": data = [...easyQuestions]; break
        case "medium": data = [...mediumQuestions]; break
        case "hard": data = [...hardQuestions]; break
        
        // special difficulties
        case "hyperspecific": data = [...hyperspecificQuestions]; break
        case "LOCATION": data = [...locationQuestions[location]]; break
        default: data = [...easyQuestions, ...mediumQuestions, ...hardQuestions]; break
    }

    // remove classes from buttons
    for (let b of buttons) {
        b.classList.remove("incorrect")
        b.classList.remove("correct")
    }

    // generate first question and add it
    const r = Math.floor(Math.random() * data.length)
    let q = [...[...data][r]]
    let ic = [...[...data][r]]
    questionPage.querySelector(".question").innerHTML = q[0]

    // add to saved questions if it's the first one
    if (questionNo === 0) gameQuestions.push(questionPage.querySelector(".question").innerHTML)

    ic.shift() // remove question
    ic.shift() // remove correct answer
    ic = shuffle(ic) // shuffle incorrect answers
    while (ic.length > 3) ic.pop() // remove extra answers

    // put answers on buttons
    q.shift() // remove question
    q[0] += "!!c" // mark correct answer
    q = shuffle([q[0], ...ic]) // shuffle answers

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
                    const r = randomInRange(1, 6)
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

                        if (score === 0) {
                            (<HTMLSpanElement>document.querySelector("#congrats span")).innerText = "you suck at this game"
                        }
                        if ((score / maxQuestions) <= 0.5 && (score / maxQuestions) > 0) {
                            (<HTMLSpanElement>document.querySelector("#congrats span")).innerText = "you are okay at this game"
                        }

                        setTimeout(() => {
                            congrats.classList.remove("none")
                            congrats.classList.add("fade-in")
                            questionPage.setAttribute("class", "none")
                            progressBar.style.transform = `translateY(-250%)`
                            playConfetti()

                            setTimeout(() => {
                                congrats.classList.remove("fade-in")

                                setTimeout(() => {
                                    congrats.classList.add("fade-out");
                                    (<HTMLDivElement>document.getElementById("confetti")).classList.add("fade-out")

                                    // reset stuff
                                    score = 0
                                    questionNo = 0;
                                    (<HTMLSpanElement>document.getElementById("score")).innerText = score.toString()
                                    updateProgressBar()
                                    gameQuestions = []
                                    maxQuestions = Number(numberOfQuestions.value)
                                    homePlay.removeAttribute("data");
                                    (<HTMLSpanElement>document.querySelector(".title > span")).innerText = "generic history game"
                                    document.querySelector("title").innerText = "generic history game"

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
                            }, 1000) // @ts-ignore
                        }, r !== 4 ? 2000 : 923)
                    } else {
                        /*
                            code to run if we have not reached the end of the game yet.
                        */
                        setTimeout(() => {
                            function generateWrapper(d: string, l?: string) {
                                // this function checks other questions that have already been answered.
                                // if the generated question has not been answered yet, run it.
                                if (location) generateQuestion(d, l)
                                else generateQuestion(d)

                                const q = document.querySelector(".question").innerHTML

                                if (gameQuestions.includes(q)) {
                                    if (location) generateWrapper(d, l)
                                    else generateWrapper(d)
                                }
                                else gameQuestions.push(q)
                            }
                            if (location) generateWrapper(difficulty, location)
                            else generateWrapper(difficulty)
    
                            // @ts-ignore
                            if (r !== 4) {
                                // reload question
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
    const e = (questionNo / maxQuestions) * 100
    bar.style.width = `${e}%`
}