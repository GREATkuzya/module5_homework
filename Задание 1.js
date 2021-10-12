let itemNumber = +prompt("Введите значение");

if (Number.isNaN(itemNumber) === true)
  
{console.log("Упс, кажется, вы ошиблись");} 
else
function even_or_odd(itemNumber) {
      return itemNumber % 2 === 0 ? "четное" : "нечетное"
}

console.log(even_or_odd(itemNumber));