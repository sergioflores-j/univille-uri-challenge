/**
 * URI 1069: Diamantes e Areia
 * 
 * João está trabalhando em uma mina, tentando retirar o máximo que consegue de diamantes "<>". 
 * Ele deve excluir todas as particulas de areia "." do processo e a cada retirada de diamante, novos diamantes poderão se formar.
 * Se ele tem como uma entrada .<...<<..>>....>....>>>., três diamantes são formados.
 * O primeiro é retirado de <..>, resultando  .<...<>....>....>>>.
 * Em seguida o segundo diamante é retirado, restando .<.......>....>>>.
 * O terceiro diamante é então retirado, restando no final .....>>>., sem possibilidade de extração de novo diamante.
 * 
 * Entrada:
 * Deve ser lido um valor inteiro N que representa a quantidade de casos de teste. 
 * Cada linha a seguir é um caso de teste que contém até 1000 caracteres, incluindo "<,>, ."
 * 
 * Saída: 
 * Você deve imprimir a quantidade de diamantes possíveis de serem extraídos em cada caso de entrada.
 * 
 * Estrutura de dados utilizada: Arranjos
 * 
 */

// Específico para submissão no URI:
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

const input = require('fs').readFileSync('./input.txt', 'utf8');
const lines = input.split('\r\n');
const numTests = lines[0];
const linesDiamonds = [];

let i = 1;
while (i <= numTests) {
    let inputLine = lines[i];

    /* ? Removes the sand particles */

    inputLine = inputLine.replace(/[.]/g,'');
    inputLine = inputLine.split('');

    /* ? Identifies the diamonds */

    diamonds = [];
    diamonds = inputLine.filter((element, index, array) => {
        indexPreviousElement = index - 1;
        let previousElement = ' ';
        while (indexPreviousElement >= 0) {
            previousElement = array[indexPreviousElement];
            if (previousElement !== '') break;
            indexPreviousElement--;
        }

        if (element === '>' && previousElement == '<') {
            array[index] = '';
            array[indexPreviousElement] = '';
            return true;
        }
        return false;
    });

    /* ? Disregard the first index because it is the number of tests */
    linesDiamonds[i - 1] = diamonds.length;

    i++;
}

linesDiamonds.map(element => {
    console.log(element);
});