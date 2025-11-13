// 간단한 사칙연산 함수
function calculate(a, b, operator) {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return b !== 0 ? a / b : 'Error: Division by zero';
    default:
      return 'Error: Invalid operator';
  }
}

// 사용 예시
console.log(calculate(10, 5, '+')); // 15
console.log(calculate(10, 5, '-')); // 5
console.log(calculate(10, 5, '*')); // 50
console.log(calculate(10, 5, '/')); // 2
