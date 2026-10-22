let idade = 22;
let possuiCNH = false;

if (idade >= 18 && possuiCNH){
    console.log(`Pode dirigir`)
} else if ( idade < 18 && possuiCNH) {
    console.log(`idade incorreta`)
} else if (idade >= 18 && possuiCNH === false) {
    console.log(`Não possui CNH`)
}