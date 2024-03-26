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
</style>`)