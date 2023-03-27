const holes = [...document.querySelectorAll('.hole')]
const scoreSpan = document.querySelector('.score span')
let score = 0
const sound = new Audio("spongebob-laugh.mp3")

function game() {
    const i = Math.floor(Math.random() * holes.length)
    const hole = holes[i]

    const img = document.createElement('img')
    img.classList.add('mole')
    img.src = "th.png"

    img.addEventListener('click', () => {
        score++
        scoreSpan.textContent = score
        sound.play()
        clearTimeout(timer)
        setTimeout(() => {
            hole.removeChild(img)
            game()
        }, 500)
    })

    hole.appendChild(img)

    timer = setTimeout(() => {
        hole.removeChild(img)
        game()
    }, 1500)
}
game()