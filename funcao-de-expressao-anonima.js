//funcao de expressao para gerar um numero aleatorio entre um intervalo especificado 
const gerarUmNumeroAleatorio = function(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
// chamando a funcao para gerar um numero aleatorio entre 1 e 100
const numeroAleatorio = gerarUmnumeroAleatorio(1,100);
console.log("Numero aleatorio:" , numeroAleatorio);