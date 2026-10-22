let estoque = 4;
let quantidadePedida = 6;

if (quantidadePedida > 0 && quantidadePedida <= estoque){
    console.log(`Venda autorizada`)
} else if (quantidadePedida < 0 && quantidadePedida <= estoque){
    console.log(`a quantidade pedida é menor que zero`)
} else if (quantidadePedida > 0 && quantidadePedida > estoque){
    console.log(`Menor que o estoque`)
}