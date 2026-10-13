/*21. No switch...case, qual bloco é executado se nenhuma condição for atendida?  */
let opcao = 4;

switch (opcao) {
    case 1:
        console.log("Opção 1");
        break;
    case 2:
        console.log("Opção 2");
        break;
    default:
        console.log("Opção não encontrada");
}

/*A) break  B) else  C) default (correta)  D) fallback */