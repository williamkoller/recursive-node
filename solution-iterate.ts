function iterateNumbersRecursive(start: number, end: number): void {
  if (start > end) return;

  if (start % 1_000_000 === 0) console.log(`Iterate: ${start}`);

  const mid = Math.floor((start + end) / 2);

  iterateNumbersRecursive(start + 1, mid);
  iterateNumbersRecursive(mid + 1, end);
}

iterateNumbersRecursive(1, 100_000_000);
