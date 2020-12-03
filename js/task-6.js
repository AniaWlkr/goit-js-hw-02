// Напиши скрипт со следующим функционалом:

// При загрузке страницы пользователю предлагается в prompt ввести число. Ввод сохраняется в переменную input и добавляется в массив чисел numbers.
// Операция ввода числа пользователем и сохранение в массив продолжается до тех пор, пока пользователь не нажмет Cancel в prompt.
// После того как пользователь прекратил ввод нажав Cancel, если массив не пустой, необходимо посчитать сумму всех элементов массива 
// и записать ее в переменную total.Используй цикл for или for...of.После чего в консоль выведи строку 'Общая сумма чисел равна [сумма]'.
// 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно. Если хочешь, 
// в случае некорректного ввода, показывай alert с текстом 'Было введено не число, попробуйте еще раз', 
// при этом результат prompt записывать в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.

'use strict';

// Variant-1

// let input;
// const numbers = [];
// let total = 0;

// do {
//   input = prompt("Укажите число");
//   console.log(input);
  
//   if (!input) break; // нет проверки на пустую строку :(

//   input = Number(input);

//   if (Number.isNaN(input)) {
//     alert("Было введено не число, попробуйте еще раз");
//     continue;
//   }
  
//   numbers.push(input);

// } while (true); 

// if (numbers.length > 0) { 
//   for (const number of numbers) { 
//     total += number;
//   }
// }
  
// alert(`Общая сумма чисел равна ${total}`);

//Variant-2

const numbers = [];
let total = 0;

const buttonConfirmRef = document.querySelector('button[name = "btn-confirm"]');
const buttonCancelRef = document.querySelector('button[name = "btn-cancel"]');

buttonConfirmRef.addEventListener("click", () => {
  const inputRef = document.querySelector('input[name = "number"]');
  let input = inputRef.value;
  document.querySelector('input[name = "number"]').value = "";

  if (!input) input = 0;
  numbers.push(Number(input));
})

buttonCancelRef.addEventListener("click", () => {
  if (numbers.length > 0) { 
    for (const number of numbers) { 
      total += number;
    }
  }
  console.log(`Общая сумма чисел равна ${total}`);
  total = 0;
  numbers.splice(0);
})
