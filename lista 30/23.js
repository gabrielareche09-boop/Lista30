let peso = 72;
let altura = 1.75;
let imc = peso / (altura ** 2)

if(imc < 18.5){
    console.log("Abaixo do peso")
} else if(imc >= 18.5 && imc < 25){
    console.log(`Faixa considerada normal`)
} else if (imc >= 25 && imc < 30){
    console.log(`Sobrepeso`)
} else if (imc >= 30){
    console.log(`Obesidade`)
}