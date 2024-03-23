/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */


const const_PrecoCombustivel = 5.79;
const const_KmPorLitros = 10;
const const_distanciaEmKm = 100;

var var_LitrosConsumidos =  const_distanciaEmKm / const_KmPorLitros;
var var_valorGasto = var_LitrosConsumidos * const_PrecoCombustivel;
console.log(var_valorGasto);
