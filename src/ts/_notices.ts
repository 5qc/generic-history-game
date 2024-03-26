// notice data
const notices: NoticeData = {
    "about": "this is a generic history game about history and stuff (cause i like history)"
}

// functions
const notice = <HTMLDivElement>document.getElementById("notice");
(<HTMLButtonElement>document.getElementById("home-about")).onclick = () => {
    showNotice("about")
}

function showNotice(title: string) {
    const t = <HTMLDivElement>document.getElementById("notice-title")
    const c = <HTMLDivElement>document.getElementById("notice-content")

    t.innerText = title
    c.innerText = notices[title]

    notice.classList.remove("none")

    notice.onclick = () => {
        notice.classList.add("zoom-out")
        setTimeout(() => {
            notice.classList.remove("zoom-out")
            notice.classList.add("none")
        }, 1000)
    }
}