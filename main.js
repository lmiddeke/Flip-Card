document.querySelector('#button').addEventListener('click', launch)
document.querySelector('#card').addEventListener('click', flip)


function launch() {
    const cardFront = document.querySelector('#frontForm').value
    const cardBack = document.querySelector('#backForm').value

    document.querySelector('#cardFront').innerText = cardFront
}

function flip() {
    card.classList.toggle("flipper")
}