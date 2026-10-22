let ladoA = 6;
let ladoB = 6;
let ladoC = 4;

if (ladoA > 0 && ladoB > 0 && ladoC > 0 && ladoA+ladoB < ladoC){
    console.log(`É um triangulo`)
} else if (ladoA === ladoB && ladoC === ladoA && ladoB){
    console.log(`Triangulo Equilatero`)
} else if (ladoA === ladoB || ladoC === ladoB || ladoA === ladoC){
    console.log(`Isóceles`)
} else {
    console.log(`Escaleno`)
}