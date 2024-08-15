// notice data
const notices: NoticeData = {
    "about": ["about", "this is a generic history game about history and stuff (cause i like history)<br /><br />follow me on <a href='https://twitter.com/_rxnin_'>twitter</a>"],
    "questions": [null, "due to the scarcity of questions in this dataset, the number of questions has been set to $1."],
    "credits": ["credits", "programming by me<br />design by me<br />ideas by me and my mom (the progress bar)"]
};

// functions
(<HTMLButtonElement>document.getElementById("home-about")).onclick = () => {
    showNotice("about")
}
(<HTMLButtonElement>document.getElementById("home-settings")).onclick = () => {
    showNotice("settings")
}
(<HTMLButtonElement>document.getElementById("home-credits")).onclick = () => {
    showNotice("credits")
}

function showNotice(title: string, ...args) {
    let notice, close
    if (title !== "settings") {
        notice = <HTMLDivElement>document.getElementById("notice")
    } else {
        notice = <HTMLDivElement>document.getElementById("settings")
    }

    if (title !== "settings") {
        close = <HTMLDivElement>document.getElementById("notice-close")
    } else {
        close = <HTMLDivElement>document.getElementById("settings-close")
    }

    const t = <HTMLDivElement>document.getElementById("notice-title")
    const c = <HTMLDivElement>document.getElementById("notice-content")

    if (notices[title] && !notices[title][0]) t.innerText = "notice"
    else if (notices[title]) t.innerText = notices[title][0]

    if (title !== "settings") {
        let cx = (" " + notices[title][1]).slice(1)
        for (let i = 0; i < args.length; i++) {
            const r = new RegExp(`\\$${i + 1}`, "gi")
            cx = cx.replace(r, args[i])
        }
        c.innerHTML = cx
    }

    notice.classList.remove("none")

    close.onclick = () => {
        notice.classList.add("zoom-out")
        setTimeout(() => {
            notice.classList.add("none")
            notice.classList.remove("zoom-out")
        }, 1000)
    }
}