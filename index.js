let nome = window.prompt("Qual o seu nome?")
    window.alert(`Olá, ${nome}, vamos brincar um pouco`)
let idade = window.prompt("Qual a sua idade")
if(idade<0){
    window.alert("[Erro] Coloque uma idade válida")
} else if(idade>0 && idade<12){
    window.alert("Você é criança")
} else if(idade>11 && idade<18){
    window.alert("Você é adolescente")
} else if(idade>17 && idade<60){
    window.alert("Você é adulto")
} 
else {
    window.alert(`${nome}, você é idoso(a)`)
}