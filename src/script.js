const displayResult = document.querySelector('#result');
const input1 = document.querySelector('#num1');
const input2 = document.querySelector('#num2');
const btnReset = document.querySelector('.btn-reset');
const btnOperate = document.querySelectorAll('.btn-operate');

btnOperate.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let result = null;
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);
    switch (e.target.value) {
      case '/':
        result = num1 / num2;
        displayResult.value = result;
        break;
      case '*':
        result = num1 * num2;
        displayResult.value = result;
        break;
      case '+':
        result = num1 + num2;
        displayResult.value = result;
        break;
      case '-':
        result = num1 - num2;
        displayResult.value = result;
        break;
    }
  });
});

btnReset.addEventListener('click', () => {
  displayResult.value = 0;
  input1.value = '';
  input2.value = '';
  input1.focus();
});
