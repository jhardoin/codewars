function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
      return true;
    }
    return false;
  }

  const isDivisible = (n, x, y) => !(n % x) && !(n % y)

  const isDivisible = (n, x, y) => n % x == 0 && n % y == 0

  const isDivisible = (n, x, y) => !(n % x) && !(n % y)