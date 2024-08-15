const locationEl = <HTMLInputElement>document.getElementById("location")

const fieldset = <HTMLDivElement>document.querySelector(".fieldset")
locationEl.onkeyup = () => {
    const z = locationEl.value
    
    let i = 0
    if (locationEl.value === "") {
        fieldset.style.display = "none"
    } else {
        for (let x of locationData.locations) {
            const r = new RegExp(`\\b(${z})\\w*\\b`, "g")
            if (i === 0) {
                fieldset.innerHTML = ""
                fieldset.style.display = "block"
            }
            if (!r.test(x[0])) continue

            fieldset.innerHTML += `<div class="result" data-id="${x[1]}">${x[0]}</div>`;
    
            (<HTMLDivElement>document.querySelector(`[data-id="${x[1]}"]`)).onclick = () => {
                fieldset.style.display = "none"
                locationEl.value = x[0];
                (<HTMLButtonElement>document.getElementById("home-play")).setAttribute("data", x[1]);

                const n = x[0].split(", ")[0] + " history game";
                (<HTMLSpanElement>document.querySelector(".title > span")).innerText = n
                document.querySelector("title").innerText = n
            }
    
            i += 1
        }
    }
}