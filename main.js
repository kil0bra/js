// Задание 1
let city = 'Одинцово',
    country = 'Россия',
    pop = '100000';
let info = city +  country + pop;
console.log(info);

//Задание 2
let num1 = 40;
let num2 = 70;
let result = num1*num2;
console.log(result);
/*Задание 3
Два автомобиля одновременно выехали навстречу друг другу из двух городов и встретились через 2 часа.
    Первый ехал со скоростью 95км/ч, а второй 114км/ч.
    Исходные данные: 
    time = 2;
    speedOfFirst = 95;
    speedOfSecond = 114;*/

  let time = 2;
  let speedOfFirst = 95;
  let speedOfSecond = 114;
  let result2 = speedOfFirst*time+speedOfSecond*time;
  console.log(result2);
  let distance = 418;

  /*Задание 4:
    
    Перед вами код:
    const randomNumber = Math.floor(Math.random() * 100);

    Этот код при каждом обновлении страницы генерирует случайное число и записывает его в переменную randomNumber.

    Напишите условную конструкцию, со следующими данными:
    - если randomNumber меньше 20, то выведите в консоль сообщение : "randomNumber меньше 20"
    - если randomNumber больше 50, то выведите в консоль сообщение : "randomNumber больше 50"
    - если ни один из вариантов не совпал, то выведите в консоль сообщение : "randomNumber больше 20, и меньше 50"*/
    const randomNumber = Math.floor(Math.random() * 100);
    if(randomNumber < 20) {
      console.log('randomNumber меньше 20');
    } else if(randomNumber > 50)  {
      console.log('randomNumber больше 50');
    } else {
      console.log('randomNumber больше 20, и меньше 50');
    }

    /*Задание 5*/
    switch(randomNumber) {
      case '<20' :
        console.log('randomNumber меньше 20');
        break;
      case '>50' :
        console.log('randomNumber больше 50');
        break;
      default :
        console.log('randomNumber больше 20, и меньше 50');
    }


  