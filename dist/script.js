const locationData = {
    "locations": [
        ["london, england", "uk/eng/london"],
        ["new york city, new york, united states", "us/ny/new-york-city"],
        ["platteville, wisconsin, united states", "us/wi/platteville"],
    ]
};
const locationQuestions = {
    /*
    *   UNITED KINGDOM
    */
    "uk/eng/london": [
        ["how many trees are estimated to be in london?", "8.4 million", "8.3 million", "8.2 million", "8.1 million", "8 million", "8.5 million", "8.6 million", "8.7 million", "8.8 million", "8.9 million", "9 million", "7.9 million", "7.8 million", "7.7 million", "7.6 million", "7.5 million", "7.4 million", "7.3 million", "7.2 million", "7.1 million", "7 million", "6.9 million", "6.8 million", "6.7 million", "6.6 million", "6.5 million", "6.4 million", "6.3 million", "6.2 million", "6.1 million", "6 million"],
        ["what year did the great smog of london occur?", "1952", "1951", "1950", "1953", "1954", "1955", "1956", "1957", "1958", "1959", "1960", "1961", "1962", "1963", "1964", "1965", "1966", "1967", "1968", "1969", "1970", "1949", "1948", "1947", "1946", "1945", "1944", "1943", "1942", "1941", "1940", "1939", "1938", "1937", "1936", "1935", "1934", "1933", "1932", "1931", "1930"],
        ["what disease was involved in the great plague of london?", "bubonic plague", "septicemic plague", "pneumonic plague", "cholera", "measles", "yellow fever"],
        ["who was the first lord mayor of london?", "henry fitz ailwin", "roger fitzalan", "serlo le mercer", "william hardell", "jacob alderman", "salomon de basing", "richard renger", "roger le duke", "andrew buckerell", "william joynier", "gerard bat", "reginald de bungay", "ralph ashley", "michael tovey", "john gisors i", "peter fitzalan"],
        ["what year did the great fire of london occur?", "1666", "1667", "1668", "1669", "1670", "1671", "1672", "1673", "1674", "1675", "1676", "1677", "1678", "1679", "1680", "1681", "1682", "1683", "1684", "1685", "1686", "1687", "1688", "1689", "1690", "1665", "1664", "1663", "1662", "1661", "1660", "1659", "1658", "1657", "1656", "1655", "1654", "1653", "1652", "1651", "1650", "1649", "1648", "1647", "1646", "1645", "1644", "1643", "1642", "1641", "1640", "1639", "1638", "1637", "1636", "1635", "1634", "1633", "1632", "1631", "1630"],
        ["what year was the rebuilding of the palace of westminster finalised?", "1876", "1875", "1874", "1873", "1872", "1871", "1870", "1869", "1868", "1867", "1866", "1865", "1864", "1863", "1862", "1861", "1860", "1877", "1878", "1879", "1880", "1881", "1882", "1883", "1884", "1885", "1886", "1887", "1888", "1889", "1890"],
        ["outside of which building was charles i executed?", "banqueting house", "tower of london", "kensington palace", "hampton court place", "kew palace", "hillsborough castle", "great pagoda", "palace of westminster"],
        ["where do coronations take place in london?", "westminster abbey", "all hallows-by-the-tower", "palace of westminster", "temple church", "priory church of st bartholomew-the-great", "tower of london", "st. pauls cathedral"],
        ["what year was the current london bridge opened?", "1973", "1972", "1971", "1970", "1969", "1968", "1967", "1966", "1965", "1964", "1963", "1962", "1961", "1960", "1959", "1954", "1953", "1952", "1951", "1950", "1949", "1948", "1947", "1946", "1945", "1944", "1943", "1942", "1941", "1940", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000"],
        ["who built the white tower at the tower of london?", "william the conqueror", "william ii of england", "henry i of england", "robert curthose", "robert i, duke of normandy", "richard ii, duke of normandy", "richard iii, duke of normandy", "william longsword", "rollo", "richard ii, duke of normandy", "richard i of normandy", "arthur i, duke of brittany"]
    ],
    /*
    *   UNITED STATES
    */
    // NEW YORK
    "us/ny/new-york-city": [
        ["what was the original name for staten island?", "richmond", "abercorn", "beaufort", "bedford", "devonshire", "fife", "hamilton", "grafton", "leinster", "manchester", "marlborough", "norfolk", "somerset", "york", "sutherland", "wellington"],
        ["who was the last colonial mayor of new york city?", "david mathews", "whitehead hicks", "john cruger jr.", "edward holland", "stephen bayard", "james duane", "richard varick", "jacobus van cortlandt", "johannes de peyster", "stephanus van cortlandt", "cornelius van steenwyk", "phillip french"],
        ["who was the first borough president of manhattan?", "augustus w. peters", "james j. coogan", "jacob a. cantor", "john f. ahearn", "john cloughen", "george mcaneny"],
        ["who was the first borough president of the bronx?", "louis f. haffen", "john f. murray", "cyrus c. miller", "douglas mathewson", "henry bruckner", "james j. lyons"],
        ["who was the first borough president of brooklyn?", "edward m. grout", "j. edward swanstrom", "martin w. littleton", "bird s. coler", "alfred e. steers", "lewis h. pounds"],
        ["who was the first borough president of queens?", "frederick bowley", "joseph cassidy", "joseph bermel", "lawrence gresser", "walter h. bunn", "maurice e. connolly", "michael j. shugrue", "bernard m. patten"],
        ["who was the first borough president of staten island?", "george cromwell", "charles j. mccormack", "spire pitou jr.", "calvin d. van name", "matthew j. cahill", "john a. lynch", "joseph a. palma"],
        ["what was the first line of the new york city subway?", "bmt canarsie", "bmt brighton", "bmt franklin avenue", "bmt jamaica", "myrtle avenue", "42nd street shuttle", "irt broadway–seventh avenue", "irt lexington avenue", "lenox avenue", "white plains road", "irt eastern parkway", "bmt nassau street"],
        ["when were the new york yankees established?", "1903", "1902", "1901", "1900", "1904", "1905", "1906", "1907", "1908", "1909", "1910", "1911", "1912", "1913", "1914", "1915", "1916", "1917", "1918", "1919", "1920"],
        ["as of 2024, what is the most popular domestic destination from jfk airport?", "los angeles, california", "san francisco, california", "miami, florida", "orlando, florida", "fort lauderdale, florida", "atlanta, georgia", "san juan, puerto rico", "seattle/tacoma, washington", "las vegas, nevada", "boston, massachusetts"],
        ["as of 2024, what is the most popular international destination from jfk airport?", "london, united kingdom", "paris, france", "santiago de los caballeros, dominican republic", "santo domingo, dominican republic", "madrid, spain", "amsterdam, netherlands", "cancún, mexico", "milan, italy", "tel aviv, israel", "rome, italy", "frankfurt, germany", "mexico city, mexico", "dubai, uae", "istanbul, turkey", "punta cana, dominican republic", "doha, qatar", "dublin, ireland", "montego bay, jamaica", "são paulo, brazil", "barcelona, spain"]
    ],
    // WISCONSIN
    "us/wi/platteville": [
        ["when was the university of wisconsin–platteville first established?", "1866", "1907", "1959", "1877", "1909", "1941", "1876", "1946", "1960", "1860", "1951"],
        ["what county is platteville located in?", "grant", "adams", "ashland", "barron", "bayfield", "brown", "buffalo", "burnett", "calumet", "chippewa", "clark", "columbia", "crawford", "dane", "dodge", "door", "douglas", "dunn", "eau claire", "florence", "fond du lac", "forest", "green", "green lake", "iowa", "iron", "jackson", "jefferson", "juneau", "kenosha", "kewaunee", "la crosse", "lafayette", "langlade", "lincoln", "manitowoc", "marathon", "marinette", "marquette", "menominee", "milwaukee", "monroe", "oconto", "oneida", "outagamie", "ozaukee", "pepin", "pierce", "polk", "portage", "price", "racine", "richland", "rock", "rusk", "sauk", "sawyer", "shawano", "sheboygan", "st. croix", "taylor", "trempealeau", "vernon", "vilas", "walworth", "washburn", "washington", "waukesha", "waupaca", "waushara", "winnebago", "wood"],
        ["as of 2024, how many jets are stationed at the platteville municipal airport?", "2", "1", "3", "4", "5"],
        ["when was platteville established?", "1827", "1826", "1825", "1824", "1823", "1822", "1821", "1820", "1828", "1829", "1830", "1819", "1818", "1817", "1816", "1815", "1814", "1813", "1812", "1811", "1810", "1809", "1808", "1807", "1806", "1805", "1804", "1803", "1802", "1801", "1800", "1831", "1832", "1833", "1834", "1835", "1836", "1837", "1838", "1839", "1840"],
        ["who was the first postmaster of platteville?", "john h. rountree", "homer f. bedford", "j.b. campbell", "thomas hugill sr."],
        ["what was the name of platteville during the spring of 1828?", "lebanon", "lancaster", "benton", "monroe", "watertown", "hartford", "sun prairie", "mayville", "middleton", "adams"],
        ["what is the mascot of the university of wisconsin–platteville?", "pioneer pete", "bucky badger", "pounce panther", "clash", "willie warhawk", "stryker the eagle", "blu", "phlash the phoenix", "stevie pointer", "blue devils", "freddy falcon", "ranger bear", "buzz the yellowjacket"],
        ["when did mining stop in the platteville area?", "1979", "1978", "1977", "1976", "1975", "1974", "1973", "1972", "1971", "1970", "1969", "1968", "1967", "1966", "1965", "1964", "1963", "1962", "1961", "1960", "1959", "1958", "1957", "1956", "1955", "1954", "1953", "1952", "1951", "1950", "1980"],
        ["when was ulrich hall constructed?", "1916", "1917", "1918", "1919", "1920", "1915", "1914", "1913", "1912", "1911", "1910", "1909", "1908", "1907", "1906", "1905", "1904", "1903", "1902", "1901", "1900", "1899", "1898", "1897", "1896", "1895", "1894", "1893", "1892", "1891", "1890", "1921", "1922", "1923", "1924", "1925", "1926", "1927", "1928", "1929", "1930", "1931", "1932", "1933", "1934", "1935", "1936", "1937", "1938", "1939", "1940", "1941", "1942", "1943", "1944", "1945", "1946", "1947", "1948", "1949", "1950"],
        ["when was the first football season of the wisconsin–platteville pioneers?", "1895", "1896", "1897", "1898", "1899", "1900", "1894", "1893", "1892", "1891", "1890", "1889", "1888", "1887", "1886", "1885", "1884", "1883", "1882", "1881", "1880", "1879", "1878", "1877", "1876", "1875", "1874", "1873", "1872", "1871", "1870", "1901", "1902", "1903", "1904", "1905", "1906", "1907", "1908", "1909", "1910", "1911", "1912", "1913", "1914", "1915", "1916", "1917", "1918", "1919", "1920"]
    ],
};
const locationEl = document.getElementById("location");
const fieldset = document.querySelector(".fieldset");
locationEl.onkeyup = () => {
    const z = locationEl.value;
    let i = 0;
    if (locationEl.value === "") {
        fieldset.style.display = "none";
    }
    else {
        for (let x of locationData.locations) {
            const r = new RegExp(`\\b(${z})\\w*\\b`, "g");
            if (i === 0) {
                fieldset.innerHTML = "";
                fieldset.style.display = "block";
            }
            if (!r.test(x[0]))
                continue;
            fieldset.innerHTML += `<div class="result" data-id="${x[1]}">${x[0]}</div>`;
            document.querySelector(`[data-id="${x[1]}"]`).onclick = () => {
                fieldset.style.display = "none";
                locationEl.value = x[0];
                document.getElementById("home-play").setAttribute("data", x[1]);
                const n = x[0].split(", ")[0] + " history game";
                document.querySelector(".title > span").innerText = n;
                document.querySelector("title").innerText = n;
            };
            i += 1;
        }
    }
};
const numberOfQuestions = document.getElementById("no-of-questions");
numberOfQuestions.onkeyup = () => {
    // remove anything but digits
    numberOfQuestions.value = numberOfQuestions.value.replace(/\D+/g, "");
    // check if number is within range 1-25
    if (Number(numberOfQuestions.value) > Number(numberOfQuestions.getAttribute("max"))) {
        numberOfQuestions.value = numberOfQuestions.getAttribute("max");
    }
    else if (Number(numberOfQuestions.value) < 1 && numberOfQuestions.value !== "") {
        numberOfQuestions.value = "1";
    }
    // then set value to the game
    maxQuestions = Number(numberOfQuestions.value);
};
const checkDifficulties = {
    "easy": true,
    "medium": true,
    "hard": true,
    "hyperspecific": true,
    "all": true,
    "LOCATION": true
};
function checkThoseDifficulties() {
    const number = Number(numberOfQuestions.value);
    // see which difficulties have more than 10 questions
    // and limit the number of questions on those that don't
    if (easyQuestions.length < number)
        checkDifficulties.easy = false;
    if (mediumQuestions.length < number)
        checkDifficulties.medium = false;
    if (hardQuestions.length < number)
        checkDifficulties.hard = false;
    if (hyperspecificQuestions.length < number)
        checkDifficulties.hyperspecific = false;
    if ([...easyQuestions, ...mediumQuestions, ...hardQuestions].length < number)
        checkDifficulties.all = false;
    if (homePlay.getAttribute("data") && locationQuestions[homePlay.getAttribute("data")].length < number)
        checkDifficulties.LOCATION = false;
}
numberOfQuestions.onchange = () => {
    checkThoseDifficulties();
};
function playConfetti() {
    const count = 200, defaults = {
        origin: { y: 0.7 },
    };
    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio),
        }));
    }
    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    fire(0.2, {
        spread: 60,
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8,
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2,
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });
    setTimeout(() => {
        document.getElementById("confetti").remove();
    }, 4500);
}
const diff = {
    easy: document.getElementById("easy"),
    medium: document.getElementById("medium"),
    hard: document.getElementById("hard"),
};
const diff_special = {
    hyperspecific: document.getElementById("hyperspecific"),
    all: document.getElementById("all")
};
function chooseDifficulty(d, special = false) {
    const select = special ? document.getElementById("special-difficulty") : document.getElementById("select-difficulty");
    if (special)
        diff_special[d].classList.add("expand");
    else
        diff[d].classList.add("expand");
    select.classList.add("expand-wrapper");
    progressBar.style.transform = `translateY(0%)`;
    generateQuestion(d);
    setTimeout(() => {
        questionPage.classList.remove("none");
        if (special)
            diff_special[d].classList.add("difficulty-transition");
        else
            diff[d].classList.add("difficulty-transition");
        otherDifficulties(d, "none");
        setTimeout(() => {
            select.classList.add("none");
            if (special)
                diff_special[d].classList.remove("expand");
            else
                diff[d].classList.remove("expand");
            select.classList.remove("expand-wrapper");
            if (special)
                diff_special[d].classList.remove("difficulty-transition");
            else
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
    if (d === "hyperspecific") {
        if (a === "add") {
            diff_special.all.classList.add(c);
        }
        else if (a === "remove") {
            diff_special.all.classList.remove(c);
        }
    }
    else if (d === "all") {
        if (a === "add") {
            diff_special.hyperspecific.classList.add(c);
        }
        else if (a === "remove") {
            diff_special.hyperspecific.classList.remove(c);
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
let maxQuestions = Number(numberOfQuestions.value); // how many questions to run in a single game.
let gameQuestions = [];
/*
    the main function
*/
function generateQuestion(difficulty, location) {
    // change max number of questions based on difficulty
    checkThoseDifficulties();
    if (checkDifficulties[difficulty] === false) {
        switch (difficulty) {
            case "easy":
                maxQuestions = easyQuestions.length;
                break;
            case "medium":
                maxQuestions = mediumQuestions.length;
                break;
            case "hard":
                maxQuestions = hardQuestions.length;
                break;
            case "hyperspecific":
                maxQuestions = hyperspecificQuestions.length;
                break;
            case "LOCATION":
                maxQuestions = locationQuestions[location].length;
                break;
        }
        // if previous is false, display notice letting user
        // know that there is not as many questions as
        // they wanted
        if (questionNo === 0) {
            setTimeout(() => {
                showNotice("questions", maxQuestions);
            }, difficulty === "LOCATION" ? 2750 : 3500);
        }
    }
    // get all questions in selected difficulty
    let data;
    switch (difficulty) {
        // regular difficulties
        case "easy":
            data = [...easyQuestions];
            break;
        case "medium":
            data = [...mediumQuestions];
            break;
        case "hard":
            data = [...hardQuestions];
            break;
        // special difficulties
        case "hyperspecific":
            data = [...hyperspecificQuestions];
            break;
        case "LOCATION":
            data = [...locationQuestions[location]];
            break;
        default:
            data = [...easyQuestions, ...mediumQuestions, ...hardQuestions];
            break;
    }
    // remove classes from buttons
    for (let b of buttons) {
        b.classList.remove("incorrect");
        b.classList.remove("correct");
    }
    // generate first question and add it
    const r = Math.floor(Math.random() * data.length);
    let q = [...[...data][r]];
    let ic = [...[...data][r]];
    questionPage.querySelector(".question").innerHTML = q[0];
    // add to saved questions if it's the first one
    if (questionNo === 0)
        gameQuestions.push(questionPage.querySelector(".question").innerHTML);
    ic.shift(); // remove question
    ic.shift(); // remove correct answer
    ic = shuffle(ic); // shuffle incorrect answers
    while (ic.length > 3)
        ic.pop(); // remove extra answers
    // put answers on buttons
    q.shift(); // remove question
    q[0] += "!!c"; // mark correct answer
    q = shuffle([q[0], ...ic]); // shuffle answers
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
                    const r = randomInRange(1, 6);
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
                        if (score === 0) {
                            document.querySelector("#congrats span").innerText = "you suck at this game";
                        }
                        if ((score / maxQuestions) <= 0.5 && (score / maxQuestions) > 0) {
                            document.querySelector("#congrats span").innerText = "you are okay at this game";
                        }
                        setTimeout(() => {
                            congrats.classList.remove("none");
                            congrats.classList.add("fade-in");
                            questionPage.setAttribute("class", "none");
                            progressBar.style.transform = `translateY(-250%)`;
                            playConfetti();
                            setTimeout(() => {
                                congrats.classList.remove("fade-in");
                                setTimeout(() => {
                                    congrats.classList.add("fade-out");
                                    document.getElementById("confetti").classList.add("fade-out");
                                    // reset stuff
                                    score = 0;
                                    questionNo = 0;
                                    document.getElementById("score").innerText = score.toString();
                                    updateProgressBar();
                                    gameQuestions = [];
                                    maxQuestions = Number(numberOfQuestions.value);
                                    homePlay.removeAttribute("data");
                                    document.querySelector(".title > span").innerText = "generic history game";
                                    document.querySelector("title").innerText = "generic history game";
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
                            }, 1000); // @ts-ignore
                        }, r !== 4 ? 2000 : 923);
                    }
                    else {
                        /*
                            code to run if we have not reached the end of the game yet.
                        */
                        setTimeout(() => {
                            function generateWrapper(d, l) {
                                // this function checks other questions that have already been answered.
                                // if the generated question has not been answered yet, run it.
                                if (location)
                                    generateQuestion(d, l);
                                else
                                    generateQuestion(d);
                                const q = document.querySelector(".question").innerHTML;
                                if (gameQuestions.includes(q)) {
                                    if (location)
                                        generateWrapper(d, l);
                                    else
                                        generateWrapper(d);
                                }
                                else
                                    gameQuestions.push(q);
                            }
                            if (location)
                                generateWrapper(difficulty, location);
                            else
                                generateWrapper(difficulty);
                            // @ts-ignore
                            if (r !== 4) {
                                // reload question
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
    const e = (questionNo / maxQuestions) * 100;
    bar.style.width = `${e}%`;
}
// notice data
const notices = {
    "about": ["about", "this is a generic history game about history and stuff (cause i like history)<br /><br />follow me on <a href='https://twitter.com/_rxnin_'>twitter</a>"],
    "questions": [null, "due to the scarcity of questions in this dataset, the number of questions has been set to $1."],
    "credits": ["credits", "programming by me<br />design by me<br />ideas by me and my mom (the progress bar)"]
};
// functions
document.getElementById("home-about").onclick = () => {
    showNotice("about");
};
document.getElementById("home-settings").onclick = () => {
    showNotice("settings");
};
document.getElementById("home-credits").onclick = () => {
    showNotice("credits");
};
function showNotice(title, ...args) {
    let notice, close;
    if (title !== "settings") {
        notice = document.getElementById("notice");
    }
    else {
        notice = document.getElementById("settings");
    }
    if (title !== "settings") {
        close = document.getElementById("notice-close");
    }
    else {
        close = document.getElementById("settings-close");
    }
    const t = document.getElementById("notice-title");
    const c = document.getElementById("notice-content");
    if (notices[title] && !notices[title][0])
        t.innerText = "notice";
    else if (notices[title])
        t.innerText = notices[title][0];
    if (title !== "settings") {
        let cx = (" " + notices[title][1]).slice(1);
        for (let i = 0; i < args.length; i++) {
            const r = new RegExp(`\\$${i + 1}`, "gi");
            cx = cx.replace(r, args[i]);
        }
        c.innerHTML = cx;
    }
    notice.classList.remove("none");
    close.onclick = () => {
        notice.classList.add("zoom-out");
        setTimeout(() => {
            notice.classList.add("none");
            notice.classList.remove("zoom-out");
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
document.getElementById("reset").onclick = resetButton;
function resetButton() {
    numberOfQuestions.value = "10";
    locationEl.value = "";
    homePlay.setAttribute("data", "");
    document.querySelector(".title > span").innerText = "generic history game";
    document.querySelector("title").innerText = "generic history game";
}
let clickCount = 0;
const title = document.querySelector(".title");
const special = document.getElementById("special-difficulty");
title.onclick = () => {
    if (!homePlay.getAttribute("data")) {
        clickCount += 1;
        setTimeout(() => {
            clickCount = 0;
        }, 5000); // 5 seconds
        if (clickCount === 5) {
            home.classList.add("animation");
            setTimeout(() => {
                special.classList.remove("none");
            }, 1000);
            setTimeout(() => {
                home.classList.remove("animation");
                home.classList.add("none");
            }, 2000);
        }
    }
};
diff_special.hyperspecific.onclick = () => {
    if (![...diff_special.hyperspecific.classList].includes("expand")) {
        home.classList.add("none");
        return chooseDifficulty("hyperspecific", true);
    }
};
diff_special.all.onclick = () => {
    if (![...diff_special.all.classList].includes("expand")) {
        home.classList.add("none");
        return chooseDifficulty("all", true);
    }
};
const home = document.getElementById("home");
const homePlay = document.getElementById("home-play");
const select = document.getElementById("select-difficulty");
if (location.hash.trim()) {
    const xy = location.hash.replace(/^\#/g, "");
    document.getElementById("home-play").setAttribute("data", xy);
    let xyz = [];
    for (let i = 0; i < locationData.locations.length; i++) {
        const z = locationData.locations[i];
        if (z[1] === xy)
            xyz = z;
    }
    const n = xyz[0].split(", ")[0] + " history game";
    document.querySelector(".title > span").innerText = n;
    document.querySelector("title").innerText = n;
    location.hash = "";
}
homePlay.onclick = () => {
    home.classList.add("animation");
    setTimeout(() => {
        if (homePlay.getAttribute("data")) {
            progressBar.style.transform = `translateY(0%)`;
            generateQuestion("LOCATION", homePlay.getAttribute("data"));
            setTimeout(() => {
                const r = randomInRange(1, 6, 4);
                questionPage.classList.remove("none");
                questionPage.classList.add(`transition${r}`);
                questionPage.classList.add("backwards");
                setTimeout(() => {
                    questionPage.classList.remove(`transition${r}`);
                    questionPage.classList.remove("backwards");
                }, 2500);
            }, 1000);
        }
        else {
            select.classList.remove("none");
        }
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
function randomInRange(min, max, exclude) {
    const n = Math.round(Math.random() * (max - min) + min);
    return n === exclude ? randomInRange(min, max, exclude) : n;
}
const easyQuestions = [
    ["who was the first president of the united states?", "george washington", "john adams", "thomas jefferson", "james madison", "james monroe", "john quincy adams", "andrew jackson", "martin van buren", "william henry harrison", "john tyler"],
    ["who was the first woman to fly across the atlantic solo?", "amelia earhart", "beryl markham", "jacqueline cochran", "maude bonney"],
    ["what country did napoleon rule over?", "france", "portugal", "united kingdom", "netherlands", "spain", "belgium", "switzerland", "italy", "germany"],
    ["who painted the mona lisa?", "leonardo da vinci", "michelangelo", "jan van eyck", "raphael", "masaccio", "titian"],
    ["who invented the telephone?", "alexander graham bell", "samuel morse", "steve jobs", "edwin howard armstrong"],
    ["the first atomic bomb attack was on which city?", "hiroshima", "nagasaki", "kobe", "fukuoka", "sendai", "kyoto", "niigata", "kawasaki", "nagoya"],
    ["what year did world war ii end?", "1945", "1944", "1943", "1942", "1941", "1940", "1939"],
    ["who was the first person to walk on the moon?", "neil armstrong", "buzz aldrin", "michael collins", "pete conrad", "richard f. gordon jr.", "alan bean"],
    ["who was the leader of the soviet union during world war ii?", "joseph stalin", "vladimir lenin", "nikita khrushchev", "leonid brezhnev", "vyacheslav molotov", "nikolay krestinsky"],
    ["who made a voyage to the \"new world\"?", "christopher columbus", "amerigo vespucci", "john cabot", "ferdinand magellan", "james cook", "henry hudson", "zheng he"],
    ["where were the ancient olympic games held?", "olympia", "athens", "thessaloniki", "corinth", "thebes", "thiva", "pergamon", "cyrene", "miletus", "marathon"],
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
    ["which country ruled over cuba from 1906 to 1909?", "united states", "canada", "spain", "mexico", "france", "portugal", "ireland", "united kingdom"],
    ["what is the largest verified impact structure on earth?", "vredefort", "chicxulub", "sudbury", "popigai", "manicouagan", "acraman", "morokweng", "kara", "beaverhead", "tookoonooka", "charlevoix", "siljan ring", "karakul"],
    ["when was the fall of the berlin wall?", "1989", "1988", "1987", "1986", "1990", "1991", "1985", "1984", "1983", "1982", "1981"],
    ["where was the location of napoleon's second exile and eventual death?", "saint helena", "ascension island", "tristan da cunha", "corsica", "elba", "sardinia", "malta", "crete", "guadeloupe", "martinique", "barbados"]
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
    ["what city did anne frank hide in from the nazis?", "amsterdam", "brussels", "antwerp", "rotterdam", "the hague", "düsseldorf", "strasbourg", "paris", "luxembourg", "london", "berlin"],
    ["where were the first modern olympic games held?", "athens", "paris", "london", "stockholm", "berlin", "amsterdam", "vienna", "budapest", "prague", "warsaw", "munich", "brussels", "antwerp", "thessaloniki"],
];
const hyperspecificQuestions = [
    ["which candidate received the least amount of votes in the 1964 illinois house of representatives election?", "hellmut w. stolle", "alfred b. two", "norbert l. lundberg", "raymond j. kahoun", "j. theodore meyer", "romie j. palmer", "james d. heiple", "richard l. lodestro", "david w. johnson", "jack d. songer", "eugene t. devitt", "sydney l. perkins", "edward a. bundy", "jack e. walker", "paul k. zeman", "oscar hansen", "john f. wall", "allan l. schoeberlein", "carl t. hunsicker", "ben c. blades"],
    ["in the last german election before the nazis took over, exactly how many seats did the nazi party win?", "288", "120", "81", "73", "52", "19", "430", "100", "77", "301", "401", "62", "370", "219", "121", "177", "352", "125", "58", "170", "320", "312", "49", "298", "196", "388", "488", "588", "188", "88", "14"],
    ["from 1889 to 1947, what was the government type of imperial japan?", "unitary parliamentary semi-constitutional monarchy", "unitary absolute monarchy", "under military occupation", "unitary parliamentary constitutional monarchy", "unitary elective absolute monarchy", "unitary parliamentary elective semi-constitutional monarchy", "unitary parliamentary elective constitutional monarchy", "federal absolute monarchy", "federal parliamentary semi-constitutional monarchy", "federal parliamentary constitutional monarchy", "federal parliamentary elective semi-constitutional monarchy", "federal parliamentary elective constitutional monarchy", "federal elective absolute monarchy"],
    ["out of the following, who was a prussian military commander during the battle of kolding?", "eduard von fransecky", "frederick rubeck bülow", "olaf rye", "c.f. moltke", "albert von rauch", "cäsar rüstow", "maximilian von versen", "karl von bülow"],
    ["who was the fourth librarian of congress?", "john silva meehan", "john j. beckley", "patrick magruder", "george watterston", "john gould stephenson", "ainsworth rand spofford", "john russell young", "herbert putnam", "archibald macleish", "luther h. evans", "lawrence quincy mumford", "daniel j. boorstin", "james h. billington", "carla hayden", "john jacob astor iv", "george w. armstrong"],
    ["how many votes did abraham lincoln receive in the new salem precint during his campaign for the illinois house of representatives in 1832?", "277", "278", "279", "280", "281", "282", "283", "284", "285", "286", "287", "288", "289", "290", "291", "292", "293", "294", "295", "296", "297", "298", "299", "300", "276", "275", "274", "273", "272", "271", "270", "269", "268", "267", "266", "265", "264", "263", "262", "261", "260", "259", "258", "257", "256", "255", "254", "253", "252", "251", "250"],
    ["what year was iceland's parliament established?", "930", "940", "950", "960", "970", "980", "990", "1000", "1010", "1020", "1030", "1040", "1050", "1060", "1070", "1080", "1090", "1100", "1110", "1120", "1130", "1140", "1150", "1160", "1170", "1180", "1190", "1200", "1210", "1220", "1230", "1240", "1250", "1260", "1270", "1280", "1290", "1300", "1310", "1320", "1330", "1340", "1350", "1360", "1370", "1380", "1390", "1400", "1410", "1420", "1430", "1440", "1450", "1460", "1470", "1480", "1490", "1500", "920", "910", "900", "890", "880", "870", "860", "850", "840", "830", "820", "810", "800", "790", "780", "770", "760", "750", "740", "730", "720", "710", "700", "690", "680", "670", "660", "650", "640", "630", "620", "610", "600", "590", "580", "570", "560", "550", "540", "530", "520", "510", "500"],
    ["who was the english commander during the battle of morlaix?", "william de bohun, 1st earl of northampton", "thomas beaufort, duke of exeter", "john holland, 1st duke of exeter", "richard fitzalan, 3rd earl of arundel", "robert de ashton", "john beaumont, 4th baron beaumont", "guy bryan, 1st baron bryan", "simon burley", "hugh calveley", "reynold cobham, 1st baron cobham of sterborough", "john de cobham, 2nd baron cobham of kent", "philip courtenay", "walter manny, 1st baron manny", "robert morley, 2nd baron morley", "john perbroun", "william latimer, 4th baron latimer", "ralph de spigumell", "peter bard", "thomas percy, 1st earl of worchester", "edward, 2nd duke of york", "john peche", "richard pembridge", "michael de la pole, 1st earl of suffolk", "robert ufford, 1st earl of suffolk"],
    ["who was the united states attorney general from 1933 to 1939?", "homer stille cummings", "william d. mitchell", "frank murphy", "robert h. jackson", "francis biddle", "tom c. clark", "j. howard mcgrath", "james p. mcgranery", "herbert brownell jr.", "william p. rogers", "robert f. kennedy", "nicholas katzenbach", "john g. sargent", "harlan f. stone", "harry m. daugherty", "a. mitchell palmer", "thomas watt gregory", "james c. mcreynolds"],
    ["who was the first vice governor-general of the congo free state under governor-general théophile wahis?", "francis dhanis", "camille coquilhat", "henri gondry", "herman ledeganck", "camille janssen", "émile wangermée", "alphonse van gèle", "paul costermans", "félix fuchs", "albert lantonnois van rode", "francis de winton", "eugène henry", "maurice lippens", "martin rutten", "auguste tilkens", "pierre ryckmans", "eugène jungers", "léo pétillon", "hendrik cornelis", "théophile wahis"],
    ["how many seats did amtsakhara win in the 2022 abkhazian parliamentary election?", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "3", "2", "1"],
    ["what is the name of the 18th section of the niue constitution act?", "public servants may become candidates or be elected", "executive authority vested in the crown", "cabinet of ministers of niue", "ministers to be collectively responsible", "premier of niue", "appointment of ministers after election pf remier", "vote of confidence in cabinet", "vacation of office by ministers", "temporary ministers", "acting premier", "official oath", " allocation of responsibilities to ministers", "meetings of cabinet", "rules, other enactments, and decisions of cabinet", "clerk of the cabinet", "seal of niue", "niue assembly", "nationality and residential qualifications of electors and candidates", "members disqualified from becoming public servants or interested in government contracts", "speaker of niue assembly", "members to take oath of allegiance", "procedure of niue assembly", "languages", "privileges of niue assembly and its members", "remuneration of premier, other ministers, other members of the niue assembly, and the speaker", "dissolution of niue assembly", "clerk of the niue assembly", "power to make laws", "introduction of bills, etc, into niue assembly", "restrictions with regard to financial measures", "special provisions with regard to measures affecting the criminal law or personal status", "special provisions with regard to measures affecting the niue public service", "special provisions with regard to measures affecting niuean land", "when bills become law", "power of the niue assembly to repeal or armend this constitution", "new zealand parliament not to legislate for niue, and new zealand subordinate legislation not to apply to niue, except with consent", "high court established", "judges and commissioners of the high court", "jurisdiction of commissioners of the high court", "land court established", "judges and commissioners of the land court", "jurisdiction of commissioners of the high court", "land court established", "judges and commissioners of the land court", "jurisdiction of commissioners of the land court", "land appellate court of niue", "judges of the land appellate court", "appointment of judges and commissioners", "tenure of office of judges and commissioners", "temporary judges and commissioners", "acting chief justice of the high court and acting chief judge of the land court", "removal of judges and commissioners from office", "salaries of judges and commissioners", "appeal from high court to court of appeal of new zealand", "transmission of order of court of appeal on appeal", "justices of the peace", "oath of allegiance and judicial oath", "chief justice to comment on certain bills", "legislative control of public revenue and expenditure", "niue government account", "annual estimates and appropriations", "cabinet to supervise expenditure", "audit", "health, education, and other social services", "niue public service", "secretary to the government", "niue public service commission", "acting members of commission", "procedure of commission", "delegation of powers", "functions and powers of commissioners", "appointments to niue public service", "commission to make certain reports and recommendations to assembly", "existing law to continue", "premier and cabinet", "niue assembly", "the high court", "the land court", "the land appellate court", "appeals from high court", "public revenues", "the niue public service", "seal of niue", "interpretation"],
    ["which scottish clan once owned the asloun castle in aberdeenshire?", "forbes", "agnew", "anstruther", "arbuthnott", "arthur", "bannerman", "barclay", "borthwick", "boyd", "boyle", "brodie", "broun", "bruce", "buchan", "buchanan", "burnett", "cameron", "campbell", "carmichael", "carnegie", "carruthers", "cathcart", "charteris", "chattan", "chisholm", "cochrane", "colquhoun", "colville", "cranstoun", "crichton", "cumming", "cunningham", "darroch", "davidson", "dewar", "drummond", "dunbar", "dundas", "durie", "elliot", "elphinstone", "erskine", "farquharson", "fergusson", "forsyth", "fraser", "fraser of lovat", "gordon", "graham", "grant", "gregor", "grierson", "gunn", "guthrie", "haig", "haldane", "hamilton", "hannay", "hay", "henderson", "home", "hope", "hunter", "irvine", "jardine", "johnstone", "keith", "kennedy", "kerr", "kincaid", "lamont", "leask", "lennox", "leslie", "lindsay", "livingstone", "lockhart", "lumsden", "lyon", "macalister", "macbean", "macdonald", "macdonald of clanranald", "macdonald of sleat", "macdonell of glengarry", "macdonald of keppoch", "macdonald of glencoe", "macdougall", "macdowall", "macintyre", "mackay", "mackenzie", "mackinnon", "mackintosh", "maclachlan", "maclaine of lochbuie", "maclaren", "maclean", "maclennan", "macleod", "macleod of lewis", "macmillan", "macnab", "macnaghten", "macneacail", "macneil", "macpherson", "mactavish", "macthomas", "maitland", "makgill", "malcolm", "mar", "marjoribanks", "matheson", "menzies", "moffat", "moncreiffe", "montgomery", "morrison", "munro", "murray", "napier", "nesbitt", "nicolson", "ogilvy", "oliphant", "primrose", "pringle", "ramsay", "rattray", "riddell", "robertson", "rollo", "rose", "ross", "ruthven", "sandilands", "scott", "scrymgeour", "sempill", "shaw", "sinclair", "skene", "spens", "stirling", "strange", "stuart of bute", "sutherland", "swinton", "trotter", "urquhart", "wallace", "wedderburn", "wemyss", "wood ", "abercromby", "abernethy", "adair", "adam", "aikenhead", "ainslie", "aiton", "allardice", "anderson", "armstrong", "arnott", "auchinleck", "baillie", "baird", "balfour", "bannatyne", "baxter", "bell", "belshes", "bethune", "beveridge", "binning", "bissett", "blackadder", "blackstock", "blair", "blane", "blyth", "boswell", "brisbane", "butter", "byres", "cairns", "calder", "caldwell", "callender", "campbell of breadalbane", "campbell of cawdor", "cheyne", "chalmers", "clelland", "clephane", "cockburn", "congilton", "craig", "crawford", "crosbie", "dalmahoy", "dalrymple", "dalzell", "dennistoun", "don", "douglas", "duncan", "dunlop", "edmonstone", "fairlie", "falconer", "fenton", "fleming", "fletcher", "forrester", "fotheringham", "fullarton", "galbraith", "galloway", "gardyne", "gartshore", "gayre", "ged", "gibsone", "gladstains", "glas", "glen", "glendinning", "gray", "haliburton", "halkerston", "halket", "hepburn", "heron", "herries", "hogg", "hopkirk", "horsburgh", "houston", "hutton", "inglis", "innes", "kelly", "kinloch", "kinnaird", "kinnear", "kinninmont", "kirkcaldy", "kirkpatrick", "laing", "lammie", "langlands", "learmonth", "little", "logan", "logie", "lundin", "lyle", "macalpin(e)", "macaulay", "macbrayne", "macdonald of dunnyveg", "macduff", "macewen", "macfarlane", "macfie", "macgillivray", "macinnes", "maciver", "mackie", "maclellan", "macphail", "macquarrie", "macqueen", "macrae", "masterton", "maule", "maxton", "maxwell", "maccorquodale", "macculloch", "mackerrell", "meldrum", "melville", "mercer", "middleton", "moncur", "monteith", "monypenny", "mouat", "moubray", "mow", "muir", "nairn", "nevoy", "newlands", "newton", "norvel", "ochterlony", "orrock", "paisley", "paterson", "pennycook", "pentland", "peter", "pitblado", "pitcairn", "pollock", "polwarth", "porterfield", "preston", "purves", "rait", "ralston", "renton", "roberton", "rossie", "russell", "rutherford", "schaw", "seton", "skirving", "somerville", "spalding", "spottiswood", "stewart", "stewart of appin", "stirling", "strachan", "straiton", "sydserf", "symmers", "tailyour", "tait", "tennant", "troup", "turnbull", "tweedie", "udny", "vans", "walkinshaw", "wardlaw", "watson", "wauchope", "weir", "whitefoord", "whitelaw", "wishart", "young"],
    ["where was the 17th oregon secretary of state born on september 5, 1919?", "carthage, texas", "paola, kansas", "talent, oregon", "black diamond, washington", "calipatria, california", "fruitland, idaho", "polson, montana", "west wendover, nevada", "nephi, utah", "globe, arizona", "tucumcari, new mexico", "pauls valley, oklahoma", "cherry hills village, colorado", "soldotna, alaska", "wailea, hawaii", "buffalo, wyoming", "chadron, nebraska", "belle fourche, south dakota", "grafton, north dakota", "litchfield, minnesota", "independence, iowa", "heber springs, arkansas", "beacon falls, connecticut", "georgetown, delaware", "dade city, florida", "fort valley, georgia", "metropolis, illinois", "monticello, indiana", "princeton, kentucky", "plaquemine, louisiana", "gardiner, maine", "denton, maryland", "orleans, massachusetts", "marshall, michigan", "columbia, mississippi", "glendale, missouri", "wolfeboro, new hampshire", "paulsboro, new jersey", "chittenango, new york", "archer lodge, north carolina", "port clinton, ohio", "sayre, pennsylvania", "exeter, rhode island", "abbeville, south carolina", "dunlap, tennessee", "randolph, vermont", "covington, virginia", "lewisburg, west virginia", "columbus, wisconsin"],
    ["in the 1994 german federal election, which political party received the least amount of party-list votes?", "federation of socialist workers", "centrep arty", "christian league", "bürgerrechtsbewegung solidarität", "marxist–leninist party", "party of the willing to work and socially vulnerable", "christian centre", "car-drivers' and citizens' interests party", "bavaria party", "statt party", "party of bible-abiding christians", "human environment animal protection", "natural law party", "ecological democratic party", "the grays – gray panthers", "the republicans", "party of democratic socialism", "free democratic party", "alliance 90/the greens", "christian social union", "christian democratic union", "social democratic party"]
];
//# sourceMappingURL=script.js.map