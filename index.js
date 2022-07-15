let mynotes = []
let inputEl = document.getElementById("input-el")
let saveBtn = document.getElementById("save-btn")
let ulEl = document.getElementById("ul-el")



//SAVE BUTTON FUNTION
function gettingtext() {
    mynotes = inputEl.value 
    let li = document.createElement("li")
    li.textContent = mynotes
    ulEl.append(li)
}
//LISTENING FOR ENTER

document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        gettingtext()
    }
})