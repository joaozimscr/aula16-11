function anda() {
    let circulo = document.querySelector('.circulo')
    let background = document.querySelector('.background')
    
    if (circulo.style.left !== '40px') {
        circulo.style.left = '40px'
        background.style.width = '70px'
    }else{
        circulo.style.left = '0px'
        background.style.width = '0px'
    }
}
