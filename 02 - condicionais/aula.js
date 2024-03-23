
const numero = 2;
const ehNumeroPar = (numero % 2) === 0;

if (ehNumeroPar) {
    console.log('O número é par');
} else {
    console.log('O número é impar');
}
if (!ehNumeroPar){
    console.log('onumeroehimpar')
};


// % RESTO DA DIVISAO 

// === COMPARA EXATAMENTE
// == IGNORA O TIPO DA VARIAVEL (NUMERO, STRING...)

if(numero === 0){
    console.log('Voce digitou numero inválido')
}else if(ehNumeroPar){
    console.log('Sim, este número é par.')
} else {
    console.log('Não, este número não é par, é impar')
};


// se variavel booleana coloco no nome da variavel is... 
// exemplo isOddNumber inEvenNumber