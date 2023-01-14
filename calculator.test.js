const calculateBMI = require("./calculator");

test ("Checks BMI",() => {
    expect(calculateBMI(120,123)).toBe(
        "Your BMI falls within the underweight range"
    );
        
    });

