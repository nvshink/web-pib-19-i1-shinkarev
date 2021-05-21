let dayQ = document.getElementById("day-quote")
let dayQtext = document.getElementById("day-quote-text")
if (localStorage.themeMode == 0) {
    dayQ.style.textShadow = "white 0px 1px 0px"
    dayQtext.style.color = "white"
}
    else {
        dayQ.style.textShadow = "black 0px 1px 0px"
        dayQtext.style.color = "black"

    }
butt.addEventListener("click", () => {
if (localStorage.themeMode == 0) {
    dayQ.style.textShadow = "white 0px 1px 0px"
    dayQtext.style.color = "white"
}
    else {
        dayQ.style.textShadow = "black 0px 1px 0px"
        dayQtext.style.color = "black"

    }
})
