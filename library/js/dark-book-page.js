let downloadText = document.getElementById("download-text")
let downloadImg = document.getElementById("download-img")
if (localStorage.themeMode == 0) {

    downloadText.style.color = "white"
    downloadImg.style.background = "url(../content/download_icon.png)"
}
else {
    downloadText.style.color = "black"
    downloadImg.style.background = "url(../content/download_icon_dark.png)"
}
butt.addEventListener("click", () => {
    if (localStorage.themeMode == 0) {

        downloadText.style.color = "white"
        downloadImg.style.background = "url(../content/download_icon.png)"
    }
    else {
        downloadText.style.color = "black"
        downloadImg.style.background = "url(../content/download_icon_dark.png)"
    }
})
