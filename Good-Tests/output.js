export function generateTextResult(calculationResult){
    const output = document.getElementById("result");
    
    let resultText = "";

    if (result === "invalid") {
        resultText = "Invalid input. You must enter valid numbers.";
    } else if (result !== "no-calc") {
        resultText = "Result: " + calculationResult;
    }

    output.textContent = resultText;
}