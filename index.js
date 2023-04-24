let elementFromBrowser = document.getElementById('title')


elementFromBrowser.textContent = "I am javascript I control you"

let button = document.getElementById("button1")

button.addEventListener("click", ()=> {
    elementFromBrowser.style.display = "none"
})

let button2 = document.getElementById('unhidebutton')

button2.addEventListener("click", ()=> {
    elementFromBrowser.style.display = "inline"
})