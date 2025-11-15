class AlgorithmC {
  private static instance: AlgorithmC | null = null;

  private constructor() {}

  static getInstance() {
    if (!AlgorithmC.instance) AlgorithmC.instance = new AlgorithmC();
    return AlgorithmC.instance;
  }

  // 1. Пошук мінімального елементу масиву позитивних чисел
  public findMin(arr: number[]): number | null {
    if (arr.length === 0) return null;

    let min = arr[0];
    for (let num of arr) {
      if (num < min) {
        min = num;
      }
    }
    return min;
  }

  // 2. Розрахунок суми елементів масиву, який може складатися лише з від'ємних чисел
  public sumNegatives(arr: number[]): number | null {
    if (arr.every(i => i >= 0)) return 0;

    let sum = 0;
    for (let num of arr) {
      if (num < 0) {
        sum += num;
      }
    }
    return sum;
  }

  // 3. Алгоритм розрахунку N-го елементу послідовності Фібоначчі
  public fibonacci(n: number): number | null {
    if (n < 0) return null;
    if (n === 0) return 0;
    if (n === 1) return 1;

    let a = 0,
      b = 1;
    for (let i = 2; i <= n; i++) {
      const next = a + b;
      a = b;
      b = next;
    }
    return b;
  }

  // 4. Алгоритм розрахунку сили струму на ділянці кола
  public current(voltage: number, resistance: number): number | null {
    if (resistance === 0) return null;
    return voltage / resistance;
  }
}

const Algorithm = AlgorithmC.getInstance();

export default Algorithm;
