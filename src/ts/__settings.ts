const numberOfQuestions = <HTMLInputElement>document.getElementById("no-of-questions")

numberOfQuestions.onkeyup = () => {
    // remove anything but digits
    numberOfQuestions.value = numberOfQuestions.value.replace(/\D+/g, "")

    // check if number is within range 1-25
    if (Number(numberOfQuestions.value) > Number(numberOfQuestions.getAttribute("max"))) {
        numberOfQuestions.value = numberOfQuestions.getAttribute("max")
    } else if (Number(numberOfQuestions.value) < 1 && numberOfQuestions.value !== "") {
        numberOfQuestions.value = "1"
    }

    // then set value to the game
    maxQuestions = Number(numberOfQuestions.value)
}

const checkDifficulties = {
    "easy": true,
    "medium": true,
    "hard": true,
    "hyperspecific": true,
    "all": true,
    "LOCATION": true
}
function checkThoseDifficulties() {
    const number = Number(numberOfQuestions.value)
    // see which difficulties have more than 10 questions
    // and limit the number of questions on those that don't
    if (easyQuestions.length < number) checkDifficulties.easy = false
    if (mediumQuestions.length < number) checkDifficulties.medium = false
    if (hardQuestions.length < number) checkDifficulties.hard = false
    if (hyperspecificQuestions.length < number) checkDifficulties.hyperspecific = false
    if ([...easyQuestions, ...mediumQuestions, ...hardQuestions].length < number) checkDifficulties.all = false
    if (homePlay.getAttribute("data") && locationQuestions[homePlay.getAttribute("data")].length < number) checkDifficulties.LOCATION = false
}

numberOfQuestions.onchange = () => {
    checkThoseDifficulties()
}