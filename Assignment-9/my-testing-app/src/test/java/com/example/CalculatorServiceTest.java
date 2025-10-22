package com.example;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

class CalculatorServiceTest {
    CalculatorService service = new CalculatorService();

    @Test
    void testCalculateTotal() {
        assertEquals(10, service.calculateTotal(new int[]{2, 3, 5}));
    }
}
