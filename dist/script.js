const easyQuestions = [
    ["who was the first president of the united states?", "george washington", "thomas jefferson", "abraham lincoln", "john adams"],
    ["who was the first woman to fly across the atlantic solo?", "amelia earhart", "beryl markham", "jacqueline cochran", "maude bonney"],
    ["what country did napoleon rule over?", "france", "portugal", "united kingdom", "netherlands"],
    ["who painted the mona lisa?", "leonardo da vinci", "michelangelo", "jan van eyck", "raphael"]
];
const hardQuestions = [
    ["", "", "", "", ""]
];
const mediumQuestions = [
    ["", "", "", "", ""]
];
const questionPage = document.getElementById("question");
const buttons = questionPage.querySelectorAll(".answers button");
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
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].onclick = () => {
            if (buttons[i].getAttribute("click") === "1") {
                if (buttons[i].getAttribute("data") === "1") {
                    buttons[i].classList.add("correct");
                }
                else {
                    buttons[i].classList.add("incorrect");
                    buttons[correct].classList.add("correct");
                }
                for (let b of buttons)
                    b.setAttribute("click", "0");
                setTimeout(() => {
                    // pick a random transition
                    const r = 2; // randomInRange(1, 5)
                    const l = [document.querySelector(".question"), ...buttons];
                    questionPage.classList.add(`transition${r}`); // choose transition
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
                }, 1000);
            }
        };
    }
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
const select = document.getElementById("select-difficulty");
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