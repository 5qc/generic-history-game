(<HTMLButtonElement>document.getElementById("reset")).onclick = resetButton

function resetButton() {
    numberOfQuestions.value = "10";
    locationEl.value = "";
    homePlay.setAttribute("data", "");
    (<HTMLSpanElement>document.querySelector(".title > span")).innerText = "generic history game"
    document.querySelector("title").innerText = "generic history game"
}