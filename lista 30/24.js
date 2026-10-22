let horas = 5;
let clienteConveniado = true;
let custoAdicional = 10;
let desconto = 0.8;

if(horas == 2){
    console.log(`Custo adicional de 10 reais${horas + custoAdicional}`);
}else if(clienteConveniado){
    console.log(`Cliente conveniado recebe 20% de desconto : ${horas * desconto}`);
}else if(horas <= 0 ){
    console.log("Rejeitado");
}