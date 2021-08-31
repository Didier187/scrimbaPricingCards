
const signUpCat = document.getElementById('sign-up-cat')
const signUpLion = document.getElementById('sign-up-lion')
const signUpTiger = document.getElementById('sign-up-tiger')
const cardCat = document.getElementsByClassName('card-cat')
const cardLion = document.getElementsByClassName('card-lion')
const cardTiger = document.getElementsByClassName('card-tiger')
const cards = document.getElementsByClassName('card')

// 🐱
function selectedCatPackage(){    
    cardCat[0].classList.add('selected')
    cardCat[0].classList.remove('unselected')
    document.getElementById('cat-price').style.color="#ffd60a"
    document.getElementById('tiger-price').style.color="inherit"
    document.getElementById('lion-price').style.color="inherit"
    cardLion[0].classList.remove('selected')
    cardLion[0].classList.add('unselected')
    cardTiger[0].classList.remove('selected')
    cardTiger[0].classList.add('unselected')    
}

//  🦁

function selectedLionPackage(){
    cardLion[0].classList.add('selected')
    cardLion[0].classList.remove('unselected')    
    document.getElementById('lion-price').style.color="#ffd60a"
    document.getElementById('cat-price').style.color="inherit"
    document.getElementById('tiger-price').style.color="inherit"    
    cardTiger[0].classList.remove('selected')
    cardTiger[0].classList.add('unselected')    
    cardCat[0].classList.remove('selected')
    cardCat[0].classList.add('unselected')
}

//  🐯
function selectedTigerPackage(){
    cardTiger[0].classList.add('selected')
    cardTiger[0].classList.remove('unselected')    
    document.getElementById('tiger-price').style.color="#ffd60a"
    document.getElementById('lion-price').style.color="inherit"
    document.getElementById('cat-price').style.color="inherit"    
    cardCat[0].classList.remove('selected')
    cardCat[0].classList.add('unselected')    
    cardLion[0].classList.remove('selected')
    cardLion[0].classList.add('unselected')
    
}

let catPackage = cards[0]
let lionPackage = cards[1]
let tigerPackage = cards[2]

catPackage.addEventListener("click", selectedCatPackage)
lionPackage.addEventListener("click", selectedLionPackage)
tigerPackage.addEventListener("click", selectedTigerPackage)

if(window.innerWidth < 800){
    const text = "You are seeing this because you are using a small screen, this exercise looks better on larger screens"
    const taglineEl = document.getElementsByClassName('tagline')
    taglineEl[0].textContent = text
    taglineEl[0].style.color = "red"

}
