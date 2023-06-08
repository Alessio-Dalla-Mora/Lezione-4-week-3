const bordercreator = function(){

    const boardContainer = document.getElementById('board')
    console.log(boardContainer)

    for(let i = 0; i<76; i++){
        let boardCell = document.createElement('span')
        boardCell.classList.add('board-Cell')
        boardCell.innerHTML = (i+1)
        console.log(boardCell)

        boardContainer.appendChild(boardCell)
    }
}
bordercreator()


const buttonExtract = document.getElementById('submit')

const numberExctract = function(){
    const numberTarget = document.getElementById('number-display')
    numberTarget.innerText = Math.floor(Math.random()*77)

}
buttonExtract.onclick = numberExctract

const myButton = document.getElementById('randomButton')
myButton.addEventListener('click',myFunction)