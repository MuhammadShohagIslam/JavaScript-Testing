import { generateTextResult, outPutResult } from "./output.js";
import { extractNumbersInput } from "./src/parser.js";
import { calculateResult } from "./src/math.js";

const form = document.querySelector("form");
function formSubmitHandler(event) {
    event.preventDefault();
    const numberInputs = extractNumbersInput(form);
    const result = calculateResult(numberInputs);
    const resultText = generateTextResult(result);
    outPutResult(resultText);
}

form.addEventListener("submit", formSubmitHandler);
