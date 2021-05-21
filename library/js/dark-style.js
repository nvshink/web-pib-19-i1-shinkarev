let butt = document.getElementById("button")
if (localStorage.themeMode == 1) {}
else
{
    localStorage.setItem('themeMode', 0)
}
let mainBackground = document.getElementById("back")
let chTxt = document.getElementsByClassName("change-text")
let scrollH = document.getElementsByClassName("name-scroll-block")
let footer = document.getElementById("footer")
if (localStorage.themeMode == 1) {
    mainBackground.style.background = "rgb(33,33,33)"
    for (var i = 0; i < chTxt.length; i++) {
        chTxt[i].style.color = "white"
    }
    for (var i = 0; i < scrollH.length; i++) {
        scrollH[i].style.color = "white"
    }
    footer.style.color = "black"
    butt.style.background = "center / contain no-repeat url(../content/sun_icon.png)"
}
butt.addEventListener("click", () => {
    if (localStorage.themeMode == 1) {
        mainBackground.style.background = "rgb(255,255,255)"
        for (var i = 0; i < chTxt.length; i++) {
            chTxt[i].style.color = "black"
        }
        for (var i = 0; i < scrollH.length; i++) {
            scrollH[i].style.color = "black"
        }
        footer.style.color = "white"
        localStorage.themeMode = 0
        butt.style.background = "center / contain no-repeat url(../content/moon_icon.png)";
    }
    else {
        mainBackground.style.background = "rgb(33,33,33)"
        for (var i = 0; i < chTxt.length; i++) {
            chTxt[i].style.color = "white"
        }
        for (var i = 0; i < scrollH.length; i++) {
            scrollH[i].style.color = "white"
        }
        footer.style.color = "black"
        butt.style.background = "center / contain no-repeat url(../content/sun_icon.png)"
        localStorage.themeMode = 1
    }
})