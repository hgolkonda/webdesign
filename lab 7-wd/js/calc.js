$(document).ready(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get("username");
    $("#username").text(username);
    const number1Input = $("#number1");
    const number2Input = $("#number2");
    const resultInput = $("#result");

    function validateInput(input, errorId) {
        const value = input.val();
        const error = $("#" + errorId);
        error.text(""); // Clear previous error messages

        if (value === "") {
            error.text("This field cannot be empty.");
            return false;
        } else if (!/^[0-9.-]+$/.test(value)) {
            error.text("Only numbers are allowed.");
            return false;
        } else if (isNaN(value)) {
            error.text("Invalid number.");
            return false;
        }

        return true;
    }

    $("button[data-operation]").click(function () {
        const operation = $(this).data("operation");
        const num1 = parseFloat(number1Input.val());
        const num2 = parseFloat(number2Input.val());

        if (validateInput(number1Input, "number1Error") && validateInput(number2Input, "number2Error")) {
            const calculate = (a, b, op) => {
                switch (op) {
                    case "add":
                        return a + b;
                    case "subtract":
                        return a - b;
                    case "multiply":
                        return a * b;
                    case "divide":
                        if (b === 0) return "Cannot divide by zero";
                        return a / b;
                    default:
                        return "Invalid operation";
                }
            };

            const result = calculate(num1, num2, operation);
            resultInput.val(result);
        } else {
            resultInput.val("");
        }
    });
});