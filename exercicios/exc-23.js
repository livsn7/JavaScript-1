/*23. O que acontece se a condição do for for deixada vazia, como em for (let i=0; ; i++)? */
// Atenção: este laço é infinito.
// Não execute sem colocar uma condição de parada.

for (let i = 0; ; i++) {
    console.log(i);

    if (i >= 5) {
        break;
    }
}

/*
A) O laço nunca executa.  
B) O laço executa apenas uma vez.  (correta)
C) O laço se torna infinito.  
D) O JavaScript gera um erro de sintaxe imediatamente. 
*/