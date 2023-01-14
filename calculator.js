function calculateBMI(height, weight) {
    const BMI =weight / height ** 2;
    let result = null;

    if (BMI < 18.5) {
        result = "Your BMI falls within the underweight range";
    } else if (BMI > 18.5 && BMI < 24.9) {
        result = "Your BMI falls within the normal or healthy weight range";
    } else if (BMI > 25 && BMI < 29.9) {
        result = "Your BMI falls within the overweight range";
    } else {
        result = "Your BMI falls within the obese range";
    }
   return result;
}

calculateBMI(5,529);

module.exports = calculateBMI
