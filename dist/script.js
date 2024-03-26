const easyQuestions = [
    ["who was the first president of the united states?", "george washington", "thomas jefferson", "abraham lincoln", "john adams"],
    ["who was the first woman to fly across the atlantic solo?", "amelia earhart", "beryl markham", "jacqueline cochran", "maude bonney"],
    ["what country did napoleon rule over?", "france", "portugal", "united kingdom", "netherlands"],
    ["who painted the mona lisa?", "leonardo da vinci", "michelangelo", "jan van eyck", "raphael"],
    ["who invented the telephone?", "alexander graham bell", "samuel morse", "steve jobs", "edwin howard armstrong"],
    ["the first atomic bomb attack was on which city?", "hiroshima", "nagasaki", "kobe", "fukuoka"]
];
const hardQuestions = [
    ["", "", "", "", ""]
];
const mediumQuestions = [
    ["", "", "", "", ""]
];
const diff = {
    easy: document.getElementById("easy"),
    medium: document.getElementById("medium"),
    hard: document.getElementById("hard")
};
const select = document.getElementById("select-difficulty");
function chooseDifficulty(d) {
    diff[d].classList.add("expand");
    select.classList.add("expand-wrapper");
    progressBar.style.transform = `translateY(0%)`;
    generateQuestion(d);
    setTimeout(() => {
        questionPage.classList.remove("none");
        diff[d].classList.add("difficulty-transition");
        otherDifficulties(d, "none");
        setTimeout(() => {
            select.classList.add("none");
            diff[d].classList.remove("expand");
            select.classList.remove("expand-wrapper");
            diff[d].classList.remove("difficulty-transition");
            otherDifficulties(d, "none", "remove");
        }, 2000);
    }, 1500);
}
function otherDifficulties(d, c, a = "add") {
    if (d === "easy") {
        if (a === "add") {
            diff.medium.classList.add(c);
            diff.hard.classList.add(c);
        }
        else if (a === "remove") {
            diff.medium.classList.remove(c);
            diff.hard.classList.remove(c);
        }
    }
    else if (d === "medium") {
        if (a === "add") {
            diff.easy.classList.add(c);
            diff.hard.classList.add(c);
        }
        else if (a === "remove") {
            diff.easy.classList.remove(c);
            diff.hard.classList.remove(c);
        }
    }
    else if (d === "hard") {
        if (a === "add") {
            diff.easy.classList.add(c);
            diff.medium.classList.add(c);
        }
        else if (a === "remove") {
            diff.easy.classList.remove(c);
            diff.medium.classList.remove(c);
        }
    }
}
diff.easy.onclick = () => {
    if (![...diff.easy.classList].includes("expand")) {
        return chooseDifficulty("easy");
    }
};
diff.medium.onclick = () => {
    if (![...diff.medium.classList].includes("expand")) {
        return chooseDifficulty("medium");
    }
};
diff.hard.onclick = () => {
    if (![...diff.hard.classList].includes("expand")) {
        return chooseDifficulty("hard");
    }
};
const questionPage = document.getElementById("question");
const buttons = questionPage.querySelectorAll(".answers button");
const congrats = document.getElementById("congrats");
const progressBar = document.getElementById("progress-bar");
const bar = progressBar.querySelector("div");
let score = 0;
let questionNo = 0;
const maxQuestions = 2;
function generateQuestion(difficulty) {
    let data;
    switch (difficulty) { // get all questions in selected difficulty
        case "easy":
            data = [...easyQuestions];
            break;
        case "medium":
            data = [...mediumQuestions];
            break;
        case "hard":
            data = [...hardQuestions];
            break;
        default:
            data = [...easyQuestions, ...mediumQuestions, ...hardQuestions];
            break;
    }
    for (let b of buttons) {
        b.classList.remove("incorrect");
        b.classList.remove("correct");
    }
    const r = Math.floor(Math.random() * data.length);
    let q = [...[...data][r]];
    questionPage.querySelector(".question").innerHTML = q[0];
    q.shift();
    q[0] += "!!c";
    q = shuffle(q);
    let correct;
    for (let i = 0; i < q.length; i++) {
        if (q[i].endsWith("!!c")) {
            buttons[i].innerHTML = q[i].replace(/!!c$/g, "");
            buttons[i].setAttribute("data", "1");
            correct = i;
        }
        else {
            buttons[i].innerHTML = q[i];
            buttons[i].setAttribute("data", "0");
        }
        buttons[i].setAttribute("click", "1");
    }
    let isCorrect = false;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = () => {
            if (buttons[i].getAttribute("click") === "1") { // if chosen answer is correct
                if (buttons[i].getAttribute("data") === "1") {
                    buttons[i].classList.add("correct");
                    isCorrect = true;
                }
                else { // if they're incorrect
                    buttons[i].classList.add("incorrect");
                    buttons[correct].classList.add("correct");
                }
                for (let b of buttons)
                    b.setAttribute("click", "0");
                setTimeout(() => {
                    // pick a random transition
                    const r = randomInRange(1, 5);
                    const l = [document.querySelector(".question"), ...buttons];
                    questionPage.classList.add(`transition${r}`); // choose transition
                    // add score + update progress bar if you chose the correct answer
                    questionNo += 1;
                    updateProgressBar();
                    if (isCorrect) {
                        score += 1;
                        document.getElementById("score").innerText = score.toString();
                    }
                    // if the game is complete
                    if (questionNo === maxQuestions) {
                        document.getElementById("final-score").innerText = `score was ${score}`;
                        setTimeout(() => {
                            congrats.classList.remove("none");
                            congrats.classList.add("fade-in");
                            questionPage.setAttribute("class", "none");
                            progressBar.style.transform = `translateY(-250%)`;
                            setTimeout(() => {
                                congrats.classList.remove("fade-in");
                                setTimeout(() => {
                                    congrats.classList.add("fade-out");
                                    score = 0;
                                    questionNo = 0;
                                    document.getElementById("score").innerText = score.toString();
                                    updateProgressBar();
                                    setTimeout(() => {
                                        congrats.classList.add("none");
                                        congrats.classList.remove("fade-out");
                                        home.classList.remove("none");
                                        home.classList.add("fade-in");
                                        setTimeout(() => {
                                            home.classList.remove("fade-in");
                                        }, 1000);
                                    }, 1000);
                                }, 2500);
                            }, 1000);
                        }, r !== 4 ? 2000 : 930);
                    }
                    else {
                        setTimeout(() => {
                            function generateWrapper(d) {
                                const previous = document.querySelector(".question").innerHTML;
                                generateQuestion(d);
                                if (document.querySelector(".question").innerHTML === previous) {
                                    generateWrapper(d);
                                }
                            }
                            generateWrapper(difficulty); // generate new question
                            // @ts-ignore
                            if (r !== 4) {
                                questionPage.style.display = "none";
                                setTimeout(() => {
                                    questionPage.style.display = "flex";
                                    questionPage.classList.add("backwards");
                                }, 100);
                            }
                            setTimeout(() => {
                                questionPage.classList.remove("backwards");
                                questionPage.classList.remove(`transition${r}`); // @ts-ignore
                            }, r !== 4 ? 2000 : 500); // @ts-ignore
                        }, r !== 4 ? 1500 : 910);
                    }
                }, 1000);
            }
        };
    }
}
function updateProgressBar() {
    bar.style.width = `${(questionNo / maxQuestions) * 100}%`;
}
document.head.insertAdjacentHTML("beforeend", `<style>
.transition2 .question {
    animation: ${Math.random() + 1}s transition2 ease-in-out forwards;
}
.transition2 .answers :nth-child(1) {
    animation: ${Math.random() + 1}s transition2 ease-in-out forwards;
}
.transition2 .answers :nth-child(2) {
    animation: ${Math.random() + 1}s transition2 ease-in-out forwards;
}
.transition2 .answers :nth-child(3) {
    animation: ${Math.random() + 1}s transition2 ease-in-out forwards;
}
.transition2 .answers :nth-child(4) {
    animation: ${Math.random() + 1}s transition2 ease-in-out forwards;
}
</style>`);
const home = document.getElementById("home");
const homePlay = document.getElementById("home-play");
homePlay.onclick = () => {
    home.classList.add("animation");
    setTimeout(() => {
        select.classList.remove("none");
    }, 1000);
    setTimeout(() => {
        home.classList.remove("animation");
        home.classList.add("none");
    }, 2000);
};
generateQuestion("easy");
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;
}
function randomInRange(min, max, round = true) {
    if (round === true)
        return Math.round(Math.random() * (max - min) + min);
    else
        return Math.random() * (max - min) + min;
}
//# sourceMappingURL=script.js.map