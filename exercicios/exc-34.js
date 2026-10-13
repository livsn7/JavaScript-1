/*34. (Verdadeiro ou Falso) Em uma estrutura if...else if...else,
assim que uma condição é verdadeira, o JavaScript executa o bloco correspondente e ignora todos os outros blocos
restantes daquela estrutura. */
let nota = 8;

if (nota >= 9) {
    console.log("Excelente");
} else if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
/*(X) Verdadeiro  ( ) Falso */