let myButton = document.querySelector("button")
function handleClick(){
    alert('button was clicked')
}
myButton.addEventListener('click', handleClick)

let colorButton = document.querySelector("#random-color")
function randomColor(){
    document.body.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB}`
    alert("random color button clicked")
}
colorButton.addEventListener("click", randomColor)