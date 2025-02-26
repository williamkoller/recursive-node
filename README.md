🚀 Recursão em TypeScript: Como Percorrer 100 Milhões de Números sem Estourar a Pilha?

Se você já tentou usar recursão pura para iterar sobre um grande número de elementos em JavaScript/TypeScript, provavelmente encontrou um RangeError: Maximum call stack size exceeded. 😬

🔹 O Problema
Imagine que queremos percorrer 100 milhões de números recursivamente, sem usar loops (`for`, `while`) e sem `setImmediate` ou `setTimeout`.

Um código inocente como este logo trava:

```javascript
function iterateNumbersRecursive(num: number, limit: number): void {
  if (num > limit) return;
  if (num % 10_000_000 === 0) console.log(`Iterate: ${num}`);
  iterateNumbersRecursive(num + 1, limit);
}

iterateNumbersRecursive(1, 100_000_000);
```

Output:

```bash
if (num > limit) return;
  ^

RangeError: Maximum call stack size exceeded
```

💥 Resultado? Maximum call stack size exceeded!

🔹 Por que isso acontece?
O JavaScript tem um limite de profundidade da pilha de chamadas, geralmente entre 10.000 e 100.000 chamadas. Isso significa que uma recursão direta, como a acima, não pode alcançar 100 milhões de chamadas sem estourar a pilha.

✅ A Solução: Dividir para Conquistar (Recursão Balanceada)
A ideia é não chamar 100 milhões de vezes em profundidade, mas sim dividir o problema em partes menores, reduzindo o número de chamadas recursivas.

Aqui está uma abordagem funcional que mantém a recursão pura e evita o erro de estouro de pilha:

```javascript
function iterateNumbersRecursive(start: number, end: number): void {
  if (start > end) return;

  if (start % 10_000_000 === 0) console.log(`Iterate: ${start}`);

  const mid = Math.floor((start + end) / 2);
  
  iterateNumbersRecursive(start + 1, mid);
  iterateNumbersRecursive(mid + 1, end);
}

iterateNumbersRecursive(1, 100_000_000);
```

Output:

```bash
node solution-iterate.ts 
Iterate: 1000000
Iterate: 2000000
Iterate: 3000000
Iterate: 4000000
Iterate: 5000000
Iterate: 6000000
Iterate: 7000000
Iterate: 8000000
Iterate: 9000000
Iterate: 10000000
Iterate: 11000000
Iterate: 12000000
Iterate: 13000000
Iterate: 14000000
Iterate: 15000000
Iterate: 16000000
Iterate: 17000000
Iterate: 18000000
Iterate: 19000000
Iterate: 20000000
Iterate: 21000000
Iterate: 22000000
Iterate: 23000000
Iterate: 24000000
Iterate: 25000000
Iterate: 26000000
Iterate: 27000000
Iterate: 28000000
Iterate: 29000000
Iterate: 30000000
Iterate: 31000000
Iterate: 32000000
Iterate: 33000000
Iterate: 34000000
Iterate: 35000000
Iterate: 36000000
Iterate: 37000000
Iterate: 38000000
Iterate: 39000000
Iterate: 40000000
Iterate: 41000000
Iterate: 42000000
Iterate: 43000000
Iterate: 44000000
Iterate: 45000000
Iterate: 46000000
Iterate: 47000000
Iterate: 48000000
Iterate: 49000000
Iterate: 50000000
Iterate: 51000000
Iterate: 52000000
Iterate: 53000000
Iterate: 54000000
Iterate: 55000000
Iterate: 56000000
Iterate: 57000000
Iterate: 58000000
Iterate: 59000000
Iterate: 60000000
Iterate: 61000000
Iterate: 62000000
Iterate: 63000000
Iterate: 64000000
Iterate: 65000000
Iterate: 66000000
Iterate: 67000000
Iterate: 68000000
Iterate: 69000000
Iterate: 70000000
Iterate: 71000000
Iterate: 72000000
Iterate: 73000000
Iterate: 74000000
Iterate: 75000000
Iterate: 76000000
Iterate: 77000000
Iterate: 78000000
Iterate: 79000000
Iterate: 80000000
```

🧐 Como funciona?
✔ Divide o intervalo ao invés de iterar sequencialmente, reduzindo a profundidade da recursão.
✔ Evita o erro de stack overflow, pois a profundidade máxima da recursão será de apenas 27 chamadas (~log₂(100.000.000)) em vez de 100 milhões!
✔ Continua sendo uma abordagem recursiva pura, sem for, while ou chamadas assíncronas.