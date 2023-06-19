let nome = document.getElementById("nome")
let nota1 = document.getElementById("HTML")
let nota2 = document.getElementById("CSS")
let nota3 = document.getElementById("JS")
let media 
let resultado = document.getElementById("resultado")


function calcule(){
    media = (parseInt(nota1.value) + parseInt(nota2.value) + parseInt(nota3.value)) / 3
    resultado.innerHTML = nome.value + " sua media é " + parseInt(media)
}
