// algorithm.test.ts
import Algorithm from '../src/main.ts';

describe('Algorithm class tests', () => {
  // 1. findMin
  describe('findMin', () => {
    test('should return the minimum positive number', () => {
      expect(Algorithm.findMin([5, 3, 9, 1, 7])).toBe(1);
    });

    test('should return null for empty array', () => {
      expect(Algorithm.findMin([])).toBeNull();
    });

    test('should work with single element array', () => {
      expect(Algorithm.findMin([42])).toBe(42);
    });
  });

  // 2. sumNegatives
  describe('sumNegatives', () => {
    test('should return the sum of negative numbers', () => {
      expect(Algorithm.sumNegatives([-1, -2, -3])).toBe(-6);
    });

    test('should return 0 if array has no negative numbers', () => {
      expect(Algorithm.sumNegatives([1, 2, 3])).toBe(0);
    });

    test('should sum only negatives in mixed array', () => {
      expect(Algorithm.sumNegatives([-5, 4, -3, 2])).toBe(-8);
    });
  });

  // 3. fibonacci
  describe('fibonacci', () => {
    test('should return nth fibonacci number', () => {
      expect(Algorithm.fibonacci(0)).toBe(0);
      expect(Algorithm.fibonacci(1)).toBe(1);
      expect(Algorithm.fibonacci(5)).toBe(5);
      expect(Algorithm.fibonacci(10)).toBe(55);
    });

    test('should return null for negative n', () => {
      expect(Algorithm.fibonacci(-1)).toBeNull();
    });
  });

  // 4. current
  describe('current', () => {
    test('should calculate current correctly', () => {
      expect(Algorithm.current(10, 2)).toBe(5);
      expect(Algorithm.current(9, 3)).toBe(3);
    });

    test('should return null if resistance is 0', () => {
      expect(Algorithm.current(10, 0)).toBeNull();
    });
  });
});
