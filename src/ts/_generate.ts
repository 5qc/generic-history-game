const questionPage = <HTMLDivElement>document.getElementById("question")
const buttons: NodeListOf<HTMLButtonElement> = questionPage.querySelectorAll(".answers button")
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

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = () => {
            if (buttons[i].getAttribute("click") === "1") {
                if (buttons[i].getAttribute("data") === "1") {
                    buttons[i].classList.add("correct")
                } else {
                    buttons[i].classList.add("incorrect")
                    buttons[correct].classList.add("correct")
                }
    
                for (let b of buttons) b.setAttribute("click", "0")

                setTimeout(() => {
                    // pick a random transition
                    const r = 2 // randomInRange(1, 5)
                    const l = [document.querySelector(".question"), ...buttons]

                    questionPage.classList.add(`transition${r}`) // choose transition

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
                }, 1000)
            }
        }
    }
}