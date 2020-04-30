class Calculator {
	constructor(previousValue, currentValue) {
		this.previousValue = previousValue;
		this.currentValue = currentValue;
		this.clear();
	}

	clear() {
		this.currentOperand = "";
		this.previousOperand = "";
		this.operation = undefined;
	}

	delete() {
		this.currentOperand = this.currentOperand.toString().slice(0, -1);
	}

	showNumber(number) {
		if(number === "." && this.currentOperand.includes(".")) return
		this.currentOperand = this.currentOperand + number.toString();
	}

	showOperations(operation) {
		if (this.currentOperand === "") return

		if (this.previousOperand !== "") {
			this.calculate();
		}

		this.operation = operation;
		this.previousOperand = this.currentOperand + " " + operation.toString();
		this.currentOperand = "";
	}

	calculate() {
		const current = parseFloat(this.currentOperand);
		const previous = parseFloat(this.previousOperand);
		let total;

		switch (this.operation) {
			case "+":
				total = previous + current;
				break;
			case "-":
				total = previous - current;
				break;
			case "÷":
				total = previous / current;
				break;
			case "*":
				total = previous * current;
				break;
			default:
				return
		}

		this.currentOperand = total;
		this.previousOperand = "";
	}

	updateDisplay() {
		this.currentValue.innerText = this.currentOperand;
		this.previousValue.innerText = this.previousOperand;
	}
}

const numberBtn = document.querySelectorAll("[data-number]");
const operations = document.querySelectorAll("[data-operations]");
const equalBtn = document.querySelector("[data-equals]");
const deleteBtn = document.querySelector("[data-delete");
const clearBtn = document.querySelector("[data-all-clear]");
const previous = document.querySelector("[data-previous-value]");
const current = document.querySelector("[data-current-value]");

//Instantiate the Calculator class
const calculator = new Calculator(previous, current);

clearBtn.addEventListener("click", () => {
	calculator.clear();
	calculator.updateDisplay();
})

numberBtn.forEach(number => {
	number.addEventListener("click", () => {
		calculator.showNumber(number.innerText)
		calculator.updateDisplay()
	});
})

operations.forEach(operation => {
	operation.addEventListener("click", () => {
		calculator.showOperations(operation.innerText)
		calculator.updateDisplay()
	});
})

equalBtn.addEventListener("click", () => {
	calculator.calculate()
	calculator.updateDisplay()
});

deleteBtn.addEventListener("click", () => {
	calculator.delete()
	calculator.updateDisplay()
})