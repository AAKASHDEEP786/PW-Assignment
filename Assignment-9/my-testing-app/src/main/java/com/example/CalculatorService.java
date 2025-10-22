package com.example;

public class CalculatorService {
    private final Calculator calculator = new Calculator();

    public int calculateTotal(int[] numbers) {
        int sum = 0;
        for (int num : numbers) {
            sum = calculator.add(sum, num);
        }
        return sum;
    }
}
