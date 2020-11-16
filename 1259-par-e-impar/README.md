
# # Pares e Ímpares

  

## Problema

  

URI Online Judge | [1259](https://www.urionlinejudge.com.br/judge/pt/problems/view/1259)

  

### Descrição

  

Considerando a entrada de valores inteiros não negativos, ordene estes valores segundo o seguinte critério:

- Primeiro os Pares
- Depois os Ímpares

Sendo que deverão ser apresentados os pares em ordem crescente e depois os ímpares em ordem decrescente.

  

### Entrada

A primeira linha de entrada contém um único inteiro positivo **N** (1 < **N** < 105) Este é o número de linhas de entrada que vem logo a seguir. As próximas **N** linhas conterão, cada uma delas, um valor inteiro não negativo.

  

### Saída
Apresente todos os valores lidos na entrada segundo a ordem apresentada acima. Cada número deve ser impresso em uma linha, conforme exemplo abaixo.

  

- Exemplo de entrada
```
10  
4  
32  
34  
543  
3456  
654  
567  
87  
6789  
98
```

- Exemplo de saída
```
4  
32  
34  
98  
654  
3456  
6789  
567  
543  
87
```

## Solução

  

Para a solução foi utilizado a estrutura de dados **ArrayList** juntamento com os métodos **Collections.sort()** e **Collections.reverse()** do Java que possuem como complexidade `O(n)`.