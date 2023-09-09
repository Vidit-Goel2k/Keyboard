const body = document.querySelector("body")
const key = document.querySelector(".key")

const displayKey = (e) => {
    key.innerText = `Key = ${e.key}`
}

window.addEventListener("keydown", (e) => {
  displayKey(e)  
})