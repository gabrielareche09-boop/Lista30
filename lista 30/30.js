let idade = 17;
let notaProva = 82;
let frequencia = 88;
let autorizacaoResponsavel = true;
let possuiPendencia = false;


if (idade > 14 && idade < 17|| autorizacaoResponsavel&& notaProva >= 70 && frequencia >= 80 && autorizacaoResponsavel == true && possuiPendencia == false) {
    console.log(`Inscrição feita.`);
}else{
    console.log(`Inscrição negada.`);
}