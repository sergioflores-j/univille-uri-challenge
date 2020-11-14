// @ts-check

// Específico para submissão no URI
// var input = require('fs').readFileSync('/dev/stdin', 'utf8');
// var lines = input.split('\n');

const input = require('fs').readFileSync('./input.txt', 'utf8');
const lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const [testCasesNum, ...otherLines] = lines;
const results = [];

for (let i = 0; i < Number(testCasesNum); ++i) {
  const [studentsNum, grades] = otherLines;
  const gradesArr = grades.split(' ');

  // ? Ordena a lista pela maior nota
  const gradesSorted = [...gradesArr].sort((a, b) => Number(b) - Number(a));

  // ? Encontra quem não trocou de posição
  results[i] = gradesSorted.reduce((res, grade, index) => {
    if (grade === gradesArr[index]) return res + 1;

    return res;
  }, 0);

  // ? Limpa as linhas utilizadas
  otherLines.splice(0, 2);
}

console.log(results.join('\n'));
