let estoque = 12;
let quantidade = 3;
let precoUnitario = 80;
let saldoCliente = 220;
let clienteVIP = true; 

let subtotal = quantidade * precoUnitario;
let valorFinal = clienteVIP ? subtotal * 0.90 : subtotal;

2. Validações e resultado
if (quantidade <= 0) {
    console.log("Rejeitado: Quantidade inválida.");
} else if (quantidade > estoque) {
    console.log("Rejeitado: Estoque insuficiente.");
} else if (saldoCliente < valorFinal) {
    console.log(`Rejeitado: Saldo insuficiente. (Necessário: R$ ${valorFinal}, Saldo: R$ ${saldoCliente})`);
    
} else {
    console.log(`Compra AUTORIZADA! Valor final: R$ ${valorFinal}`);
}