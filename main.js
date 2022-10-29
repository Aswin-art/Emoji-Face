const smileEl = document.querySelector('.smile')
const emotionlessEl = document.querySelector('.emotionless')
const angryEl = document.querySelector('.angry')

const smileBtn = document.getElementById('btn-smile')
const emotionlessBtn = document.getElementById('btn-emotionless')
const angryBtn = document.getElementById('btn-angry')

smileBtn.addEventListener('click', () => {
    smileEl.style.display = 'block'
    emotionlessEl.style.display = 'none'
    angryEl.style.display = 'none'
})
emotionlessBtn.addEventListener('click', () => {
    smileEl.style.display = 'none'
    emotionlessEl.style.display = 'block'
    angryEl.style.display = 'none'
})
angryBtn.addEventListener('click', () => {
    smileEl.style.display = 'none'
    emotionlessEl.style.display = 'none'
    angryEl.style.display = 'block'
})