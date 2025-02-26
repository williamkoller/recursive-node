function iterateNumbersRecursivestack(num: number, limit: number): void {
  if (num > limit) return;

  if (num % 1_000_000 === 0) console.log(`Iterate: ${num}`);

  iterateNumbersRecursivestack(num + 1, limit);
}

iterateNumbersRecursivestack(0, 100_000_000);
