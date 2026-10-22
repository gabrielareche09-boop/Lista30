let valorCompra = 150;
let clienteVIP = true;
let desconto = valorCompra * 0.20;
if (valorCompra >= 200 || clienteVIP) {
    console.log(`O valor final é " ${valorCompra-desconto}`);
}