/*44. (Verdadeiro ou Falso) O uso de let dentro do for (ex: for (let i = 0...))
garante que a variável i só exista dentro daquele laço. */
for (let i = 0; i < 3; i++) {
    console.log(i);
}

// A variável i não existe fora do laço.
// console.log(i); // Geraria ReferenceError.

/*(X) Verdadeiro ( ) Falso */