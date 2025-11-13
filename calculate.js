document.addEventListener("DOMContentLoaded", () => {
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");
  const operator = document.getElementById("operator");
  const result = document.getElementById("result");
  const button = document.getElementById("calculateBtn");

  button.addEventListener("click", () => {
    const a = parseFloat(num1.value);
    const b = parseFloat(num2.value);
    const op = operator.value;

    if (isNaN(a) || isNaN(b)) {
      result.textContent = "⚠️ 숫자를 모두 입력하세요.";
      return;
    }

    let calcResult;
    switch (op) {
      case "+":
        calcResult = a + b;
        break;
      case "-":
        calcResult = a - b;
        break;
      case "*":
        calcResult = a * b;
        break;
      case "/":
        calcResult = b !== 0 ? a / b : "Error: 0으로 나눌 수 없습니다.";
        break;
      default:
        calcResult = "Error: 잘못된 연산자입니다.";
    }

    result.textContent = `결과: ${calcResult}`;
  });
});
