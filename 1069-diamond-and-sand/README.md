# Diamantes e Areia

## Problema

URI Online Judge | [1548](https://www.urionlinejudge.com.br/judge/en/problems/view/1069)

Test/Debug: [udebug](https://www.udebug.com/URI/1069)

### Descrição

João está trabalhando em uma mina, tentando retirar o máximo que consegue de diamantes "<>". 
Ele deve excluir todas as particulas de areia "." do processo e a cada retirada de diamante, novos diamantes poderão se formar.

Se ele tem como uma entrada .<...<<..>>....>....>>>., três diamantes são formados.
O primeiro é retirado de <..>, resultando  .<...<>....>....>>>.
Em seguida o segundo diamante é retirado, restando .<.......>....>>>. 
O terceiro diamante é então retirado, restando no final .....>>>., sem possibilidade de extração de novo diamante.

### Entrada

Deve ser lido um valor inteiro N que representa a quantidade de casos de teste. 
Cada linha a seguir é um caso de teste que contém até 1000 caracteres, incluindo "<,>, ."

### Saída

Você deve imprimir a quantidade de diamantes possíveis de serem extraídos em cada caso de entrada.

- Exemplo de entrada
```
2
<..><.<..>>
<<<..<......<<<<....>
```

- Exemplo de saída

```
3
1
```

## Solução

Para a solução foi utilizado a estrutura de dados **Array** juntamento com os métodos **filter** e **map** do JavaScript que possuem como complexidade `O(n)`.

Portanto, o pior cenário do algoritmo utilizado na solução é `O(n)`.
