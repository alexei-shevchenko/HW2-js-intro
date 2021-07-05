console.log('Задание №4');
const a = 245;
const b = 367;
const sum = a + b;
console.log(sum);

console.log(b - a);
console.log(a * b);
console.log(b / a);

console.log('Задание №5');
for (let i = 1; i < 6; i++) {
    console.log(i);
}

console.log('Задание №6');
for (let i = 5; i > 0; i--) {
    console.log(i);
}

console.log('Задание №7');

function getMarkInfo(condition) {
    if (condition === 10)
    console.log('У вас максимальный балл');
    else {
        console.log('У вас средний балл');
    }
}

getMarkInfo(10);
getMarkInfo(1);

console.log('Задание №8');

function getDayInfo(position) {
    switch (position) {
        case 0:
            console.log("Sunday");
            break;
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        default:
            console.log('Wrong data')
            break;
    }
}
getDayInfo(0)
getDayInfo(1)
getDayInfo(2)
getDayInfo(3)
getDayInfo(4)
getDayInfo(5)
getDayInfo(6)
getDayInfo(7)
getDayInfo(-1)
getDayInfo(10)

console.log('Задание №9');

let letters = ['a', 'b', 'c'];

letters.push('1', '2', '3');

console.log(letters);

console.log('Задание №10');

let array1 = [1, 2, 3];

let array2 = [4, 5, 6];

let array3 = array1.concat(array2);

console.log(array3)

console.log('Задание №11');

function sumTo(n) {
  let sum2 = 0;
  for (let i = 1; i <= n; i++) {
    sum2 += i;
  }
  return sum2;
}

console.log(sumTo(2));
console.log(sumTo(3));
console.log(sumTo(4));
console.log(sumTo(5));









