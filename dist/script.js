const easyQuestions = [
    ["who was the first president of the united states?", "george washington", "john adams", "thomas jefferson", "james madison", "james monroe", "john quicny adams", "andrew jackson", "martin van buren", "william henry harrison", "john tyler"],
    ["who was the first woman to fly across the atlantic solo?", "amelia earhart", "beryl markham", "jacqueline cochran", "maude bonney"],
    ["what country did napoleon rule over?", "france", "portugal", "united kingdom", "netherlands", "spain", "belgium", "switzerland", "italy", "germany"],
    ["who painted the mona lisa?", "leonardo da vinci", "michelangelo", "jan van eyck", "raphael", "masaccio", "titian"],
    ["who invented the telephone?", "alexander graham bell", "samuel morse", "steve jobs", "edwin howard armstrong"],
    ["the first atomic bomb attack was on which city?", "hiroshima", "nagasaki", "kobe", "fukuoka", "sendai", "kyoto", "niigata", "kawasaki", "nagoya"],
    ["where were the first olympic games held?", "athens", "paris", "london", "stockholm", "berlin", "amsterdam", "vienna", "budapest", "prague", "warsaw", "munich", "brussels", "antwerp", "thessaloniki"],
    ["what year did world war ii end?", "1945", "1944", "1943", "1942", "1941", "1940", "1939"],
    ["who was the first person to walk on the moon?", "neil armstrong", "buzz aldrin", "michael collins", "pete conrad", "richard f. gordon jr.", "alan bean"],
    ["when was the fall of the berlin wall?", "1989", "1988", "1987", "1986", "1990", "1991", "1985", "1984", "1983", "1982", "1981"]
];
const hardQuestions = [
    ["who assassinated archduke franz ferdinand?", "gavrilo princip", "nedeljko čabrinović", "vaso čubrilović", "dragutin dimitrijević", "trifko grabež", "danilo ilić", "miško jovanović", "muhamed mehmedbašić", "cvjetko popović"],
    ["when did russia annex the crimean peninsula?", "18 march 2014", "27 february 2014", "26 march 2014", "22 february 2014"],
    ["in what battle did ethiopia successfully resist italian imperialism?", "battle of adwa", "siege of mekelle", "battle of amba alagi", "battle of debra ailà", "battle of senafe", "battle of coatit"],
    ["what volcano eruption caused the year without a summer?", "mount tambora", "krakatoa", "mount galunggung", "mount tarawera", "mount st. helens", "mount piantubo", "mount fuji"],
    ["who led the ottoman empire towards victory in constantinople in 1453?", "mehmed ii", "murad ii", "mehmed i", "beyezid ii", "selim i", "suleiman i", "selim ii", "murad iii", "mehmed iii"],
    ["who was the last byzantine emperor?", "constantine xi palaiologos", "john viii palaiologos", "manuel ii palaiologos", "john v palaiologos", "john vii palaiologos", "john v palaiologos", "andronikos iv palaiologos", "john vi kantakouzenos", "andronikos iii palaiologos", "michael ix palaiologos", "andronikos ii palaiologos", "michael viii palaiologos"],
    ["what country did mansa musa rule over?", "mali empire", "ghana empire", "gao empire", "abbasid caliphate", "mandara kingdom", "wattasid dynasty", "emirate of nekor", "kingdom of nri", "kingdom of kongo", "kakongo"],
    ["who was the last leader of apartheid-era south africa?", "f. w. de klerk", "p. w. botha", "marais viljoen", "john vorster", "nico diederichs", "jim fouché", "eben dönges", "c. r. swart"],
    ["which country ruled the provisional government of cuba?", "united states", "canada", "spain", "mexico", "france", "portugal", "ireland", "united kingdom"],
    ["what is the largest verified impact structure on earth?", "vredefort", "chicxulub", "sudbury", "popigai", "manicouagan", "acraman", "morokweng", "kara", "beaverhead", "tookoonooka", "charlevoix", "siljan ring", "karakul"]
];
const mediumQuestions = [
    ["how many wives did henry viii have?", "6", "5", "4", "3", "2", "1", "7", "8", "9", "10"],
    ["what is the official name of greece?", "hellenic republic", "republic of greece", "greek republic", "hellenes republic", "republic of hellenes", "greece republic", "kingdom of greece", "greek kingdom", "hellenic kingdom", "kingdom of hellenes"],
    ["who was the last general secretary of the soviet union?", "mikhail gorbachev", "konstantin chernenko", "yuri andropov", "leonid brezhnev", "nikita khrushchev", "joseph stalin", "vyacheslav molotov", "nikolay krestinsky", "elena stasova", "yakov sverdlov"],
    ["margaret thatcher was a member of which party?", "conservative party", "labour party", "democratic unionist party", "liberal party", "ulster unionist party"],
    ["who owns greenland?", "denmark", "norway", "sweden", "finland", "united kingdom", "ireland", "iceland", "netherlands", "russia", "canada", "united states"],
    ["who led the united kingdom towards victory during world war ii?", "winston churchill", "neville chamberlain", "clement attlee", "stanley baldwin", "douglas hacking", "thomas dugdale", "ralph assheton"],
    ["which country did germany invade that led to world war ii?", "poland", "united kingdom", "czech republic", "austria", "switzerland", "france", "luxembourg", "belgium", "netherlands", "denmark", "italy"],
    ["when was women's suffrage established across the united states?", "1920", "1919", "1918", "1917", "1916", "1915", "1914", "1913", "1912", "1911", "1910", "1921", "1922", "1923", "1924", "1925", "1926", "1927", "1928", "1929", "1930"],
    ["who succeeded adolf hitler as leader of germany?", "karl dönitz", "joseph goebbels", "lutz graf schwerin von krosigk", "hans lammers", "otto meissner", "martin bormann", "philip bouhler", "hermann göring", "konstantin von neurath"],
    ["what city did anne frank hide in from the nazis?", "amsterdam", "brussels", "antwerp", "rotterdam", "the hague", "düsseldorf", "strasbourg", "paris", "luxembourg", "london", "berlin"]
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
let score = 0; // correct questions
let questionNo = 0;
const maxQuestions = 10; // how many questions to run in a single game.
let gameQuestions = [];
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
    let ic = [...[...data][r]];
    questionPage.querySelector(".question").innerHTML = q[0];
    if (questionNo === 0)
        gameQuestions.push(questionPage.querySelector(".question").innerHTML);
    ic.shift();
    ic.shift();
    ic = shuffle(ic);
    while (ic.length > 3)
        ic.pop();
    q.shift();
    q[0] += "!!c";
    q = shuffle([q[0], ...ic]);
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
                    // code to do at the end of the game
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
                                    // reset stuff
                                    score = 0;
                                    questionNo = 0;
                                    document.getElementById("score").innerText = score.toString();
                                    updateProgressBar();
                                    gameQuestions = [];
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
                        /*
                            code to run if we have not reached the end of the game yet.
                        */
                        setTimeout(() => {
                            function generateWrapper(d) {
                                // this function checks other questions that have already been answered.
                                // if the generated question has not been answered yet, run it.
                                generateQuestion(d);
                                const q = document.querySelector(".question").innerHTML;
                                console.log(gameQuestions, q, gameQuestions.includes(q));
                                if (gameQuestions.includes(q))
                                    generateWrapper(d);
                                else
                                    gameQuestions.push(q);
                            }
                            generateWrapper(difficulty);
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
// notice data
const notices = {
    "about": "this is a generic history game about history and stuff (cause i like history)"
};
// functions
const notice = document.getElementById("notice");
document.getElementById("home-about").onclick = () => {
    showNotice("about");
};
function showNotice(title) {
    const t = document.getElementById("notice-title");
    const c = document.getElementById("notice-content");
    t.innerText = title;
    c.innerText = notices[title];
    notice.classList.remove("none");
    notice.onclick = () => {
        notice.classList.add("zoom-out");
        setTimeout(() => {
            notice.classList.remove("zoom-out");
            notice.classList.add("none");
        }, 1000);
    };
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